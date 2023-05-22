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
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			name: 'author',
			title: 'Author',
			type: 'string',
		},
		{
			name: 'publicationDate',
			title: 'Publication Date',
			type: 'date',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
};
