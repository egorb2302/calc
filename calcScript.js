let firstNum = [];
let secondNum = [];

function deligate1(event) {
    let id = event.target.closest('.nums > div');

    if(!id) return

    if(!document.contains(id)) return
    
    const finalNum = id.textContent;
    firstNum.push(finalNum);
    input.style.display = 'none';
    input2.style.display = 'flex';
}

function deligate2(event) {
    let id = event.target.closest('.nums > div');

    if(!id) return

    if(!document.contains(id)) return
    
    const finalNum2 = id.textContent;
    secondNum.push(finalNum2);
}

document.addEventListener('click', deligate1);


const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');

let currentOperator = null;

plusBtn.onclick = () => { currentOperator = '+'; switchNum(); };
minusBtn.onclick = () => { currentOperator = '-'; switchNum(); };
divideBtn.onclick = () => { currentOperator = '/'; switchNum(); };
multiplyBtn.onclick = () => { currentOperator = '*'; switchNum(); };

function switchNum() {
    if (firstNum) {
        document.removeEventListener('click', deligate1);

        document.addEventListener('click', deligate2)
    }
}

const resultOfPlus = document.querySelector('#sum');
resultOfPlus.onclick = () => {
    const trueFirstNum = +firstNum.join('');
    const trueSecondNum = +secondNum.join('');

    const num1 = trueFirstNum;
    const num2 =trueSecondNum;

    if (currentOperator === '+') {
        console.log(num1 + num2)
        input2.value = [num1 + num2].join('')
    } else if (currentOperator === '-') {
        console.log(num1 - num2)
        input2.value = [num1 - num2].join('')
    } else if (currentOperator === '/') {
        console.log(num1 / num2)
        input2.value = [num1 / num2].join('') 
    } else if (currentOperator === '*') {
        console.log(num1 * num2)
        input2.value = [num1 * num2].join('')
    } else {
        console.log('такого пока не умеем')
    }

    console.log(trueFirstNum)
    console.log(trueSecondNum)
};



console.log(firstNum)
console.log(secondNum)

