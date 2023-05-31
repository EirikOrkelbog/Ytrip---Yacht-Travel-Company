export default Structure => {
	const { divider, editor, list, listItem, documentTypeListItem } = Structure;

	return list()
		.title('Ytrip content')
		.showIcons(false)
		.items([
			documentTypeListItem('navigation'),
			documentTypeListItem('cruises'),
			documentTypeListItem('blogPost'),
			documentTypeListItem('writer'),
			documentTypeListItem('reviews'),
			documentTypeListItem('faq'),
			documentTypeListItem('footer'),

			divider(),

			listItem()
				.title('Settings')
				.child(
					editor().id('settings').schemaType('settings')
				),
		])
}