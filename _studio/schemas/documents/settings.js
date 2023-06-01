export default {
	name: 'settings',
	title: 'Settings',
	type: 'document',
	fields: [
		{
			name: 'header',
			title: 'Header',
			type: 'object',
			fields: [
				{ name: 'mainImage', title: 'Main Image', type: 'image' },
				{ name: 'mainHeading', title: 'Main Heading', type: 'string' },
			]
		},
		{
			name: 'info',
			title: 'Info Section',
			type: 'object',
			fields: [
				{ name: 'infoHeading', title: 'Info Heading', type: 'string' },
				{ name: 'infoText', title: 'Info Text', type: 'text' },
				{ name: 'image', title: 'Image', type: 'image' },
				{ name: 'hiddenImage', title: 'Hidden on mobile', type: 'image' },
			]
		},
		{
			name: 'video',
			title: 'Video',
			type: 'object',
			fields: [
				{ name: 'videoHeading', title: 'Heading', type: 'string' },
				{ name: 'videoParagraph', title: 'Paragraph', type: 'string', },
			]
		},
		{
			name: 'benefits',
			title: 'Benefits Section',
			type: 'object',
			fields: [
				{ name: 'benefitsHeading', title: 'Benefits Heading', type: 'string' },
				{ name: 'benefitsList', title: 'Benefits List', type: 'array', of: [{ type: 'benefitsList' }] },
				{ name: 'benefitsImage', title: 'Benefits Image', type: 'image' },
			]
		},
	],

	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}