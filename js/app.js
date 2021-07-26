'use strict'

const button    = document.querySelector('.list-block__button')
const input     = document.querySelector('.list-block__input')
const list      = document.querySelector('.list-block__shopping-list')

const inputTips = [
    'For exmpl: buy a coffe',
    'For exmpl: do homework',
    'For exmpl: walk with dog',
    'For exmpl: feed a cat',
    'For exmpl: buy a notebook',
    'For exmpl: close a door',
    'For exmpl: find a key',
    'For exmpl: go to a gym',
    'For exmpl: go to a gym',
    'For exmpl: go to a gym',
]

const getRandomTip = () => inputTips[parseInt(Math.random() * 10).toFixed(0)]

let tip = getRandomTip()
input.setAttribute('placeholder', tip) 

button.addEventListener('click', () => {
    const inputValue = input.value
    input.value = ''
    
    if (inputValue.trim() !== '') {
        const listItem = document.createElement('li')
        listItem.textContent = inputValue
        listItem.className = 'list-block__list-item'
        list.appendChild(listItem)
        
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete'
        deleteButton.className = 'list-block__delete-button button'
        listItem.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            listItem.remove()
        }, false)
    }
    tip = getRandomTip()
    input.setAttribute('placeholder', tip) 
    input.focus()

}, false)

input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '') 
})

input.addEventListener('blur', () => {
    input.setAttribute('placeholder', tip) 
})