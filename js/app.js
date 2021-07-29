'use strict'

const button = document.querySelector('.list-block__button')
const input = document.querySelector('.list-block__input')
const list = document.querySelector('.list-block__shopping-list')
const switchThemeButton = document.querySelector('.switch-theme-button__button')
const switchThemeCheckbox = document.querySelector('.switch-theme-button__checkbox')
const switchThemeText = document.querySelector('.switch-theme-button__text')


const inputTips = [
    'For exmpl: buy a coffe',
    'For exmpl: do homework',
    'For exmpl: walk with dog',
    'For exmpl: feed a cat',
    'For exmpl: buy a notebook',
    'For exmpl: close a door',
    'For exmpl: find a key',
    'For exmpl: finish a job',
    'For exmpl: meet friends',
    'For exmpl: buy a boll',
]

const getRandomTip = () => inputTips[parseInt(Math.random() * 10).toFixed(0)]
const setCSSVarProperty = (variable, value) => document.documentElement.style.setProperty(variable, value)

let tip = getRandomTip()
input.setAttribute('placeholder', tip) 

button.onclick = () => {
    const inputValue = input.value
    input.value = ''
    
    // '', undefinded, null, 0, false --- return false
    if (inputValue.trim()) {
        const listItem = document.createElement('li')
        listItem.textContent = inputValue
        listItem.className = 'list-block__list-item'
        list.appendChild(listItem)
        
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete'
        deleteButton.className = 'list-block__delete-button secondary-button'
        listItem.appendChild(deleteButton)

        deleteButton.onclick = () => listItem.remove()
        
        tip = getRandomTip()
        input.setAttribute('placeholder', tip)
    }
    
    input.focus()
}

// when Enter is pressed, button 'Add' is clicked 
input.addEventListener('keydown', event => {
    if(event.code === 'Enter') button.click()
}) 

//dark theme CHECKBOX
switchThemeButton.onclick = () => {
    switchThemeCheckbox.click()
    //switch dark theme
    if (switchThemeCheckbox.checked === true) {
        setCSSVarProperty('--background-color', 'rgb(37, 37, 37)')
        setCSSVarProperty('--text-color', '#fff')
        setCSSVarProperty('--border-color', '#fff')
        switchThemeText.textContent = 'Dark theme'
    }
    //switch light theme
    if (switchThemeCheckbox.checked === false) {
        setCSSVarProperty('--background-color', '#fff')
        setCSSVarProperty('--text-color', '#000')
        setCSSVarProperty('--border-color', '#000')
        switchThemeText.textContent = 'Light theme'
    }
}

// when / is pressed, input is focused
addEventListener('keydown', event => {
    if (event.code === 'Slash') setTimeout(() => input.focus())
})

// when Esc is pressed, input is unfocused
addEventListener('keydown', event => {
    if (event.code === 'Escape') setTimeout(() => input.blur())
})




// it's learning ---
// using css selector .class , #id , tag --- learning part
// document.querySelectorAll('div').forEach(item => console.log(item.nextElementSibling))

const resultArray = Array.from(document.querySelectorAll('*')).filter(item => item.className === 'list-block__control-panel')
const findedElement = resultArray.pop()
// console.log(findedElement.childNodes[0] instanceof Node) // Comment. Text Node. true, but if instanceof Element - will be false
// console.log(findedElement.childNodes[0].nodeType) //3 text node <!-- comment -->
// console.log(findedElement instanceof HTMLElement) // true

// console.log(findedElement.previousElementSibling)
// console.log(findedElement.previousSibling)

const staticArray = document.querySelectorAll('div') // it doesn't update
const dynamicArray = document.getElementsByTagName('div') // it's a live array. It updates
