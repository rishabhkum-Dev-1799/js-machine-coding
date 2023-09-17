let shift = document.querySelector('.caps');
let keys = document.querySelectorAll('.key')

let clickState = false;
shift.addEventListener('click', () => {
    clickState = !clickState;
    if (clickState) {
        keys.forEach((key, i) => key.classList.add('uppercase'))
    }
    else {
        keys.forEach((key, i) => key.classList.remove('uppercase'))
    }
});