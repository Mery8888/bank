document.getElementById('btn-deposit').addEventListener( 'click', function () {
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    depositField.value='';

    if(isNaN(newDepositAmount)){
        alert ('please Enter Valid Number')
        return;
    }
    
    //get deposit totall amount ... input or text area na hole amra .innerText use korbo otherwise .value use korbo
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalS=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalS);
    //calculate deposit
    const currentDeposit=previousDepositTotal+newDepositAmount;
    
    depositTotalElement.innerText=currentDeposit;

    // get current balance
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceString=balanceTotalElement.innerText;
    const previousBalance=parseFloat(previousBalanceString);
    //calculate total balance:
    const currentBalanceTotal=previousBalance + newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;
    


    



})
