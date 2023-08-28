//step-1
document.getElementById('btn-submit').addEventListener( 'click', function () {
    console.log('submit btn click')
    //step2
  const emailId=document.getElementById('user-email');
const mail=emailId.value;
console.log(mail);
//step3
const password=document.getElementById('user-password');
const pass=password.value;
console.log(pass);
//step-4
if(mail==='mery.cse.nsu@gmail.com' && pass==='01704306666'){
    //console.log ('valid User');
    window.location.href='bank.html';
}
else{
    //console.log('invalid User');
    alert('wrong password. please enter the correct password');
}




})
