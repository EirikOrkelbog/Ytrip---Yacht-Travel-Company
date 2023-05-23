import { sanity } from "./sanity.js";

export default async function blogPage() {
	// const query = `*[_type == 'blogPost'] {

	// }`;
	// const blogPosts = await sanity.fetch(query);
	// console.log(blogPosts);

	fetch('https://5khmsjz8.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "blogPost"]')
		.then(response => response.json())
		.then(data => {
			const blogPosts = data.result;
			const container = document.querySelector('.blog__page-grid');

			async function renderBlogHTML() {
				for (const blogPost of blogPosts) {
					const imageAssetId = blogPost.image.asset._ref;
					// Fetching the image asset
					const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
					const imageAsset = await sanity.fetch(imageAssetQuery);
					const imageUrl = imageAsset[0].url;

					const blogItem = document.createElement('div');
					const blogImage = document.createElement('img');
					const blogPostContainer = document.createElement('div');
					const blogPostHeading = document.createElement('span');
					const blogPostContent = document.createElement('p');
					const blogPostLink = document.createElement('a');

					blogItem.className = 'blog__page-item';
					blogImage.src = imageUrl;
					blogImage.alt = '';
					blogImage.className = 'blog__image-small';
					blogPostContainer.className = 'blog__item-text';
					blogPostHeading.textContent = blogPost.title;
					blogPostContent.textContent = blogPost.shortContent;
					blogPostLink.href = '/pages/articles.html';
					blogPostLink.textContent = 'Read more →';

					blogPostContainer.appendChild(blogPostHeading);
					blogPostContainer.appendChild(blogPostContent);
					blogPostContainer.appendChild(blogPostLink);
					blogItem.appendChild(blogImage);
					blogItem.appendChild(blogPostContainer);
					container.appendChild(blogItem);
				}
			}
			renderBlogHTML();
		});
}
blogPage();
