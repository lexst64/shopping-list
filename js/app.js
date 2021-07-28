'use strict'

const button = document.querySelector('.list-block__button')
const input = document.querySelector('.list-block__input')
const list = document.querySelector('.list-block__shopping-list')
const changeThemeButton = document.querySelector('.change-theme-button')

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

// dark theme button
changeThemeButton.onclick = () => {
    const forBgAndBorder = '.list-block, .list-block__input, body'
    const forBorder = '.secondary-button, .primary-button'
    const forColor = 'h1, .list-block__text, .secondary-button, .primary-button, .list-block__list-item'
    
    document.querySelectorAll(forBgAndBorder).forEach(item => {
        const classList = item.classList
        classList.toggle('dark-theme-bg')
        classList.toggle('dark-theme-border')
    })
    document.querySelectorAll(forBorder).forEach(item => {
        const classList = item.classList
        classList.toggle('dark-theme-border')
    })
    document.querySelectorAll(forColor).forEach(item => {
        const classList = item.classList
        classList.toggle('dark-theme-color')
    })
    document.querySelector('.list-block__input').classList.toggle('dark-theme-placeholder')
}

// when / is pressed, input is focused
addEventListener('keydown', event => {
    if (event.code === 'Slash') setTimeout(() => input.focus())
})

// when Esc is pressed, input is unfocused
addEventListener('keydown', event => {
    if (event.code === 'Escape') setTimeout(() => input.blur())
})

// using css selector .class , #id , tag --- learning part
// document.querySelectorAll('div').forEach(item => console.log(item.nextElementSibling))

const resultArray = Array.from(document.querySelectorAll('*')).filter(item => item.className === 'list-block__control-panel')
const findedElement = resultArray.pop()
// console.log(findedElement.previousElementSibling)
// console.log(findedElement.previousSibling)

const staticArray = document.querySelectorAll('div') // it doesn't update
const dynamicArray = document.getElementsByTagName('div') // it's a live array. It updates
