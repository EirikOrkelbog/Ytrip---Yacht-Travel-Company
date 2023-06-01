export default {
	name: 'reviews',
	title: 'Reviews',
	type: 'document',
	fields: [
		{
			name: 'reviewTitle',
			title: 'Review Title',
			type: 'string',
		},
		{
			name: 'review',
			title: 'Review',
			type: 'text',
		},
		{
			name: 'reviewer',
			title: 'Reviewer Name',
			type: 'string',
		},
		{
			name: 'destination',
			title: 'Destination',
			type: 'string',
		},
	],
};