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

/*--- Спойлер ---*/
const spoilerBtns = document.querySelectorAll('.footer-menu__title');
const spoilerBoxes = document.querySelectorAll('.footer-menu');

spoilerBtns.forEach(function (item) {
	item.addEventListener("click", function () {

	})
})