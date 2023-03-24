<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	import type { IGenFulltext } from '../services/graphql/__generated/sdk';

	export let data: IGenFulltext;
	const { text } = data;
</script>

<div class="m-10 flex items-center justify-center">
	<div class="max-w-prose">
		<article class="prose lg:prose-xl">
			<RichTextRenderer connections={text?.connections} node={text?.json} overwrites />
		</article>
	</div>
</div>
