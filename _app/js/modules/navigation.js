import { sanity } from "../sanity.js";
import navigation from "./navigation-functionality.js";

export default async function navigationDOM() {
	const query = `*[_type == 'navigation']`;
	const items = await sanity.fetch(query);
	
	const container = document.querySelector('.nav__header');
	
	async function renderNavigationDOM() {
		const nav = document.createElement('nav');
		const logo = document.createElement('a');
		const menu = document.createElement('button');
		const navLinks = document.createElement('ul');
		
		nav.className = 'nav nav__underline';
		logo.className = 'header__logo';
		logo.setAttribute('href', '/index.html');
		menu.className = 'menu';
		navLinks.className = 'nav__links nav__links-black';
		
		container.appendChild(nav);
		nav.appendChild(logo);
		nav.appendChild(menu);
		nav.appendChild(navLinks);
		
		const linkNames = items[0].links.linkName;
		const linkHrefs = items[0].links.linkHref;
		
		for (let i = 0; i < linkNames.length; i++) {
			const link = document.createElement('li');
			const linkAnchor = document.createElement('a');
			linkAnchor.textContent = linkNames[i];
			linkAnchor.href = linkHrefs[i];
			link.appendChild(linkAnchor);
			navLinks.appendChild(link);
		}
	}
	renderNavigationDOM();
	navigation();
}