import { sanity } from "../sanity.js";
import fetchImage from "./fetchImage.js";
import trips from "./trips.js";

export default async function tripsDOM() {
	const query = `*[_type == 'cruises']`;
	const items = await sanity.fetch(query);

	const container = document.querySelector('.trips');

	async function renderTripsHTML() {
		const tripsHeading = document.createElement('h2');
		const slideshow = document.createElement('div');
		const slideshowSlides = document.createElement('div');
		const slideshowButtons = document.createElement('div');
		const buttonPrevious = document.createElement('button');
		const buttonNext = document.createElement('button');

		const arrowLeft = '&larr;';
		const arrowRight = '&rarr;';
		tripsHeading.className = 'subheading';
		tripsHeading.textContent = 'See our nearest trips';
		slideshow.className = 'slideshow';
		slideshowSlides.className = 'slideshow__slides';
		slideshowButtons.className = 'slideshow__buttons';
		buttonPrevious.className = 'slideshow__button button-previous';
		buttonPrevious.innerHTML = arrowLeft;
		buttonNext.className = 'slideshow__button button-next';
		buttonNext.innerHTML = arrowRight;

		container.appendChild(tripsHeading);
		container.appendChild(slideshow);
		slideshow.appendChild(slideshowSlides);
		slideshow.appendChild(slideshowButtons);
		slideshowButtons.appendChild(buttonPrevious);
		slideshowButtons.appendChild(buttonNext);

		for (const item of items) {
			const imageTripsId = item.image.asset._ref;
			const imageTripsUrl = await fetchImage(imageTripsId);

			const slideshowSlide = document.createElement('div');
			const slideshowImage = document.createElement('img');
			const slideshowPrice = document.createElement('span');
			const slideshowName = document.createElement('p');
			const slideshowDuration = document.createElement('p');

			slideshowSlide.className = 'slideshow__slide slide-active';
			slideshowImage.className = 'slideshow__slide-image';
			slideshowImage.src = imageTripsUrl;
			slideshowImage.loading = 'lazy';
			slideshowPrice.textContent = '$' + item.price;
			slideshowName.textContent = item.title;
			slideshowDuration.textContent = item.duration + ' days';

			slideshowSlides.appendChild(slideshowSlide);
			slideshowSlide.appendChild(slideshowImage);
			slideshowSlide.appendChild(slideshowPrice);
			slideshowSlide.appendChild(slideshowName);
			slideshowSlide.appendChild(slideshowDuration);
		}
		trips();
	}
	renderTripsHTML();
}