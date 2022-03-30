console.info('Hello world');

let blurBox = document.querySelector('.questions');
let closeButton = document.querySelector('.questions__close');

closeButton.addEventListener('click', closeBlur);

function closeBlur(){
    blurBox.classList.add('questions--none');
}