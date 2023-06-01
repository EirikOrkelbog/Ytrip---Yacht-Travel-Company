import { sanity } from "../sanity.js";

export default async function blogSection() {
	const query = `*[_type == 'blogPost'] | order(_createdAt asc)[0..3] {
		image,
		about,
		 _id,
		 title,
	 }`;

	const blogPosts = await sanity.fetch(query);
	const container = document.querySelector('.blog');
	
	async function renderBlogPostsHTML() {
		const blogHeading = document.createElement('h2');
		const blogGrid = document.createElement('div');
		const blogLink = document.createElement('a');

		blogHeading.className = 'subheading-mobile';
		blogHeading.textContent = 'Our blog';
		blogGrid.className = 'blog__grid';
		blogLink.className = 'blog__link';
		blogLink.textContent = 'Read all articles here';
		blogLink.href = '/pages/blog.html';

		for (const blogPost of blogPosts) {
			const imageAssetId = blogPost.image.asset._ref;
			const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
			const imageAsset = await sanity.fetch(imageAssetQuery);
			const imageUrl = imageAsset[0].url;

			const blogItem = document.createElement('div');
			const blogImage = document.createElement('img');
			const blogTextContainer = document.createElement('div');
			const blogItemHeading = document.createElement('span');
			const blogItemText = document.createElement('p');
			const blogItemLink = document.createElement('a');

			blogItem.className = 'blog__item';
			blogImage.className = 'blog__image';
			blogImage.src = imageUrl;
			blogTextContainer.className = 'blog__item-text';
			blogItemHeading.className = 'blog__item-text span';
			blogItemHeading.textContent = blogPost.title;
			blogItemText.className = 'blog__item-text p';
			blogItemText.textContent = blogPost.about;
			blogItemLink.textContent = 'Read more →';
			blogItemLink.href = `/pages/articles.html?id=${blogPost._id}`;

			container.appendChild(blogHeading);
			container.appendChild(blogGrid);
			container.appendChild(blogLink);
			blogGrid.appendChild(blogItem);
			blogItem.appendChild(blogImage);
			blogItem.appendChild(blogTextContainer);
			blogTextContainer.appendChild(blogItemHeading);
			blogTextContainer.appendChild(blogItemText);
			blogTextContainer.appendChild(blogItemLink);
		}
	}
	renderBlogPostsHTML();
}