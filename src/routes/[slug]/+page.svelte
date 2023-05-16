<script lang="ts">
	import PageBody from '../../components/PageBody.svelte';
	import Seo from '../../components/Seo.svelte';
	import type { ILoadProps } from '../../services/content/load';

	export let data: ILoadProps;
</script>

{#if data?.page?.seo}
	<Seo seo={data.page.seo} />
{/if}
{#if data?.page?.components}
	<PageBody components={data?.page?.components} />
{/if}
