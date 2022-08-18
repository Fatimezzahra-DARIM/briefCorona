const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarList = document.getElementsByClassName ('navBarList')[0]
toggleButton.addEventListener('click',() => {
    navBarList.classList.toggle('active')
})
