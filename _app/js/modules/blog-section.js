import { sanity } from "../sanity.js";

export default async function blogSection() {
	const query = `*[_type == 'blogPost'] | order(_createdAt asc)[0..3] {
		image,
		about,
		 _id,
		 title,
	 }`;
	const blogPosts = await sanity.fetch(query);
	const blogGrid = document.querySelector('.blog__grid');
	
	async function renderBlogPostsHTML() {
		
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