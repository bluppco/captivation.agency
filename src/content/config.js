import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		link: z.string().optional(),
		order: z.number(),
		active: z.boolean(),
		hasDropdown: z.boolean(),
		items: z.array(

			z.object({

				title: z.string(),
				link: z.string(),
				order: z.number(),
				active: z.boolean(),

			})

		).optional(),

	})

})

const footerColumnCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})


export const collections = {

    "footer-column": footerColumnCollection,
    "header": headerCollection,

}
