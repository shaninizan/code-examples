(function(){
  var Banking = {
    balance : 0,
    amount: 0,
    account: "",
    accType: "checking",
    init: function() {
      //initial state of balances
      document.addEventListener('DOMContentLoaded', Banking.initialDisplay, false);

      //register click events
      document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        // determine deposit or withdrawal
        var dw = target.className;

        //determine and set account type
        Banking.account = target.parentNode.id;
        var accType = Banking.account.split("_");
        if (accType[0] != 'account') { return; }
        Banking.accType = accType[1];

        //reset global balance & amount
        Banking.balance = document.getElementById(Banking.account).getElementsByTagName('span')[0].innerHTML;
        Banking.amount = document.getElementById(Banking.account).getElementsByClassName('amount')[0].value;

        if((dw == "deposit") && (Banking.accType == "checking"))
          Banking.deposit();
        else if ((dw == "deposit") && (Banking.accType == "retirement"))
          Banking.retirementDeposit();
        else if (dw == "withdraw") 
          Banking.withdraw();
      }, false);
    },
    deposit : function() {
      var amount = parseInt(Banking.amount);
      var balance = parseInt(Banking.balance);

      //prevent invalid entry from causing weird display
      if(isNaN(amount)) {
         return;
      }

      // update global balance value and display
      Banking.balance = balance + amount;
      Banking.updateDisplay();
    },
    retirementDeposit : function() {
      Banking.balance = parseInt(Banking.balance) + 10;
      Banking.deposit();
    },
    withdraw : function() {
      amount = parseInt(Banking.amount);
      balance = parseInt(Banking.balance);
      if(amount < balance) {
        Banking.balance = balance - amount;
      } else {
        // for usability purposes, it's best to have a message, though a custom error div would be preferable to alert.
        alert('Invalid transaction. Withrawal amount must be less than the balance.');
      }
      Banking.updateDisplay();
    },
    initialDisplay : function() {
      var balancedivs = document.getElementsByClassName("balance");
      for(i =0; i<balancedivs.length; i++) {
        Banking.account = balancedivs[i].parentNode.id;
        Banking.updateDisplay();
      }
    },
    updateDisplay : function() {
      if(Banking.balance <= 0) {
        document.getElementById(Banking.account).getElementsByClassName("balance")[0].classList.add('zero');
      } else {
        document.getElementById(Banking.account).getElementsByClassName("balance")[0].classList.remove('zero');
        document.getElementById(Banking.account).getElementsByTagName("span")[0].innerHTML = Banking.balance;   
      }
    }

  //how to deposit
  /*
    * get amount
    * check for account type (checking vs retirement)
    * do math
  */
  //how to withdraw
  /*
    * get amount
    * compare amount to balance
    * either do math or alert
  */
  //update display
  /*
    * this needn't be much different than it is today
  */



//  alert(document.getElementById('account_checking-1').getElementsByClassName('deposit'));
  /*
  $('#deposit1').click(depositAccount1);
  $('#deposit2').click(depositAccount2);
  $('#withdraw1').click(withdrawAccount1);
  $('#withdraw2').click(withdrawAccount2);
  */
 // updateDisplay();
  }

  Banking.init();

})();