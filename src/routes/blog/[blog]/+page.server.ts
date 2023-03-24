import { q_allBlogArticleBySlug } from '$lib/graphql/queries/allBlogArticleBySlug';
import { GraphQLClient } from 'graphql-request';
import type { IGenQuery } from '../../../services/graphql/__generated/sdk';

/** @type {import('./$types').PageServerLoad} */

export const load = async ({ params }) => {
	try {
		const slugObj = {
			slug: params.blog
		};
		const endpoint = await `https://cloud.caisy.io/api/v3/e/${
			import.meta.env.VITE_CAISY_PROJECT_ID
		}/graphql`;

		const graphQLClient = await new GraphQLClient(endpoint, {
			headers: {
				'x-caisy-apikey': `${import.meta.env.VITE_CAISY_API_KEY}`
			}
		});

		const pageData = (await graphQLClient.request(q_allBlogArticleBySlug, slugObj)) as IGenQuery;

		return { pageData: pageData?.allBlogArticle || null };
	} catch (err) {
		console.log(err);
	}
	return null;
};
