<script lang="ts">
	import type { IGenSeoInformation } from '../services/graphql/__generated/sdk';

	export let seo: IGenSeoInformation | undefined;
	const ogImageSrc = seo?.ogImage?.src;
	const ogImageAlt = seo?.ogImage?.description;
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<title>{seo?.title ?? ''}</title>

	{#if seo?.title}
		<meta property="og:title" content={seo?.title ?? ''} />
		<meta name="twitter:title" content={seo?.title ?? ''} />
	{/if}

	{#if seo?.description}
		<meta name="twitter:description" content={seo?.description ?? ''} />
		<meta name="description" content={seo?.description ?? ''} />
		<meta property="og:description" content={seo?.description ?? ''} />
	{/if}

	{#if ogImageSrc}
		<meta property="og:image:type" content="image/jpeg" />
		<meta property="og:image:width" content="630" />
		<meta property="og:image:height" content="1200" />
		<meta property="og:image" content={`${ogImageSrc}?f=jpeg&w=1200&h=630`} />
		<meta property="og:image:secure_url" content={`${ogImageSrc}?f=jpeg&w=1200&h=630`} />
		<meta name="twitter:image" content={`${ogImageSrc}?f=jpeg&w=1200&h=630`} />
	{/if}

	{#if ogImageAlt}
		<meta property="og:image:alt" content={ogImageAlt} />
	{/if}
    
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
