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
			name: 'image',
			title: 'Image',
			type: 'image'
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
			name: 'shortContent',
			title: 'Short Content',
			type: 'string',
		},
		{
			name: 'mainContent',
			title: 'Main Content',
			type: 'string',
		},
	],
};
