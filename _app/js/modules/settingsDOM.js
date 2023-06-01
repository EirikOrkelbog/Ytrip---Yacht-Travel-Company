import { sanity } from "../sanity.js";
import fetchImage from "./fetchImage.js";
import video from "./video.js";

export default async function settingsDOM() {
	const query = `*[_type == 'settings']`;
	const items = await sanity.fetch(query);

	const headerContainer = document.querySelector('.header');
	const infoContainer = document.querySelector('.info');
	const videoContainer = document.querySelector('.video');
	const benefitsContainer = document.querySelector('.benefits');

	// Getting image url
	const imageHeaderId = items[0].header.mainImage.asset._ref;
	const imageInfoId = items[0].info.image.asset._ref;
	const imageInfoHiddenId = items[0].info.hiddenImage.asset._ref;
	const imageBenefitsId = items[0].benefits.benefitsImage.asset._ref;

	const imageHeaderUrl = await fetchImage(imageHeaderId);
	const imageInfoUrl = await fetchImage(imageInfoId);
	const imageInfoHiddenUrl = await fetchImage(imageInfoHiddenId);
	const imageBenefitsUrl = await fetchImage(imageBenefitsId);

	// Header
	const headerImage = document.createElement('img');
	const overlay = document.createElement('div');
	const headerHeading = document.createElement('h1');
	const span1 = document.createElement('span');
	const span2 = document.createElement('span');

	// Header
	headerImage.src = imageHeaderUrl;
	headerImage.className = 'header__image';
	overlay.className = 'header__overlay';
	headerHeading.className = 'header__heading';
	const heading = items[0].header.mainHeading;
	headerHeading.textContent = heading.substring(0, 10);
	span1.textContent = heading.substring(10, 19);
	span2.textContent = heading.substring(19, 25);

	// Header
	headerHeading.appendChild(span1);
	headerHeading.appendChild(span2);
	headerContainer.appendChild(headerImage);
	headerContainer.appendChild(overlay);
	headerContainer.appendChild(headerHeading);

	// Info section
	const grid = document.createElement('div');
	const content = document.createElement('div');
	const infoHeading = document.createElement('h2');
	const infoParagraph = document.createElement('p');
	const callToActionButton = document.createElement('a');
	const infoImageHidden = document.createElement('img');
	const infoImage = document.createElement('img');

	grid.className = 'grid__container info__container';
	content.className = 'content__container';
	infoHeading.className = 'subheading-mobile';
	infoHeading.textContent = items[0].info.infoHeading;
	infoParagraph.textContent = items[0].info.infoText;
	callToActionButton.className = 'button';
	callToActionButton.textContent = 'Book now';
	callToActionButton.setAttribute('href', '/pages/cruises.html');
	infoImage.src = imageInfoUrl;
	infoImageHidden.className = 'hide';
	infoImageHidden.src = imageInfoHiddenUrl;

	infoContainer.appendChild(grid);
	grid.appendChild(content);
	grid.appendChild(infoImageHidden);
	grid.appendChild(infoImage);
	content.appendChild(infoHeading);
	content.appendChild(infoParagraph);
	content.appendChild(callToActionButton);

	const videoText = document.createElement('div');
	const videoHeading = document.createElement('h2');
	const videoParagraph = document.createElement('p');
	const videoPlayer = document.createElement('div');
	const videoElement = document.createElement('video');
	const videoSource = document.createElement('source');
	const videoPlay = document.createElement('button');
	const videoPlayIcon = document.createElement('img');

	videoText.className = 'video__text';
	videoHeading.className = 'subheading-mobile';
	videoHeading.textContent = items[0].video.videoHeading;
	videoParagraph.textContent = items[0].video.videoParagraph;
	videoPlayer.className = 'video__player';
	videoSource.src = '/_app/assets/videos/yacht.mp4';
	videoSource.type = 'video/mp4';
	videoSource.id = 'video';
	videoElement.controls = true;
	videoPlay.className = 'video__button';
	videoPlayIcon.src = '/_app/assets/icons/play.svg';

	videoContainer.appendChild(videoText);
	videoContainer.appendChild(videoPlayer);
	videoText.appendChild(videoHeading);
	videoText.appendChild(videoParagraph);
	videoPlayer.appendChild(videoElement);
	videoPlayer.appendChild(videoPlay);
	videoPlay.appendChild(videoPlayIcon);
	videoElement.appendChild(videoSource);

	// Benefits section
	const benefitsContent = document.createElement('div');
	const benefitsImage = document.createElement('img');
	const benefitsHeading = document.createElement('h2');
	const benefitsList = document.createElement('ul');

	benefitsContent.className = 'benefits__content';
	benefitsImage.className = 'benefits__image';
	benefitsImage.src = imageBenefitsUrl;
	benefitsHeading.className = 'subheading-mobile';
	benefitsHeading.textContent = items[0].benefits.benefitsHeading;
	benefitsList.className = 'benefits__content ul';

	benefitsContainer.appendChild(benefitsContent);
	benefitsContainer.appendChild(benefitsImage);
	benefitsContent.appendChild(benefitsHeading);
	benefitsContent.appendChild(benefitsList);

	const benefits = items[0].benefits.benefitsList;
	for (const benefit of benefits) {
		const benefitsDescription = document.createElement('p');
		const benefitsTitle = document.createElement('li');
		benefitsDescription.textContent = benefit.description;
		benefitsTitle.className = 'benefits__content li';
		benefitsTitle.textContent = benefit.benefit;
		benefitsList.appendChild(benefitsTitle);
		benefitsList.appendChild(benefitsDescription);
	}
	video();
}