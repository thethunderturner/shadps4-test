import { CATEGORIES } from '@/data/categories'
import type { Collection } from 'tinacms'

export const BlogPost: Collection = {
	name: 'post',
	label: 'Blog Post',
	path: 'src/content/blog',
	format: 'mdx',
	ui: {
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
			type: 'image',
			label: 'Cover Image',
			required: false,
			name: 'heroImage',
			description: 'The image used for the cover of the post'
		},

		{
			type: 'string',
			required: true,
			name: 'category',
			label: 'Category',
			description: 'Select an category for this post',
			options: [...CATEGORIES]
		},
		{
			type: 'string',
			label: 'description',
			required: true,
			name: 'description',
			description: 'A short description of the post'
		},
		{
			type: 'datetime',
			name: 'pubDate',
			label: 'Publication Date',
			required: true
		},
		{
			name: 'draft',
			label: 'Draft',
			type: 'boolean',
			description: 'If this is checked the post will not be published'
		},
		{
			type: 'string',
			name: 'tags',
			required: false,
			label: 'Tags',
			description: 'Tags for this post',
			list: true,
			ui: {
				component: 'tags'
			}
		},
		{
			type: 'string',
			name: 'title',
			label: 'Title',
			isTitle: true,
			required: true
		},
		{
			type: 'rich-text',
			label: 'body',
			name: 'Body',
			isBody: true,
			required: true,
			templates: [
				{
					name: 'Blockquote',
					label: 'Blockquote',
					fields: [
						{
							name: 'cite',
							type: 'string',
							label: 'Cite',
							required: false
						},
						{
							name: 'children',
							type: 'rich-text',
							label: 'Quote'
						}
					]
				},
				{
					name: 'YoutubeEmbed',
					label: 'Youtube Embed',
					fields: [
						{
							name: 'title',
							type: 'string',
							label: 'Title (Optional)',
							required: false
						},
						{
							name: 'url',
							type: 'string',
							label: 'Youtube URL'
						}
					]
				}
			]
		}
	]
}
