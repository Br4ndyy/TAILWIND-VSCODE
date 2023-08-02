const header__button = document.querySelector(".header__button");
const drop = document.querySelector(".drop");

header__button.addEventListener('click',()=>{
    drop.classList.toggle('h-[0rem]');
})
