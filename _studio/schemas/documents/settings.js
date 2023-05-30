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
				{ name: 'desktopImage', title: 'Desktop Image', type: 'image' },
				{ name: 'mobileImage', title: 'Mobile Image', type: 'image' },
			]
		},
		{
			name: 'benefits',
			title: 'Benefits Section',
			type: 'object',
			fields: [
				{ name: 'benefitsHeading', title: 'Benefits Heading', type: 'string' },
				{ name: 'benefitsList', title: 'Benefits List', type: 'array', of: [{ type: 'string' }] },
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