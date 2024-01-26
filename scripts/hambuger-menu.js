const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const scripture = document.querySelector('#scripture')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
})