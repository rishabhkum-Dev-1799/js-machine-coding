'use strict'

const cards = document.querySelectorAll('.cards');

function removeActiveClass() {
    cards.forEach((card, key) => {
        card.classList.remove('active');
    })
}
cards.forEach((card, key) => {
    card.addEventListener('click', () => {
        removeActiveClass();
        card.classList.add('active')
    })
})
