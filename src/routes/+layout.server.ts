import { caisySDK } from '../services/graphql/getSdk';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const navigationRequest = caisySDK.Navigation();
	const footerRequest = caisySDK.Footer();
	const navigation = (await navigationRequest)?.Navigation;

	const notFoundPage = navigation?.notFoundPage?.slug
    ? (await caisySDK
        .allPageBySlug({ slug: navigation?.notFoundPage?.slug})
        .then((r) => r.allPage?.edges?.[0]?.node)) ?? null
    : null;

	return {
		notFoundPage,
		navigation,
		footer: (await footerRequest)?.Footer,
	};
};

export const config = {
	isr: {
		expiration: 1
	}
};