//step1
document.getElementById('btn-withdraw').addEventListener('click',function() {
//step2
const withdrawField=document.getElementById('withdraw-field');
const newWithdrawAmountString=withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);
withdrawField.value='';

if(isNaN(newWithdrawAmount)){
  alert('Enter valid number')
  return;
}
//step-3
const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
 const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

 //step5
 const balanceTotalElement=document.getElementById('balance-total');
 const previousBalanceString=balanceTotalElement.innerText;
 const previousBalance=parseFloat(previousBalanceString);
 if(newWithdrawAmount>previousBalance){
   alert('Not enough Balance');
   return;
 }
  //step-4

 const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
 withdrawTotalElement.innerText=currentWithdrawTotal;

 //step 6
 const currentBalanceTotal=previousBalance-newWithdrawAmount;
   balanceTotalElement.innerText=currentBalanceTotal;
    
})