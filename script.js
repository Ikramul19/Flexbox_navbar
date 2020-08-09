const toggleButton = document.getElementsByClassName('toggle_button')[0]

const navbarLink = document.getElementsByClassName('navbar_link')[0]

toggleButton.addEventListener('click',function(){
    navbarLink.classList.toggle('active')
})