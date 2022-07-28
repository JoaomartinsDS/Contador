console.log("hello world")
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function adicionar (){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function subtrair (){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
