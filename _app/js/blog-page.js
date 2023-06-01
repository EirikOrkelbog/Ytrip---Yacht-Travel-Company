import { sanity } from "./sanity.js";
import navigationDOM from "./modules/navigationDOM.js";
import fetchImage from "./modules/fetchImage.js";
import footerDOM from "./modules/footer.js";
navigationDOM();
footerDOM();

export default async function blogPage() {
	const query = `*[_type == 'blogPost']{image, title, about, _id}`;
	const blogPosts = await sanity.fetch(query);

	const container = document.querySelector('.blog');

	async function renderBlogHTML() {
		const blogHeading = document.createElement('h2');
		const blogGrid = document.createElement('div');

		blogHeading.className = 'subheading-mobile blog__heading';
		blogHeading.textContent = 'Our blog';
		blogGrid.className = 'blog__page-grid';

		container.appendChild(blogHeading);
		container.appendChild(blogGrid);

		for (const blogPost of blogPosts) {
			// Getting image url
			const imageId = blogPost.image.asset._ref;
			const imageUrl = await fetchImage(imageId);

			const blogItem = document.createElement('div');
			const blogImage = document.createElement('img');
			const blogPostContainer = document.createElement('div');
			const blogPostHeading = document.createElement('span');
			const blogPostContent = document.createElement('p');
			const blogPostLink = document.createElement('a');

			blogItem.className = 'blog__page-item';
			blogImage.src = imageUrl;
			blogImage.alt = '';
			blogImage.className = 'blog__image';
			blogPostContainer.className = 'blog__item-text';
			blogPostHeading.textContent = blogPost.title;
			blogPostContent.textContent = blogPost.about;
			blogPostLink.href = `/pages/articles.html?id=${blogPost._id}`;
			blogPostLink.textContent = 'Read more →';

			blogPostContainer.appendChild(blogPostHeading);
			blogPostContainer.appendChild(blogPostContent);
			blogPostContainer.appendChild(blogPostLink);
			blogItem.appendChild(blogImage);
			blogItem.appendChild(blogPostContainer);
			blogGrid.appendChild(blogItem);
		}
	}
	renderBlogHTML();
}
blogPage();
