class Calculator {
    constructor(firstNumberTextElement, secondNumberTextElement) {
        this.firstNumberTextElement = firstNumberTextElement
        this.secondNumberTextElement = secondNumberTextElement
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allCLearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const firstNumberTextElement = document.querySelector('[data-firstNumber]')
const secondNumberTextElement = document.querySelector('[data-secondNumber]')