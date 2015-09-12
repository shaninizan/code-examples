define([], function () {
    function qtcManageServices() {

        var initEvents = function () {

            $(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    $('.modal').removeClass('active');
                }
            });
        }

        this.init = function(){
            initEvents();
            Gumby.init({uiModules:['toggleswitch','checkbox']});
        };
    }
    return qtcManageServices;

});
var manageservices = {
    allowDrop : function (ev) {
        ev.preventDefault();
    },
    drag : function (ev) {
        var checkedchildren = this._getCheckedChildren();
        if (checkedchildren.length == 0) {
            ev.dataTransfer.setData("text", ev.target.id);
        } else {
            for (i = 0; i < checkedchildren.length; i++) {
                ev.dataTransfer.setData("text", checkedchildren[i].parentNode);
            }
        }
    },
    drop : function (ev) {
        ev.preventDefault();
        var checkedchildren = this._getCheckedChildren();
        var parent = ev.target.parentNode.id;
        if (checkedchildren.length == 0) {
            var data = ev.dataTransfer.getData("text");
            document.getElementById(parent).appendChild(document.getElementById(data));
            this._changeid(document.getElementById(data));
        } else {
            for (i = 0; i < checkedchildren.length; i++) {
                document.getElementById(parent).appendChild(checkedchildren[i].parentNode);
                this._changeid(checkedchildren[i].parentNode);
            }
            this._uncheckall();
        }
    },
    assign : function () {
        var checkedchildren = this._getCheckedChildren();
        if (checkedchildren.length < 1) {
            alertWarning('Please select at least one extension.');
            return;
        }
        var selectedfeature = document.getElementsByClassName("selected");
        if (selectedfeature.length < 1) {
            alertWarning('Please select a feature on the right.');
            return;
        }
        var parent = selectedfeature[0].id;
        for (i = 0; i < checkedchildren.length; i++) {
            document.getElementById(parent).appendChild(checkedchildren[i].parentNode);
            this._changeid(checkedchildren[i].parentNode);
        }
        this._uncheckall();
    },
    unassign : function (ac) {
        var checkedchildren = this._getCheckedChildren();
        if (checkedchildren.length < 1) {
            alertWarning('Please select at least one extension');
            return;
        }
        var parent = 'cs-list-extensions';
        if (ac == 'a') {
            parent = 'as-list-extensions';
        }
        for (i = 0; i < checkedchildren.length; i++) {
            document.getElementById(parent).appendChild(checkedchildren[i].parentNode);
            this._changeid(checkedchildren[i].parentNode);
        }
        this._uncheckall();
    },
    selectFeature : function (id) {
        this._deselectOthers();
        document.getElementById(id).className = "selected";
    },
    _getCheckedChildren : function () {
        var list = document.querySelectorAll('label.checked');
        var checkedchildren = Array();
        for (i = 0; i < list.length; i++) {
            checkedchildren.push(list[i]);
        }
        return checkedchildren;
    },
    _changeid : function (listitem) {
        var parentid = document.getElementById(listitem.id).parentNode.id;
        var parenttype = this._getParentType(parentid);
        var newid = this._stripId(listitem.id);
        if (parenttype == 'list') {
            document.getElementById(listitem.id).setAttribute('id', newid);
        } else if (parenttype == 'feature') {
            document.getElementById(listitem.id).setAttribute('id', newid + parentid.substring(10));
        }
    },
    _getParentType : function (id) {
        if (id.substring(3, 10) == 'feature') {
            return 'feature';
        }
        if (id.substring(3, 7) == 'list') {
            return 'list';
        }
    },
    _stripId : function (listitem) {
        var assignlistpattern = new RegExp("as-ext-[0-9]{1,5}");
        var changelistpattern = new RegExp("cs-ext-[0-9]{1,5}");
        if (listitem.substring(0, 1) == 'a') {
            newlistid = assignlistpattern.exec(listitem);
        } else if (listitem.substring(0, 1) == 'c') {
            newlistid = changelistpattern.exec(listitem);
        }
        return newlistid[0];

    },
    _uncheckall : function () {
        var alllabels = document.querySelectorAll('label.checked');
        var allicons = document.querySelectorAll('i.icon-check');
        for (i = 0; i < alllabels.length; i++) {
            alllabels[i].className = alllabels[i].className.replace('checked', '');
        }
        for (i = 0; i < allicons.length; i++) {
            allicons[i].parentNode.removeChild(allicons[i]);
        }
    },
    _deselectOthers : function () {
        var elements = document.getElementsByClassName("selected");
        for (i = 0; i < elements.length; i++) {
            elements[i].className = "";
        }
    }
};

var alertWarning = function(msg){
    document.getElementById('alertWarning').className = 'modal active';
    document.getElementById('alertmessage').innerHTML = msg;
}
