export default {
	name: 'writers',
	title: 'Writers',
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
			  hotspot: true // <-- Defaults to false
			},
		},
	],
};
