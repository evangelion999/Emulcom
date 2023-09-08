//Открытие выпадающего меню
const header = document.querySelector('.header'),
    menuBtn = document.querySelector('.header__btn._menu');

menuBtn.addEventListener('click', function () {
    if (header.classList.contains('_menu-dropdown-active')) {
        header.classList.remove('_menu-dropdown-active');
    } else {
        header.classList.add('_menu-dropdown-active');
    }
});


//Появление формы поиска
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search .header__btn');
const headerLogo = document.querySelector('.logo');

searchBtn.addEventListener('click', function() {
    search.classList.toggle('_active');

    if (window.innerWidth <= 480) {
        headerLogo.classList.toggle('_hidden');
    }
});


//Дополнение моб. меню
if (window.innerWidth <= 991) {
    const menuItems = document.querySelectorAll('#menu .menu__list-item');
    const dropdownMenu = document.querySelector('.menu._dropdown .menu__list');
    const tel = document.querySelector('.tel');
    
    tel.classList.add('menu__list-item');

    menuItems.forEach(function(item) {
        dropdownMenu.appendChild(item);
    });
    dropdownMenu.appendChild(tel);
}


//Выпадающий список с переключателями языков
const language = document.querySelector('.language');
const dropdownItem = document.querySelectorAll('.language__dropdown-list li');
const dropdownCurrentItem = language.querySelector('.header__btn span');

language.addEventListener('click', function() {
    this.classList.toggle('_active');
});
dropdownItem.forEach(function(item) {
    item.addEventListener('click', function() {
        dropdownCurrentItem.textContent = this.textContent;
    });
});