import { sanity } from "./sanity.js";

export default async function cruisesPage() {
	fetch('https://5khmsjz8.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "cruises"]')
		.then(response => response.json())
		.then(data => {
			const cruises = data.result;
			const container = document.querySelector('.cruises');

			async function renderCruisesHTML() {
				for (const cruise of cruises) {

					const imageAssetId = cruise.image.asset._ref;
					const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
					const imageAsset = await sanity.fetch(imageAssetQuery);
					const imageUrl = imageAsset[0].url;

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
					cruiseImage.alt = '';
					cruiseImage.className = 'cruises img';
					cruisesButton.className = 'button cruises__button'
					cruisesButton.href = '/pages/articles.html';
					cruisesButton.textContent = 'Book trip';
					cruiseTitle.textContent = cruise.title;
					cruiseTitle.className = 'subheading-mobile';
					cruiseIncludedContainer.className = 'cruises__included';
					cruiseDetailsDuration.className = 'cruises__details';
					cruiseDays.className = 'cruises p';
					cruiseDays.textContent = `${cruise.duration} days`;
					cruiseDuration.textContent = 'Duration:';
					cruiseDate.className = 'cruises p';
					cruiseDate.textContent = 'Date:';
					cruiseDateTime.textContent = `${cruise.dateStart} - ${cruise.dateEnd}`;
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

					for (let i = 0; i < cruise.included.length; i++) {
						const liElement = document.createElement('li');
						liElement.textContent = cruise.included[i];
						cruiseIncludedContainer.appendChild(liElement);
					}
				}
			}
			renderCruisesHTML();
		});
}
cruisesPage();