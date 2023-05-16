<script lang="ts">
	import type { IGenPage_Components, Maybe } from '../services/graphql/__generated/sdk';
	import BlogArticleGrid from './BlogArticleGrid.svelte';
	import ContactForm from './ContactForm.svelte';
	import FeaturedArticle from './FeaturedArticle.svelte';
	import Fulltext from './fulltext/Fulltext.svelte';
	import Headline from './Headline.svelte';
	import NewsletterSignup from './NewsletterSignup.svelte';

	export let components: Maybe<IGenPage_Components>[];

</script>
{#each components as component}
	{#if component?.__typename === 'FullwidthBlogTeaser'}
		<FeaturedArticle data={component} />
	{/if}

	{#if component?.__typename === 'NewsletterSignup'}
		<NewsletterSignup data={component} />
	{/if}

	{#if component?.__typename === 'BlogArticleGrid'}
		<BlogArticleGrid data={component} />
	{/if}

	{#if component?.__typename === 'Headline'}
		<Headline data={component} />
	{/if}

	{#if component?.__typename === 'Fulltext' && component.text}
		<Fulltext text={component.text} />
	{/if}

	{#if component?.__typename === 'ContactForm'}
		<ContactForm data={component} />
	{/if}
{/each}
