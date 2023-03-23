<script lang="ts">
	import type { PageInfoCustomType } from '../lib/graphql/__generated/customTypes';
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import '@fontsource/inter';

	export let data: PageInfoCustomType;

	const { navigationData, footerData } = data;
</script>

<main>
	{#if navigationData && navigationData?.Navigation}
		<Header navigation={navigationData?.Navigation} />
	{/if}
	<slot />
	{#if footerData && footerData?.Footer}
		<Footer footer={footerData?.Footer} />
	{/if}
</main>
