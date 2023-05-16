<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	import type {
		IGenFulltext_Text_Connections,
		Maybe,
		Scalars
	} from '../../services/graphql/__generated/sdk';
	import DocumentLink from './overwrites/DocumentLink.svelte';

	export let text: {
		connections?: Maybe<Array<Maybe<IGenFulltext_Text_Connections>>>;
		json?: Maybe<Scalars['JSON']>;
	};
</script>

{#if text}
	<div class="m-10 flex items-center justify-center">
		<div class="max-w-prose">
			<article class="prose lg:prose-xl">
				<RichTextRenderer
					overwrites={{ documentLink: DocumentLink }}
					connections={text?.connections}
					node={text?.json}
				/>
			</article>
		</div>
	</div>
{/if}
