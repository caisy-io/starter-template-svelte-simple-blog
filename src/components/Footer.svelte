<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	import type { IGenFooter } from '../services/graphql/__generated/sdk';

	export let footer: IGenFooter;
	const { content } = footer;
</script>

{#if content?.json}
	<RichTextRenderer node={content.json} overwrites />
{/if}
