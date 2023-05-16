import { getAllPages } from '../../services/content/getAllPages';

export { load, config } from '../../services/content/load';

export async function entries() {
    return (await getAllPages({})).filter(page => !!page?.slug).map((page) => ({slug: page.slug!}));
}

export const prerender = true;