import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			type: 'string',
		}),
		defineField({
			name: 'menu',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			validation: (Rule) => Rule.max(1),
		}),
		defineField({
			name: 'footerMenu',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
		}),
		defineField({
			name: 'logo',
			type: 'image',
		}),
	],
})
