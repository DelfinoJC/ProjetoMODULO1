const subMenu = document.getElementById('subMenu')

const apareceSubMenu = () => {
    if(subMenu.style.display == 'none'){
        subMenu.style.display = 'block'
    } else {
        subMenu.style.display = 'none'
    }
}