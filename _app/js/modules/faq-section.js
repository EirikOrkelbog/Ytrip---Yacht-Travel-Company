// import { sanity } from "../sanity.js";
// import faqFunctionality from "./faq-functionality.js";

// export default async function faqDOM() {
// 	const query = `*[_type == 'faq'][0]`;
// 	const faqs = await sanity.fetch(query);
// 	console.log(faqs);
// 	const container = document.querySelector('.faq__questions');

// 	function renderFaqHTML() {
// 		for (let i = 0; i < faqs.faqs.length; i++) {
// 			const faqItem = document.createElement('div');
// 			const faqQuestionContainer = document.createElement('div');
// 			const faqIcon = document.createElement('img');
// 			const faqQuestion = document.createElement('p');
// 			const faqAnswer = document.createElement('p');

// 			faqItem.className = 'faq__item';
// 			faqQuestionContainer.className = 'faq__item div';

// 			faqQuestion.textContent = faqs.faqs[i].question;
// 			faqAnswer.textContent = faqs.faqs[i].answer;

// 			faqQuestionContainer.appendChild(faqIcon);
// 			faqQuestionContainer.appendChild(faqQuestion);
// 			faqItem.appendChild(faqQuestionContainer);
// 			faqItem.appendChild(faqAnswer);

// 			faqQuestion.className = 'faq__question';
// 			faqAnswer.className = 'faq__answer hide-answer';

// 			container.appendChild(faqItem);
// 		}
// 	}
// 	faq();
// 	renderFaqHTML();
// }


import { sanity } from '../sanity.js';
import faqFunctionality from './faq-functionality.js';

export default async function faqSection() {
	const query = `*[_type == 'faq'][0]`;
	const faqs = await sanity.fetch(query);
	console.log(faqs);
	const container = document.querySelector('.faq__questions');
	const faqItems = [];
	const icons = [];

	function toggleAnswer(item, answer, icon) {
		const isAnswerHidden = answer.classList.toggle('hide-answer');
		icon.src = isAnswerHidden ? '/_app/assets/icons/plus.svg' : '/_app/assets/icons/minus.svg';
	}

	function closeOtherAnswers(currentItem) {
		faqItems.forEach((item) => {
			if (item !== currentItem) {
				const otherAnswer = item.querySelector('.faq__answer');
				const otherIcon = item.querySelector('img');
				otherAnswer.classList.add('hide-answer');
				otherIcon.src = '/_app/assets/icons/plus.svg';
			}
		});
	}

	function renderFaqHTML() {
		faqs.faqs.forEach((faqData) => {
			const faqItem = document.createElement('div');
			const faqQuestionContainer = document.createElement('div');
			const faqIcon = document.createElement('img');
			const faqQuestion = document.createElement('p');
			const faqAnswer = document.createElement('p');

			faqItem.className = 'faq__item';
			faqQuestionContainer.className = 'faq__item div';

			faqQuestion.textContent = faqData.question;
			faqAnswer.textContent = faqData.answer;

			faqQuestionContainer.appendChild(faqIcon);
			faqQuestionContainer.appendChild(faqQuestion);
			faqItem.appendChild(faqQuestionContainer);
			faqItem.appendChild(faqAnswer);

			faqQuestion.className = 'faq__question';
			faqAnswer.className = 'faq__answer hide-answer';

			faqItem.addEventListener('click', () => {
				toggleAnswer(faqItem, faqAnswer, faqIcon);
				closeOtherAnswers(faqItem);
			});

			container.appendChild(faqItem);
			faqItems.push(faqItem);
			icons.push(faqIcon);
		});
	}

	faq(faqItems, icons);
	renderFaqHTML();
}
