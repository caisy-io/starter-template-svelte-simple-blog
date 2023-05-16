import { error, redirect, type Load } from '@sveltejs/kit';
import { caisySDK } from '../graphql/getSdk';
import type { IGenBlogArticle, IGenPage } from '../graphql/__generated/sdk';

export interface ILoadProps {
	blogArticle?: IGenBlogArticle;
	page?: IGenPage;
}

export const load: Load = async ({ params, route }) => {
	const navigationRequest = caisySDK.Navigation();

	let slug = params.slug;

	if (slug === undefined && route.id == '/') {
		const Navigation = (await navigationRequest)?.Navigation;
		slug = Navigation?.homePage?.slug ?? undefined;
	}

	if (slug === undefined) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const blogArticle =
		route.id == '/blog/[slug]'
			? (await caisySDK
					.allBlogArticleBySlug({ slug })
					.then((r) => r.allBlogArticle?.edges?.[0]?.node)) ?? null
			: await caisySDK.allPageBySlug({ slug }).then((r) => r.allPage?.edges?.[0]?.node);

	const page =
		route.id != '/blog/[slug]'
			? (await caisySDK.allPageBySlug({ slug }).then((r) => r.allPage?.edges?.[0]?.node)) ?? null
			: null;

	const navigation = (await navigationRequest)?.Navigation;

	if (params.slug && params.slug === navigation?.homePage?.slug) {
		throw redirect(308, '/');
	}

	if ( page == null && blogArticle == null ) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		blogArticle,
		page
	} as ILoadProps;
};

export const config = {
	isr: {
		expiration: 1
	}
};