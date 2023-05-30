export default {
	name: 'blogPost',
	title: 'Blog Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200,
			},
		},
		{
			name: 'imageSmall',
			title: 'Image Small',
			type: 'image',
			options: {
				hotspot: true
			 }
		},
		{
			name: 'imageLarge',
			title: 'Image Large',
			type: 'image',
			options: {
				hotspot: true
			 }
		},
		{
			name: 'writer',
			title: 'Writer',
			type: 'reference',
			to: [{ type: 'writer' }],
		},
		{
			name: 'publicationDate',
			title: 'Publication Date',
			type: 'date',
		},
		{
			name: 'about',
			title: 'About trip',
			type: 'text',
		},
		{
			name: 'mainContent',
			title: 'Main Content',
			type: 'text',
		},
	],
};
