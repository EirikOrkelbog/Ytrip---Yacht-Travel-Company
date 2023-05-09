export default function header() {
	const menu = document.querySelector('.menu');
	const navLinks = document.querySelector('.nav__links');

	menu.addEventListener('click', handleMenuClick);

	function handleMenuClick() {
		toggleMenu();
	}
	
	function toggleMenu(event) {
		navLinks.classList.toggle('active');
	}
}