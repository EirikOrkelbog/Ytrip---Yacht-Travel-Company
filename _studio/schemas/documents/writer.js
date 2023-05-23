export default {
	name: 'writer',
	title: 'Writer',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'profilePicture',
			title: 'Profile picture',
			type: 'image',
			options: {
			  hotspot: true
			},
		},
	],
};
