<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	export let data: any;
	const text = data.pageData.edges[0].node;
</script>

<div class="m-10 flex items-center justify-center">
	<div class="max-w-prose">
		<article class="prose lg:prose-xl">
			{#if text?.teaserImage?.src}
				<div class="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose">
					<img src={text.teaserImage.src} />
				</div>
			{/if}
			{#if text.text?.json}
				<RichTextRenderer connections={text.text?.connections} node={text.text?.json} />
			{/if}
		</article>
	</div>
</div>
