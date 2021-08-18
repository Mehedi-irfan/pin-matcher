function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('generate-input').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
})
function veryfiPin(){
    const pin = document.getElementById('generate-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const matchNotification = document.getElementById('notify-success');
    const faildNotification = document.getElementById('notify-faild');
    if(pin == typedNumbers){
        matchNotification.style.display = 'block';
        faildNotification.style.display = 'none';
    }
    else{
        matchNotification.style.display = 'none';
        faildNotification.style.display = 'block';
    }
}