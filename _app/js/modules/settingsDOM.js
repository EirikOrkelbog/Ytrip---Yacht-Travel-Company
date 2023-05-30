import { sanity } from "../sanity.js";

export default async function settingsDOM() {
	const query = `*[_type == 'settings']`;
	const items = await sanity.fetch(query);

	const container = document.querySelector('.header');

	async function renderSettingsHTML() {
		const imageAssetId = items[0].header.mainImage.asset._ref;
		const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
		const imageAsset = await sanity.fetch(imageAssetQuery);
		const imageUrl = imageAsset[0].url;
		
		console.log(items[0].header.mainHeading);
		const headerImage = document.createElement('img');
		const overlay = document.createElement('div');
		const headerHeading = document.createElement('h1');
		const span1 = document.createElement('span');
		const span2 = document.createElement('span');
		
		headerImage.src = imageUrl;
		headerImage.className = 'header__image';
		overlay.className = 'header__overlay';
		headerHeading.className = 'header__heading';
		const heading = items[0].header.mainHeading;
		headerHeading.textContent = heading.substring(0, 10);
		span1.textContent = heading.substring(10, 19);
		span2.textContent = heading.substring(19, 25);

		headerHeading.appendChild(span1);
		headerHeading.appendChild(span2);
		container.appendChild(headerImage);
		container.appendChild(overlay);
		container.appendChild(headerHeading);
	}
	renderSettingsHTML();
}