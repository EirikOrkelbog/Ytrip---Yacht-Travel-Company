export default {
	name: 'cruises',
	title: 'Cruises',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'duration',
			title: 'Duration',
			type: 'number',
		},
		{
			name: 'dateStart',
			title: 'Date start',
			type: 'date',
			options: {
				dateFormat: 'DD-MM-YY',
			},
		},
		{
			name: 'dateEnd',
			title: 'Date end',
			type: 'date',
			options: {
				dateFormat: 'DD-MM-YY',
			},
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number'
		},
		{
			name: 'included',
			title: 'Included in price',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		}
	],
};