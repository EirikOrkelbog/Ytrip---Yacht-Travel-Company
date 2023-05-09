export default function header() {
	const menu = document.querySelector('.menu');
	const navLinks = document.querySelector('.nav__links');

	menu.addEventListener('click', handleMenuClick);

	function handleMenuClick() {
		toggleMenu();
	}

	// // check the initial state of the navigation menu
	// if (navLinks.classList.contains('active')) {
	// 	navLinks.classList.remove('active');
	// }
	
	function toggleMenu(event) {
		navLinks.classList.toggle('active');
	}
}