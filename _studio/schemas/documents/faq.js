export default {
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	fields: [
		{
			name: 'faqs',
			title: 'FAQs',
			type: 'array',
			of: [
				{
					type: 'faqObject',
				},
			],
		},
	],
	preview: {
		prepare: () => {
			return {
				title: 'FAQ'
			}
		}
	}
};