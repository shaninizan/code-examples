/*** default address fields are the same as US ***/
var CountryAddressFields = {
	US : { AddressFields :
		[
			{ id : "addr1", label : "Address Line 1", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Address Line 2", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : true },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
			{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
		]
	},
	JP : { AddressFields :
		[
			{ id : "addr1", label : "Chome/Banchi", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Company/Building/Apartment", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "City/Ward", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "areaTerritoryPrefecture", label : "Prefecture", name : "areaTerritoryPrefecture", isVisible : true }
		]
	},
	KR : { AddressFields :
		[
			{ id : "cityCountyWard", label : "County/City", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
		]
	},
	TW : { AddressFields :
		[
			{ id : "cityCountyWard", label : "County/City", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
		]
	},
	HK : { AddressFields :
		[
			{ id : "addr1", label : "Street", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Building/Apartment", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : false },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "City/Town/Village", name : "districtTownVillage", isVisible : true },
			{ id : "areaTerritoryPrefecture", label : "District", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : false }
		]
	},
	CN : { AddressFields :
		[
			{ id : "addr1", label : "Address", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Room/Building", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "City/County/District", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
			{ id : "areaTerritoryPrefecture", label : "Province/City", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
		]
	},
	SG : { AddressFields :
		[
			{ id : "addr1", label : "Address", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Room/Building", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : false },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
			{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false }
		]
	},
	PH : { AddressFields :
		[
			{ id : "addr1", label : "Street/Road", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Apartment/Building/Block", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false }
		]
	},
	TH : { AddressFields :
		[
			{ id : "addr1", label : "Street/Road", name : "addrLine1StreetName", isVisible : true },
			{ id : "addr2", label : "Room/Apartment", name : "addrLine2RoomApartment", isVisible : true },
			{ id : "cityCountyWard", label : "Village/City", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false }
		]
	},
	MY : { AddressFields :
		[
			{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
		]
	},
	ID : { AddressFields :
		[
			{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
		]
	},
	AU : { AddressFields :
		[
			{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
		]
	},
	NZ : { AddressFields :
		[
			{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
	},
	MX : { AddressFields :
		[
			{ id : "stateProv", label : "Province/State", name : "stateProvCode", isVisible : true }
		]
	},
	CA : { AddressFields :
		[
			{ id : "stateProv", label : "Province", name : "stateProvCode", isVisible : true }
		]
	},
	KP : { AddressFields :
		[
			{ id : "cityCountyWard", label : "City/County", name : "cityCountyWard", isVisible : true },
			{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
		]
	}
}	

var addressMap = {
	reqAddrObj : {},
	langObj : [],
	langCode: '',
	langDropDown : [],
	createLabel : function(Definition) {
		var country = get('countryCode').value;
		
		if (country == "US") {
			addressMap.reqAddrObj = { 
				"addrLine1StreetName" : true,
				"addrLine2RoomApartment" : false,
				"districtTownVillage" : false,
				"cityCountyWard" : true,
				"areaTerritoryPrefecture" : false,
				"districtCode" : false,
				"stateProvCode" : true,
				"postalCode" : true	
			}	
		}
		if (country == "CA") {
			addressMap.reqAddrObj = { 
				"addrLine1StreetName" : true,
				"addrLine2RoomApartment" : false,
				"districtTownVillage" : false,
				"cityCountyWard" : true,
				"areaTerritoryPrefecture" : false,
				"districtCode" : false,
				"stateProvCode" : true,
				"postalCode" : true
			}	
		}	
		switch(Definition.name) {
			case "addrLine1StreetName":
				if (addressMap.reqAddrObj.addrLine1StreetName == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "addrLine2RoomApartment":
				if (addressMap.reqAddrObj.addrLine2RoomApartment == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "districtTownVillage":
				if (addressMap.reqAddrObj.districtTownVillage == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "cityCountyWard":
				if (addressMap.reqAddrObj.cityCountyWard == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "areaTerritoryPrefecture":
				if (addressMap.reqAddrObj.areaTerritoryPrefecture == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "districtCode":
				if (addressMap.reqAddrObj.districtCode == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "stateProvCode":
				if (addressMap.reqAddrObj.stateProvCode == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
			case "postalCode":
				if (addressMap.reqAddrObj.postalCode == true) {
					return ("* "+ Definition.label);
				} else {
					return Definition.label;				
				}
				break;
		}
	},
	createReqAddrObj : function(data){
		if (data != null) {
			addressMap.reqAddrObj = { 
				"addrLine1StreetName" : data.addrLine1StreetNameRequired,
				"addrLine2RoomApartment" : data.addrLine2RoomApartmentRequired,
				"districtTownVillage" : data.districtTownVillageRequired,
				"cityCountyWard" : data.cityCountyWardRequired,
				"areaTerritoryPrefecture" : data.areaTerritoryPrefectureRequired,
				"districtCode" : data.districtCodeRequired,
				"stateProvCode" : data.stateProvCodeRequired,
				"postalCode" : data.postalCodeRequired
			}
		return addressMap.reqAddrObj;
		}
	},
	addressFields : function(countryCode) {
		if(arguments.length != 2) {
			countryCode = get('countryCode').value; 
		}
		if(countryCode != "US" && countryCode != "CA") {
			AddressValidationProcessor.getAddressValidation(countryCode,{callback:this.createReqAddrObj,timeout:25000,async:false});

		}
		var Country = '';
		if(CountryAddressFields[countryCode]) {
			Country = CountryAddressFields[countryCode].AddressFields;
		} else {
			Country =  CountryAddressFields["US"].AddressFields;
		}

		var DefaultState = CountryAddressFields["US"].AddressFields;
		for(var i=0; i < DefaultState.length; i++) {
			var isFound = false;
			for(var j=0; j < Country.length; j++) {
				if(DefaultState[i].id == Country[j].id) {
					if(Country[j].isVisible) {
						setInnerHTML(DefaultState[i].id + "_label", this.createLabel(Country[j]));
						show(DefaultState[i].id + "_label");
						show(DefaultState[i].id);
					} else { 
						hide(DefaultState[i].id + "_label");
						hide(DefaultState[i].id);
					}
				isFound = true;
				break;
				}
			}
			if(!isFound) {
				if(DefaultState[i].isVisible) {
					setInnerHTML(DefaultState[i].id + "_label", this.createLabel(DefaultState[i]));
					show(DefaultState[i].id + "_label");
					show(DefaultState[i].id);
				} else { 
					hide(DefaultState[i].id + "_label");
					hide(DefaultState[i].id);
				}
			}
		}
	},
	languageOptions : function(country) {
		if(country != "US" && country != "CA") {
			LanguageProcessor.getLanguages(country, this.displayLanguages);
		} else {
			var langArray = [];
			var langInfo = {
				"languageCode" : "ENG",
				"languageName" : "English",
				"primaryLanguageIndicator" : "Y"
			}
			langArray.push(langInfo);
			this.langObj = langArray;
			this.displayLanguages();
		}
	},
	displayLanguages : function(data){
		this.langDropDown = get('language');
		var langArray = [];
		var langData = {};
		
		if(data != null) {
			for(i=0; i<data.langList.length; i++) {
				langData = {
					"languageCode" : data.langList[i].languageCode,
					"languageName" : data.langList[i].languageName,
					"primaryLanguageIndicator" : data.langList[i].primaryLanguageIndicator
					};
				langArray.push(langData);
			}
			this.langObj = langArray;
		}
		
		var selIdx = 0
		if(this.langObj != null) {
			this.langDropDown.length = 0;
			for(i=0; i<this.langObj.length; i++) {
				var selValue = this.langObj[i].languageCode;
				if(addressMap.langCode == 'name') {
					selValue = this.langObj[i].languageName;
				}
				this.langDropDown.length++;
				this.langDropDown[i].text = this.langObj[i].languageName;
				this.langDropDown[i].value = selValue;
				if(this.langDropDown[i].primaryLanguageIndicator == 'Y'){
					selIdx = i;
				}
			}
		this.langDropDown.selectedIndex = selIdx;
		}
	},
	languageCodeSelect : function() {
	var langCd = lang;
		for(i=0; i<get('language').length; i++) {
			if(get('language')[i].value == langCd) {
				get('language').selectedIndex = i;
				return;
			}
		}
	},
	setAddressType : function() {
		var atype = get('atype').value;
		if(atype == 'B') {
			show('bname');
		} else {
			hide('bname');
		}
	},
	setPhoneType : function(id) {
		if(arguments.length < 1) {
			var id = "primaryPhone";
		}
		var phoneType = get(id).value;
		if(phoneType == 'B' && id == "primaryPhone") {
			setInnerHTML('pExt','Ext: <input type="text" maxlength="5" id="primaryExt" name="pext" size="5" value=""/>');
		} else if (phoneType != 'B' && id == "primaryPhone") {
			setInnerHTML('pExt','');
		}

		if(phoneType == 'B' && id == "altPhone") {
			setInnerHTML('aExt','Ext: <input type="text" maxlength="5" id="altExt" name="altpext" size="5" value=""/>');
		} else if (phoneType != 'B' && id == "altPhone") {
			setInnerHTML('aExt','');
		}
	},
	countrySwitch : function() {
		if(arguments.length == 0) {
			objId = 'countryCode';
		}
		var country = get(objId).value;
		this.addressFields(country);
		/*
		if(CountryAddressFields[country]) {
			this.addressFields(CountryAddressFields[country].AddressFields);
		} else {
			this.addressFields(CountryAddressFields["US"].AddressFields);
		}
		*/
		this.langCode = 'name';
		this.languageOptions(country);
	},
	validatePhone : function() {
		var error = false;
		var primCC = get("primaryCountryCode").value;
		var primArea = get("primaryAreaCode").value;
		var primPhone = get("primaryNumber").value;
		var altCC = get("altCountryCode").value;
		var altArea = get("altAreaCode").value;
		var altPhone = get("altNumber").value;
		var primExt = "";
		var altExt = "";

		//remove any previous errors
		valObj.removeError("primaryCountryCode");
		valObj.removeError("primaryAreaCode");
		valObj.removeError("primaryNumber");
		valObj.removeError("altCountryCode");
		valObj.removeError("altAreaCode");
		valObj.removeError("altNumber");
		if (get("primaryExt") ){
			valObj.removeError("primaryExt");
			primExt = get("primaryExt").value;
		}
		
		if (get("altExt") ){
			valObj.removeError("altExt");
			altExt = get("altExt").value;
		}

		if(primCC.match(/^[\d\-\.\+]{1,10}$/) == null) { 
			valObj.markError("primaryCountryCode");
			error = true;
		}
		if(primArea.match(/^[\d\-\.]{1,5}$/) == null) {
			valObj.markError("primaryAreaCode");
			error = true;
		}
		if(primPhone.match(/^[\d\-\.]{6,13}$/) == null) {
			valObj.markError("primaryNumber");
			error = true;
		}
		if(primExt != "") {
			if(primExt.match(/^[\d\-\.]{1,5}$/) == null || primExt.length > 5 ) {
				valObj.markError("primaryExt");
				error = true;
			}
		}
		if(altCC != "" ) {
			if(altCC.match(/^[\d\-\.\+]{1,10}$/) == null) {
				valObj.markError("altCountryCode");
				error = true;
			}
		}
		if(altArea != "" ) {
			if(altArea.match(/^[\d\-\.]{1,5}$/) == null) {
				valObj.markError("altAreaCode");
				error = true;
			}
		}
		if(altPhone != "" ) {
			if(altPhone.match(/^[\d\-\.]{6,13}$/) == null) {
				valObj.markError("altNumber");
				error = true;
			}
		}
		if(altExt != "" ) {
			if(altExt.match(/^[\d\-\.]{1,5}$/) == null || altExt.length > 5 ) {
				valObj.markError("altExt");
				error = true;
			}
		}
		if(error == true) {
			return false;
		}
	},
	validateAddressFields : function() {
		var error = false;
		//var country = get("countryCode").value;
		//var requiredFields = AddressValidationObject[country].AddressFields;

		if(addressMap.reqAddrObj.addrLine1StreetName) {
			if(valObj.validateStreet("addr1") == false) { error = true;}
		}
		if(addressMap.reqAddrObj.addrLine2RoomApartment) {
			if(valObj.validateStreet("addr2") == false) { error = true;}
		}
		if(addressMap.reqAddrObj.cityCountyWard) {
			if(valObj.validateCity("cityCountyWard") == false) { error = true;}
		}
		if(addressMap.reqAddrObj.stateProvCode) {
			if(valObj.validateCity("stateProv") == false) { error = true;}
		}	
		if(addressMap.reqAddrObj.districtTownVillage) {
			if(valObj.validateCity("districtTownVillage") == false) { error = true;}
		}
		if(addressMap.reqAddrObj.areaTerritoryPrefecture) {
			if(valObj.validateStreet("areaTerritoryPrefecture") == false) { error = true;}
		}
		if(addressMap.reqAddrObj.postalCode) {
			if(valObj.validatePostalCode("postal") == false) { error = true;}
		}
		if(error == true) {
			return false;
		}
	},
	openCountryCodes : function(tbForm, tbBox, e) {
		self.countryCodeForm = tbForm;
		self.countryCodeBox = tbBox;
		
		w = screen.width-400
		h = screen.height-215
		x = e.screenX
		y = e.screenY
		if(x > w){
			x = x-400
		}
		if(y > h){
			y = y-215
		}
		childwin=window.open('/components/help/countryCodes.jsp','CountryCodes','width=460,height=319,top='+y+',left='+x);
	},
	setCountryCode : function(countryCode) {
		var box = get(countryCodeBox);
		box.value = countryCode;
	
		if (childwin != null){
			childwin.close()
			childwin = null
		}
	}	
}
