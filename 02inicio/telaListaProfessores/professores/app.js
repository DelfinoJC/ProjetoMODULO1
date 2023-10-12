const destinoOpcional = document.getElementById('destinoOpcional')
const usuario = document.getElementById('usuario')

const apareceSubMenu = () => {
    if(destinoOpcional.style.display == 'none'){
        destinoOpcional.style.display = 'block'
        usuario.classList.add('displayColor')
    } else {
        destinoOpcional.style.display = 'none'
        usuario.classList.remove('displayColor')
    }
}

const irParaNovoProf = () => {
    window.location = 'file:///C:/Users/Ana%20Carla/iniciando/MODULO1/ProjetoFinalM1/02inicio/telaListaProfessores/novoProfessor/novoProfessor.html'
}