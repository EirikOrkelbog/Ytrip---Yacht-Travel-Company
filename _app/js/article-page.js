import { sanity } from "./sanity.js";
import navigationDOM from "./modules/navigationDOM.js";
import footerDOM from "./modules/footer.js";
navigationDOM();
footerDOM();

export default async function articlePage() {
	function getPostIdFromURL() {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('id');
	}

	const container = document.querySelector('.article');

	async function renderArticleHTML() {
		const postId = getPostIdFromURL();
		const articleID = postId;
		const articleQuery = `*[_id == "${articleID}"]`;
		const article = await sanity.fetch(articleQuery);

		const writerId = article[0].writer._ref;
		const writerQuery = `*[_id == "${writerId}"]`;
		const writerAsset = await sanity.fetch(writerQuery);
		const writerName = writerAsset[0].name;

		const writerImageQuery = `*[_id == "${writerAsset[0].profilePicture.asset._ref}"]`;
		const writerImageAsset = await sanity.fetch(writerImageQuery);
		const writerImage = writerImageAsset[0].url;

		const imageAssetId = article[0].image.asset._ref;
		const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
		const imageAsset = await sanity.fetch(imageAssetQuery);
		const imageUrl = imageAsset[0].url;

		const articleImage = document.createElement('img');
		const articleHeading = document.createElement('h2');
		const articleInfo = document.createElement('div');
		const articleWriterImage = document.createElement('img');
		const articleWriterName = document.createElement('span');
		const articlePublished = document.createElement('p');
		const articleParagraph = document.createElement('p');

		articleImage.className = 'article__image';
		articleImage.src = imageUrl;
		articleHeading.className = 'subheading-mobile article__heading';
		articleHeading.textContent = article[0].title;
		articleInfo.className = 'article__info';
		articleWriterImage.className = 'article__writer-image';
		articleWriterImage.src = writerImage;
		articleWriterName.textContent = writerName;
		articlePublished.className = 'article__published';
		articlePublished.textContent = article[0].publicationDate;
		articleParagraph.className = 'article__paragraph';
		articleParagraph.textContent = article[0].mainContent;

		articleInfo.appendChild(articleWriterImage);
		articleInfo.appendChild(articleWriterName);
		articleInfo.appendChild(articlePublished);
		container.appendChild(articleImage);
		container.appendChild(articleHeading);
		container.appendChild(articleInfo);
		container.appendChild(articleParagraph);
	}
	renderArticleHTML();
}
articlePage();