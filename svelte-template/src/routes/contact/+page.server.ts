import { q_allPageBySlug } from '$lib/graphql/queries/allPageBySlug';
import type { Load } from '@sveltejs/kit';
import { GraphQLClient } from 'graphql-request';

export const load: Load = async ({ params }) => {
	try {
		const slugObj = {
			slug: 'contact'
		};
		const endpoint = await `https://cloud.caisy.io/api/v3/e/${
			import.meta.env.VITE_CAISY_PROJECT_ID
		}/graphql`;

		const graphQLClient = await new GraphQLClient(endpoint, {
			headers: {
				'x-caisy-apikey': `${import.meta.env.VITE_CAISY_API_KEY}`
			}
		});

		const pageData = (await graphQLClient.request(q_allPageBySlug, slugObj)) as {
			allPage: any;
		};

		return { pageData: pageData?.allPage?.edges[0]?.node?.components || null, params };
	} catch (err) {
		console.log(err);
	}
	return null;
};
