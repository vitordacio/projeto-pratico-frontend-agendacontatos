const form = document.querySelector('form')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!inputEmail.value || !inputPassword.value) {
        console.log("Precisa preencher os campos obrigatórios.")
        return
    }

    window.location = './pages/home/index.html'
})