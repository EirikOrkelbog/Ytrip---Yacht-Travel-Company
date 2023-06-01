import { sanity } from '../sanity.js';
import fetchImage from './fetchImage.js';
import reviews from './reviews.js';

export default async function reviewsDOM() {
	const query = `*[_type == 'reviews']`;
	const items = await sanity.fetch(query);

	const container = document.querySelector('.reviews');

	function renderReviewsHTML() {
		const slides = document.createElement('div');
		const slideImage = document.createElement('img');
		const slideButtons = document.createElement('div');
		const buttonPrevious = document.createElement('button');
		const buttonNext = document.createElement('button');

		slides.className = 'reviews__slides';
		slideButtons.className = 'reviews__buttons';
		slideImage.className = 'reviews__image';
		slideImage.src = '/_app/assets/images/compressed/review.jpg';
		buttonPrevious.className = 'slideshow__button button-previous';
		buttonPrevious.innerHTML = '&larr;';
		buttonPrevious.id = 'review__previous';
		buttonNext.className = 'slideshow__button button-next';
		buttonNext.id = 'review__next';
		buttonNext.innerHTML = '&rarr;';

		container.appendChild(slides);
		slides.appendChild(slideImage);
		slides.appendChild(slideButtons);
		slideButtons.appendChild(buttonPrevious);
		slideButtons.appendChild(buttonNext);

		for (const item of items) {
			const slide = document.createElement('div');
			const reviewContent = document.createElement('div');
			const reviewHeading = document.createElement('h2');
			const reviewParagraph = document.createElement('p');
			const reviewer = document.createElement('span');
			const reviewTrip = document.createElement('p');
			const quotation = document.createElement('img');

			slide.className = 'reviews__slide review__visible';
			reviewContent.className = 'reviews__content';
			reviewHeading.className = 'subheading-mobile';
			reviewHeading.textContent = item.reviewTitle;
			reviewParagraph.className = 'reviews__paragraph';
			reviewParagraph.textContent = item.review;
			reviewer.textContent = item.reviewer;
			reviewTrip.textContent = item.destination;
			quotation.src = '/_app/assets/icons/quotation-mark.svg';

			reviewContent.appendChild(reviewHeading);
			reviewContent.appendChild(reviewParagraph);
			reviewContent.appendChild(reviewer);
			reviewContent.appendChild(reviewTrip);
			reviewContent.appendChild(quotation);
			slide.appendChild(reviewContent);
			slides.appendChild(slide);
		}
		reviews();
	}
	renderReviewsHTML();
}