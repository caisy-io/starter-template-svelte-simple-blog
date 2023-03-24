import { q_Footer } from '$lib/graphql/queries/Footer';
import { q_Navigation } from '$lib/graphql/queries/Navigation';
import type { Load } from '@sveltejs/kit';
import { GraphQLClient } from 'graphql-request';

export const load: Load = async (props) => {
	const endpoint = await `https://cloud.caisy.io/api/v3/e/${
		import.meta.env.VITE_CAISY_PROJECT_ID
	}/graphql`;

	const graphQLClient = await new GraphQLClient(endpoint, {
		headers: {
			'x-caisy-apikey': `${import.meta.env.VITE_CAISY_API_KEY}`
		}
	});

	const navigationData = await graphQLClient.request(q_Navigation);
	const footerData = await graphQLClient.request(q_Footer);

	return {
		navigationData: navigationData || null,
		footerData: footerData || null,
		slug: props.route.id
	};
};
