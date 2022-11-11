const form = document.querySelector('form')
const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const cancelButton = document.querySelector('.cancelButton')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!inputName.value || !inputEmail.value || !inputPassword.value) {
        console.log("Precisa preencher os campos obrigatórios.")
        return
    }
    console.log("teste2")
    window.location = '../home/index.html'
})


const clickCancel = () => {
    inputName.value = ""
    inputEmail.value = ""
    inputPassword.value = ""

}

cancelButton.addEventListener('click', clickCancel)
