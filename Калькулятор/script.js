let lastOperand = 0;
let operation = null;

const button = document.querySelector('#button');

document.querySelector('#button_delete').addEventListener('click', function() {
    lastOperand = 0;
    operation = null;
    input.value = '';
})


document.querySelector('#button_1').addEventListener('click', function() {
    input.value += '1';
})
document.querySelector('#button_2').addEventListener('click', function() {
    input.value += '2';
})
document.querySelector('#button_3').addEventListener('click', function() {
    input.value += '3';
})
document.querySelector('#button_4').addEventListener('click', function() {
    input.value += '4';
})
document.querySelector('#button_5').addEventListener('click', function() {
    input.value += '5';
})
document.querySelector('#button_6').addEventListener('click', function() {
    input.value += '6';
})
document.querySelector('#button_7').addEventListener('click', function() {
    input.value += '7';
})
document.querySelector('#button_8').addEventListener('click', function() {
    input.value += '8';
})
document.querySelector('#button_9').addEventListener('click', function() {
    input.value += '9';
})
document.querySelector('#button_0').addEventListener('click', function() {
    input.value += '0';
})


document.querySelector('#button_sum').addEventListener('click', function() {
    lastOperand = parseInt(input.value);
    operation = "sum";
    input.value = '';
})

document.querySelector('#button_calc').addEventListener('click', function() {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
})

document.querySelector('#button_def').addEventListener('click', function() {
    lastOperand = parseInt(input.value);
    operation = "def";
    input.value = '';
})

document.querySelector('#button_calc').addEventListener('click', function() {
    if (operation === 'def') {
        const result = lastOperand - parseInt(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
})




document.querySelector('#button_mult').addEventListener('click', function() {
    lastOperand = parseInt(input.value);
    operation = "mult";
    input.value = '';
})

document.querySelector('#button_calc').addEventListener('click', function() {
    if (operation === 'mult') {
        const result = lastOperand * parseInt(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
})




document.querySelector('#button_sub').addEventListener('click', function() {
    lastOperand = parseInt(input.value);
    operation = "sub";
    input.value = '';
})

document.querySelector('#button_calc').addEventListener('click', function() {
    if (operation === 'sub') {
        const result = lastOperand / parseInt(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
})




  