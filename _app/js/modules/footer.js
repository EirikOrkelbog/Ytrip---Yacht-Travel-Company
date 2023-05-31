import { sanity } from "../sanity.js";

export default async function footerDOM() {
	const query = `*[_type == 'footer']`;
	const items = await sanity.fetch(query);

	const container = document.querySelector('.footer');

	async function renderFooterDOM() {
		const footerGrid = document.createElement('div');
		const footerContact = document.createElement('div');
		const contactHeading = document.createElement('h2');
		const emailLabel = document.createElement('p');
		const email = document.createElement('a');
		const phoneLabel = document.createElement('p');
		const phone = document.createElement('a');
		const socialLinks = document.createElement('div');
		const footerForm = document.createElement('form');
		const formHeading = document.createElement('h2');
		const nameInput = document.createElement('input');
		const emailInput = document.createElement('input');
		const formDataContainer = document.createElement('div');
		const formCheckbox = document.createElement('input');
		const formCheckboxLabel = document.createElement('label');
		const formButton = document.createElement('button');

		footerGrid.className = 'footer__grid';
		footerContact.className = 'footer__contact';
		contactHeading.className = 'subheading-mobile';
		contactHeading.textContent = items[0].contact.contactHeading;
		emailLabel.className = 'footer__contact p';
		emailLabel.textContent = items[0].contact.emailLabel;
		email.textContent = items[0].contact.email;
		email.setAttribute('href', '#');
		phoneLabel.textContent = items[0].contact.phoneLabel;
		phone.textContent = items[0].contact.phone;
		phone.setAttribute('href', '#');
		socialLinks.className = 'footer__social-links';
		footerForm.className = 'footer__form';
		formHeading.className = 'subheading-mobile';
		formHeading.textContent = items[0].form.formHeading;
		nameInput.className = 'form__input';
		nameInput.type = 'text';
		nameInput.placeholder = 'Name';
		emailInput.className = 'form__input';
		emailInput.type = 'email';
		emailInput.placeholder = 'Email';
		formDataContainer.className = 'form__data';
		formCheckbox.id = 'data';
		formCheckbox.type = 'checkbox';
		formCheckboxLabel.textContent = items[0].form.checkbox;
		formCheckboxLabel.htmlFor = 'data';
		formButton.className = 'button';
		formButton.textContent = 'Send form';
		formButton.setAttribute('href', '#');

		container.appendChild(footerGrid);
		footerGrid.appendChild(footerContact);
		footerGrid.appendChild(footerForm);
		footerContact.appendChild(contactHeading);
		footerContact.appendChild(emailLabel);
		footerContact.appendChild(email);
		footerContact.appendChild(phoneLabel);
		footerContact.appendChild(phone);
		footerContact.appendChild(socialLinks);
		footerForm.appendChild(formHeading);
		footerForm.appendChild(nameInput);
		footerForm.appendChild(emailInput);
		footerForm.appendChild(formDataContainer);
		footerForm.appendChild(formButton);
		formDataContainer.appendChild(formCheckbox);
		formDataContainer.appendChild(formCheckboxLabel);

		const socialItems = items[0].contact.social;
		const socialHref = ['https://www.facebook.com', 'https://www.instagram.com', 'https://www.twitter.com'];

		for (let i = 0; i < socialItems.length; i++) {
			const socialLink = document.createElement('a');
			socialLink.textContent = socialItems[i];
			socialLink.setAttribute('href', socialHref[i]);
			socialLinks.appendChild(socialLink);
		}
	}
	renderFooterDOM();
}