<script lang="ts">
	import type { IGenBlogArticleGrid } from '../services/graphql/__generated/sdk';
	import ArticleCard from './ArticleCard.svelte';

	export let data: IGenBlogArticleGrid;

	const props = data;
	const { headline, articles, subheadline } = props;
</script>

<div class="flex items-center justify-center m-10">
	<div class="max-w-screen-2xl">
		<div class="flex flex-col justify-start items-center self-stretch overflow-hidden gap-14">
			<div class="flex flex-col justify-start items-center self-stretch relative gap-2.5">
				<h1 class="text-4xl font-bold text-left text-slate-900">
					{headline ?? ''}
				</h1>

				{#if subheadline}
					<h3 class="text-base text-left text-gray-600">{subheadline}</h3>
				{/if}
			</div>
			{#if articles && articles?.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each articles as article}
						{#if article}
							<ArticleCard {article} />
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
