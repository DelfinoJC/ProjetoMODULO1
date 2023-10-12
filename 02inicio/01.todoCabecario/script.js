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