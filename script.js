function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
// const numbers = document.querySelectorAll(".number")
// console.log(numbers)


// const numbers = document.querySelectorAll(".number")
// numbers.forEach((number) => {
//     console.log(number)
// })

// const numbers = document.querySelectorAll(".number")

// numbers.forEach((number) => {
//     number.addEventListener("click", () ={
//         console.log("number is pressed")
//     })
// })

// const numbers = document.querySelectorAll(".number")

// numbers.forEach((_number) =>{
//     numbers.addEventListener("click", (event) =>{
//         console.log(event.target.value)
//     })
// })

// const CalculatorScreen = document.querySelector('.calculator-screen')

// const updateScreen = (number) => {
//     CalculatorScreen.value = number
// };

// let prevNumber = ''
// let CalculatorOperator = ''
// let currentNumber = '0'

// const inputNumber = (number) => {
//     currentNumber = number
// }

// numbers.forEach(number => {
//     number.addEventListener("click", (event) =>{
//         inputNumber(event.target.value)
//         updateScreen(currentNumber)
//     })
// })

// const inputNumber = (number) =>{
//     if (currentNumber === '0') {
//         currentNumber = number
//     } else {
//         currentNumber += number
//     }
// }

// const inputOperator = operator =>{
//     prevNumber = currentNumber
//     CalculatorOperator = operator
//     currentNumber = ''
// }

// const operator = document.querySelectorAll(".operator")

// operators.forEach(operator => {
//     operator.addEventListener("click", (event) => {
//         inputOperator(event.target.value)
//     })
// })

// const equalSign = document.querySelector('.equal-sign')

// equalSign.addEventListener('click', () => {
//     console.log('equal button is pressed')
// })


// const calculate = () =>{
//     let result = ''
//     switch (CalculatorOperator) {
//         case "+":
//             result =prevNumber + currentNumber
//             break;
//         case "-":
//             result =prevNumber - currentNumber
//             break;
//         case "*":
//             result =prevNumber * currentNumber
//             break;
//             case "/":
//             result =prevNumber / currentNumber
//             break;
//         default:
//             break;
//     }
//     currentNumber =result
//     CalculatorOperator = ''
// };

// const equalSign = document.equalSelector('.equal-sign')

// equalSign.addEventListener('click', () => {
//     calculate()
//     updateScreen(currentNumber)
// })

// const calculate = () =>{
//     let result =''
//     switch (CalculatorOperator) {
//         case '+':
            
//             result = parseFloat(prevNumber) + parseFloat(currentNumber)
//             break;
//     }
// }

// const  clearbtn = document.querySelector('.all-clear')
// clearbtn.addEventListener('click', () =>{
//     console.log('AC button is presssed')
// })

// const clearAll =() =>{
//     prevNumber = ''
//     CalculatorOperator = ''
//     currentNumber = '0'
// }

// clearbtn.addEventListener('click', () =>{
//     clearAll()
//     updateScreen(currentNumber)
// })

// inputDecimal = (dot) => {
//     if( currentNumber.includes('.')){
//         return 
//     }
//     currentNumber += dot
// }
