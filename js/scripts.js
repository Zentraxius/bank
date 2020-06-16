function Bank() {
 this.accountName = accountName;
 this.startingAmt = startingAmt;
 this.deposit = deposit;
 this.withdrawl = withdrawl;
}

Bank.prototype.startingAmt = function() {
  
}

Bank.prototype.deposit = function() {
  
}

Bank.prototype.withdrawl = function() {
  
}



$(document).ready(function(){
  $('form#new-account').submit(function(event) {
    event.preventDefault();

    let clientName = $('input#userName').val()
    let initalBalance = ($('input#initialDeposit').val() + $('#giveMeMoney').val() - $('#takeMyMoney').val())


    $('.balanceDisplay').text('$'+initalBalance)
    $('.userName').text(clientName)
  })
})