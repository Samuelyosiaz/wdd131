const currentyear = document.querySelector("#currentyear");
const today = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');

currentyear.innerHTML = `${today.getFullYear()}`;


hamButton.addEventListener('click', () => {
	 if (header) header.classList.toggle('open');
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});