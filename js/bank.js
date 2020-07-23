//enter button event 
let enterButton = document.querySelector('#enter');
enterButton.addEventListener('click', function(){
    const form = document.querySelector('#form');
    const weclome = document.querySelector('#welcomeBank')
    const secondSection = document.querySelector('#secondSection')
    form.style.display = 'none';
    weclome.innerText = 'Your Account';
    secondSection.style.display = 'block';
})

//deposit button event
const depositButton = document.querySelector('#depositButton');

depositButton.addEventListener('click', function(){
    const depositInput = document.querySelector('#depositInput').value;
    const depositInputNumber = parseFloat(depositInput);
    const depositAmount = document.querySelector('#deposit').innerText;
    const DepositAmountNumber = parseFloat(depositAmount);
    const totalDepositAmount = DepositAmountNumber + depositInputNumber;
    document.querySelector('#deposit').innerText = totalDepositAmount
    document.querySelector('#depositInput').value= '';
//deposit + balance
    const balanceAmount = document.querySelector('#balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    const totalBalanceAmunt = balanceAmountNumber + depositInputNumber;
    document.querySelector('#balance').innerText = totalBalanceAmunt;
})

//withdraw button event
const withdrawButton = document.querySelector('#withdrawButton')

withdrawButton.addEventListener('click', function(){
    const withdrawValue = document.querySelector('#withdrawInput').value;
    const withdrawNumber = parseFloat(withdrawValue);
    const withdrawAmount = document.querySelector('#withdraw').innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmount)
    const totalWithdrawAmount = withdrawNumber + withdrawAmountNumber;
    document.querySelector('#withdraw').innerText = totalWithdrawAmount;
    document.querySelector('#withdrawInput').value ='';
//withdraw - balance
    const balanceWithdraw = document.querySelector('#balance').innerText;
    const balanceWithdrawNumber = parseFloat(balanceWithdraw);
    const totalWithdrawBalanceAmunt = balanceWithdrawNumber - withdrawNumber;
    document.querySelector('#balance').innerText = totalWithdrawBalanceAmunt;
})

