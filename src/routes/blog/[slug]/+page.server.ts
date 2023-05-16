import { getAllBlogArticles } from '../../../services/content/getAllBlogArticle';
export {load, config} from '../../../services/content/load';

export async function entries() {
    return (await getAllBlogArticles({})).filter(blogArticle => !!blogArticle?.slug).map((blogArticle) => ({slug: blogArticle.slug!}));
}

export const prerender = true;