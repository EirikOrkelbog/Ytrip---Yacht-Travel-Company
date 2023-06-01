import { sanity } from "../sanity.js";
import faq from "./faq.js";

export default async function faqDOM() {
	const query = `*[_type == 'faq'][0]`;
	const faqs = await sanity.fetch(query);

	const container = document.querySelector('.faq');

	function renderFaqHTML() {
		const faqContainer = document.createElement('div');
		const faqContentContainer = document.createElement('div');
		const faqSubheading = document.createElement('h3');
		const faqHeading = document.createElement('h2');
		const faqImage = document.createElement('img');

		faqContainer.className = 'faq__container';
		faqContentContainer.className = 'faq__container faq__questions';
		faqSubheading.textContent = 'FAQ';
		faqSubheading.className = 'faq__subheading';
		faqHeading.className = 'subheading';
		faqHeading.textContent = 'Frequently asked questions';
		faqImage.src = '/_app/assets/images/small//faq.jpg';
		faqImage.className = 'faq__image';

		faqContainer.appendChild(faqSubheading);
		faqContainer.appendChild(faqHeading);
		faqContainer.appendChild(faqImage);
		container.appendChild(faqContainer);
		container.appendChild(faqContentContainer);

		for (let i = 0; i < faqs.faqs.length; i++) {
			const faqItem = document.createElement('div');
			const faqQuestionContainer = document.createElement('div');
			const faqIcon = document.createElement('img');
			const faqQuestion = document.createElement('p');
			const faqAnswer = document.createElement('p');

			faqItem.className = 'faq__item';
			faqQuestion.className = 'faq__question';
			faqQuestion.textContent = faqs.faqs[i].question;
			faqAnswer.className = 'faq__answer hide-answer';
			faqAnswer.textContent = faqs.faqs[i].answer;

			faqQuestionContainer.appendChild(faqIcon);
			faqQuestionContainer.appendChild(faqQuestion);
			faqItem.appendChild(faqQuestionContainer);
			faqItem.appendChild(faqAnswer);
			faqContentContainer.appendChild(faqItem);
		}
	}
	renderFaqHTML();
	faq();
}
