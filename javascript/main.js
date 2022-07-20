var btnElement = document.querySelector('.search-box__btn');
var inputElement = document.querySelector('.search-box__input')

btnElement.addEventListener('click', function(e){
    inputElement.classList.toggle('open');
    this.previousElementSibling.focus();    
})