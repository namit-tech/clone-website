let menu = document.querySelector('#menu-icon')
let item = document.querySelector('.item')

menu.onclick = ()=> {
    menu.classList.toggle('bx-x') 
    item.classList.toggle('open')
}