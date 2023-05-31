export default {
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	fields: [
		{
			name: 'logo',
			title: 'Logo',
			type: 'image',
		},
		{
			name: 'logoDark',
			title: 'Logo Dark',
			type: 'image',
		},
		{
			name: 'links',
			title: 'Links',
			type: 'object',
			fields: [
				{
					name: 'linkName',
					title: 'Link Name',
					type: 'array',
					of: [{ type: 'string' }]
				},
				{
					name: 'linkHref',
					title: 'Link Href',
					type: 'array',
					of: [{ type: 'string' }]
				},
			]
		},
		{
			name: 'menuIcon',
			title: 'Menu Icon',
			type: 'image',
		},
		{
			name: 'menuIconDark',
			title: 'Menu Icon Dark',
			type: 'image',
		},
	],
	preview: {
		prepare: () => {
			return {
				title: 'Navigation'
			}
		}
	}
};