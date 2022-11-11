const addButton = document.querySelector('.addButton')
const add = document.querySelector('.add')
const removeButton = document.querySelectorAll('td button')
const remove = document.querySelector('.remove')

addButton.addEventListener('click', () => {
    add.style.display = 'flex'
})

for (let i of removeButton) {
    i.addEventListener('click', () => {
        remove.style.display = 'flex'
    })
}


console.log(removeButton)