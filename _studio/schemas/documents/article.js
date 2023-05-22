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
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'writers' }],
			options: {
				filter: '_type == "author"',
			}
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
