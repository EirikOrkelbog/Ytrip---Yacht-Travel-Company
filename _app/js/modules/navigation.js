export default function navigation() {
	const menu = document.querySelector('.menu');
	const navLinks = document.querySelector('.nav__links');
	const links = document.querySelectorAll('.nav__links li');

	menu.addEventListener('click', handleMenuClick);

	function handleMenuClick(event) {
		toggleMenu(event);
	}

	// Adding eventlistener for each link
	links.forEach(link => {
		link.addEventListener('click', handleLinkClick);
	});

	// Removes mobile navigation when i click anything else than the links and menu button
	window.addEventListener('click', function (event) {
		if (!navLinks.contains(event.target) && !menu.contains(event.target)) {
			navLinks.classList.remove('active');
		}
	});

	function handleLinkClick(event) {
		navLinks.classList.remove('active');
	}

	function toggleMenu(event) {
		navLinks.classList.toggle('active');
	}
}