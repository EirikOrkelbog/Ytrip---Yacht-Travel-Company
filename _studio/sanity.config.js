import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import ytrip from './schemas/structure/ytrip.js';
import settings from './schemas/structure/settings.js';

export default {
	title: 'Ytrip - Yacht Travel Company',

	projectId: '5khmsjz8',
	dataset: 'production',

	plugins: [
		deskTool({
			name: 'ytrip',
			title: 'Ytrip',
			structure: ytrip
		}), 
		deskTool({
			name: 'settings',
			title: 'Settings',
			structure: settings
		}),
		visionTool()],

	schema: {
		types: schemas,
	},
};
