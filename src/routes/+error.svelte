<script lang="ts">
	import PageBody from '../components/PageBody.svelte';
	import type { IGenPage } from '../services/graphql/__generated/sdk';
	import { page } from '$app/stores';

	export let data: { notFoundPage: IGenPage };
	const notFoundPage = data.notFoundPage;
</script>

{#if $page.status == 404 && notFoundPage?.components}
	<PageBody components={notFoundPage.components} />
{:else}
	<h1>{$page.status}: {$page.error?.message ?? ""}</h1>
{/if}
