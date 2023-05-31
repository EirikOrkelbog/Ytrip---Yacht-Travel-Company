export default {
	name: 'footer',
	title: 'Footer',
	type: 'document',
	fields: [
		{
			name: 'contact',
			title: 'Contact',
			type: 'object',
			fields: [
				{ name: 'contactHeading', title: 'Contact Heading', type: 'string' },
				{ name: 'emailLabel', title: 'Email Label', type: 'string' },
				{ name: 'email', title: 'Email', type: 'string' },
				{ name: 'phoneLabel', title: 'Phone Label', type: 'string' },
				{ name: 'phone', title: 'Phone Number', type: 'string' },
				{ name: 'social', title: 'Social Links', type: 'array', of: [{ type: 'string' }] },
			]
		},
		{
			name: 'form',
			title: 'Form',
			type: 'object',
			fields: [
				{ name: 'formHeading', title: 'Form Heading', type: 'string' },
				{ name: 'checkbox', title: 'Checkbox', type: 'string' },
			]
		},
	],
	preview: {
		prepare: () => {
			return {
				title: 'Footer'
			}
		}
	}
};