import { sanity } from "../sanity.js";

export default async function blogPage() {
	const query = `*[_type == 'blogPost'] {

	}`;
	const blogPosts = await sanity.fetch(query);
	console.log(blogPosts)

	function blogPostDOM(blogPost) {
		const blog = document.createElement('section');
		const blogHeading = document.createElement('h2');
		const blogGrid = document.createElement('div');
		const blogItem = document.createElement('div');
		const blogImage = document.createElement('image');
		const blogPostContainer = document.createElement('div');
		const blogPostHeading = document.createElement('span');
		const blogPostParagraph = document.createElement('p');
		const blogPostLink = document.createElement('a');
	}




}
