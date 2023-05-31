export default function navigation() {
	const menu = document.querySelector('.menu');
	const navLinks = document.querySelector('.nav__links');
	const links = document.querySelectorAll('.nav__links li');

	menu.addEventListener('click', handleMenuClick);

	links.forEach(link => {
		link.addEventListener('click', handleLinkClick);
	});

	window.addEventListener('click', function (event) {
		if (!navLinks.contains(event.target) && !menu.contains(event.target)) {
			navLinks.classList.remove('active');
		}
	});

	function handleLinkClick(event) {
		navLinks.classList.remove('active');
		const clickedLink = event.currentTarget;
		clickedLink.classList.add('nav__links-underline');
	}

	function handleMenuClick(event) {
		toggleMenu(event);
	}

	function toggleMenu(event) {
		navLinks.classList.toggle('active');
	}
}