<script lang="ts">
	import BlogArticleGrid from '../components/BlogArticleGrid.svelte';
	import FeaturedArticle from '../components/FeaturedArticle.svelte';
	import NewsletterSignip from '../components/NewsletterSignip.svelte';

	export let data: any;
	const components = data?.pageData;
</script>

{#each components as component}
	{#if component.__typename === 'FullwidthBlogTeaser'}
		<FeaturedArticle data={component} />
	{/if}

	{#if component.__typename === 'NewsletterSignup'}
		<NewsletterSignip data={component} />
	{/if}

	{#if component?.__typename === 'BlogArticleGrid'}
		<BlogArticleGrid data={component} />
	{/if}
{/each}
