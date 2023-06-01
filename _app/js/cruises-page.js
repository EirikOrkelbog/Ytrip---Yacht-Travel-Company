import { sanity } from "./sanity.js";
import navigationDOM from "./modules/navigationDOM.js";
import fetchImage from "./modules/fetchImage.js";
import footerDOM from "./modules/footer.js";
navigationDOM();
footerDOM();

export default async function cruisesPage() {
	const query = `*[_type == 'cruises']`;
	const cruises = await sanity.fetch(query);

	const container = document.querySelector('.cruises');
	async function renderCruisesHTML() {
		for (const cruise of cruises) {
			// Getting image url
			const imageId = cruise.image.asset._ref;
			const imageUrl = await fetchImage(imageId);

			// Formatting dateStart from yyyy-mm-dd to dd.mm.yyyy
			const dateStart = cruise.dateStart;
			const start = new Date(dateStart);
			const startYear = start.getFullYear();
			let startMonth = start.getMonth() + 1;
			let startDay = start.getDate();
			if (startDay < 10) startDay = '0' + startDay;
			if (startMonth < 10) startMonth = '0' + startMonth;
			const formattedDateStart = startDay + '.' + startMonth + '.' + startYear;

			// Formatting dateEnd
			const dateEnd = cruise.dateEnd;
			const end = new Date(dateEnd);
			const endYear = end.getFullYear();
			let endMonth = end.getMonth();
			let endDay = end.getDate();
			if (endDay < 10) endDay = '0' + endDay;
			if (endMonth < 10) endMonth = '0' + endMonth;
			const formattedDateEnd = endDay + '.' + endMonth + '.' + endYear;

			const cruiseHolder = document.createElement('div');
			const cruiseImageContainer = document.createElement('div');
			const cruiseImage = document.createElement('img');
			const cruisesButton = document.createElement('a');
			const cruiseContainer = document.createElement('div');
			const cruiseTitle = document.createElement('h2');
			const cruiseDetailsDuration = document.createElement('div');
			const cruiseDuration = document.createElement('p');
			const cruiseDays = document.createElement('span');
			const cruiseDetailsDate = document.createElement('div');
			const cruiseDate = document.createElement('p');
			const cruiseDateTime = document.createElement('span');
			const cruiseDetailsPrice = document.createElement('div');
			const cruisePrice = document.createElement('p');
			const cruisePriceNumber = document.createElement('span');
			const cruiseIncluded = document.createElement('p');
			const cruiseIncludedContainer = document.createElement('ul');

			cruiseHolder.className = 'cruise';
			cruiseImageContainer.className = 'cruises__container';
			cruiseContainer.className = 'cruises__container';
			cruiseImage.src = imageUrl;
			cruiseImage.loading = 'lazy';
			cruiseImage.className = 'cruises img';
			cruisesButton.className = 'button cruises__button'
			cruisesButton.href = 'https://no.tripadvisor.com/';
			cruisesButton.textContent = 'Book trip';
			cruiseTitle.textContent = cruise.title;
			cruiseTitle.className = 'subheading';
			cruiseIncludedContainer.className = 'cruises__included';
			cruiseDetailsDuration.className = 'cruises__details';
			cruiseDays.className = 'cruises p';
			cruiseDays.textContent = `${cruise.duration} days`;
			cruiseDuration.textContent = 'Duration:';
			cruiseDate.className = 'cruises p';
			cruiseDate.textContent = 'Date:';
			cruiseDateTime.textContent = `${formattedDateStart} - ${formattedDateEnd}`;
			cruiseDetailsPrice.className = 'cruises__details';
			cruiseDetailsDate.className = 'cruises__details';
			cruisePrice.className = 'cruises p';
			cruisePrice.textContent = 'Price:';
			cruisePriceNumber.textContent = `$${cruise.price}`;
			cruiseIncluded.className = 'cruises p';
			cruiseIncluded.textContent = 'Included in price:';

			cruiseImageContainer.appendChild(cruiseImage);
			cruiseImageContainer.appendChild(cruisesButton);
			cruiseContainer.appendChild(cruiseTitle);
			cruiseContainer.appendChild(cruiseDetailsDuration);
			cruiseContainer.appendChild(cruiseDetailsDate);
			cruiseContainer.appendChild(cruiseDetailsPrice);
			cruiseContainer.appendChild(cruiseIncluded);
			cruiseContainer.appendChild(cruiseIncludedContainer);
			cruiseDetailsDate.appendChild(cruiseDate);
			cruiseDetailsDate.appendChild(cruiseDateTime);
			cruiseDetailsDuration.appendChild(cruiseDuration);
			cruiseDetailsDuration.appendChild(cruiseDays);
			cruiseDetailsPrice.appendChild(cruisePrice);
			cruiseDetailsPrice.appendChild(cruisePriceNumber);
			cruiseHolder.appendChild(cruiseImageContainer);
			cruiseHolder.appendChild(cruiseContainer);
			container.appendChild(cruiseHolder);

			for (let index = 0; index < cruise.included.length; index++) {
				const liElement = document.createElement('li');
				liElement.textContent = cruise.included[index];
				cruiseIncludedContainer.appendChild(liElement);
			}
		}
	}
	renderCruisesHTML();
}
cruisesPage();