<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	import DocumnetLink from '../../../components/fulltext/overwrites/DocumnetLink.svelte';
	export let data: any;
	const text = data.pageData.edges[0].node;
	console.log(text);
</script>

<div class="m-10 flex items-center justify-center">
	<div class="max-w-prose">
		<article class="prose lg:prose-xl">
			{#if text?.text?.json}
				<RichTextRenderer
					overwrites={{ documentLink: DocumnetLink }}
					connections={text?.text?.connections}
					node={text?.text?.json}
				/>
			{/if}
		</article>
	</div>
</div>
