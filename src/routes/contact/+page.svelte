<script lang="ts">
	import ContactForm from '../../components/ContactForm.svelte';
	import Fulltext from '../../components/Fulltext.svelte';
	import Headline from '../../components/Headline.svelte';
	import NewsletterSignip from '../../components/NewsletterSignip.svelte';

	export let data: any;

	const components = data?.pageData;
</script>

{#each components as component}
	{#if component.__typename === 'Headline'}
		<Headline data={component} />
	{/if}

	{#if component.__typename === 'Fulltext'}
		<Fulltext data={component} />
	{/if}
	{#if component.__typename === 'NewsletterSignup'}
		<NewsletterSignip data={component} />
	{/if}

	{#if component.__typename === 'ContactForm'}
		<ContactForm data={component} />
	{/if}
{/each}
