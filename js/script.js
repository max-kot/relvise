/*--- Меню ---*/
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuItems = document.querySelectorAll('.menu__list li');



menuBtn.addEventListener('click', function () {
	if (menuList.classList.toggle('_active')) {
		menuItems.forEach(function (item) {
			item.addEventListener('click', function () {
				menuList.classList.remove('_active');
			})
		})
	}
})