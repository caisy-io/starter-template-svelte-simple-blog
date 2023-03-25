import { q_allPageBySlug } from '../../services/graphql/queries/allPageBySlug';
import { GraphQLClient } from 'graphql-request';

export const load = async ({ params }) => {
	try {
		const slugObj = {
			slug: 'about'
		};
		const endpoint = await `https://cloud.caisy.io/api/v3/e/${
			import.meta.env.VITE_CAISY_PROJECT_ID
		}/graphql`;

		const graphQLClient = await new GraphQLClient(endpoint, {
			headers: {
				'x-caisy-apikey': `${import.meta.env.VITE_CAISY_API_KEY}`
			}
		});

		const pageData = (await graphQLClient.request(q_allPageBySlug, slugObj)) as any;

		return { pageData: pageData?.allPage?.edges[0]?.node?.components || null, params };
	} catch (err) {
		console.log(err);
	}
	return null;
};
