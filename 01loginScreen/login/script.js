let form = document.getElementById('formulario')
let email = document.getElementById('email')
let senha = document.getElementById('senha')
let labelEmail = document.getElementById('labelEmail')
let labelSenha = document.getElementById('labelSenha')


form.addEventListener('submit',(event) => {
    event.preventDefault()

    if(email.value == '' || senha.value == ''){
        email.classList.add('erro')
        senha.classList.add('erro')
        labelSenha.classList.add('erroLabel')
        labelEmail.classList.add('erroLabel')
    } else {
        email.classList.add('ok')
        senha.classList.add('ok')
        labelSenha.classList.add('okLabel')
        labelEmail.classList.add('okLabel')

        window.location = 'file:///C:/Users/Ana%20Carla/iniciando/MODULO1/ProjetoFinalM1/02inicio/todoCabecario/index.html'
    }
})

// const goCadastro = () => {
//     window.location = 'file:///C:/Users/Ana%20Carla/iniciando/MODULO1/ProjetoFinalM1/01loginScreen/cadastrese/cadastro.html'
// }