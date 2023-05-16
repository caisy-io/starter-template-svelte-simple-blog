<script lang="ts">
	import Fulltext from '../../../components/fulltext/Fulltext.svelte';
	import Seo from '../../../components/Seo.svelte';
	import type { ILoadProps } from '../../../services/content/load';
	export let data: ILoadProps;
	const text = data.blogArticle?.text;
</script>

{#if data?.blogArticle?.seo}
	<Seo seo={data.blogArticle.seo} />
{/if}
{#if text}
	<Fulltext {text} />
{/if}
