import type { Collection } from 'tinacms'

export const Faq: Collection = {
	name: 'faq',
	label: 'FAQ',
	path: 'src/content/faq',
	format: 'mdx',
	ui: {
		allowedActions: {
			createNestedFolder: false
		},
		filename: {
			slugify: ({ title }) => {
				return title
					?.toLowerCase()
					?.split(' ')
					?.join('-')
					?.normalize('NFD')
					?.replace(/[^a-z0-9-]/g, '')
					.replace(/--/g, '')
					.slice(0, 80)
					.replace(/^-|-$/, '')
			}
		}
	},
	fields: [
		{
			type: 'string',
			label: 'title',
			name: 'title',
			required: true
		},
		{
			type: 'number',
			label: 'Sort key',
			name: 'sortKey',
			description: 'The order in which the faq will be displayed (optional)'
		},
		{
			type: 'rich-text',
			label: 'Body',
			name: 'body',
			isBody: true,
			required: true
		}
	]
}
