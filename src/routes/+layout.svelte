<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Toast from '../components/Toast.svelte';
	import '@fontsource/inter';
	import type { IGenFooter, IGenNavigation } from '../services/graphql/__generated/sdk';
	import { env } from '$env/dynamic/public';

	export let data: { navigation: IGenNavigation; footer: IGenFooter };
	const { navigation, footer } = data;
</script>

<main>
	{#if env.PUBLIC_SHOW_ONBOARDING_TOAST != 'false'}
		<Toast />
	{/if}
	{#if navigation}
		<Header {navigation} />
	{/if}
	<slot />
	{#if footer}
		<Footer {footer} />
	{/if}
</main>
