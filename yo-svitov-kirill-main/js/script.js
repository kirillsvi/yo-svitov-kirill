const popup = document.querySelector('.popup');
const buttonOpen = document.querySelector('.explore_now');
const buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('open');
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open');
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    }
})