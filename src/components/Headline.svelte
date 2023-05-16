<script lang="ts">
	import type { IGenHeadline } from '../services/graphql/__generated/sdk';

	export let data: IGenHeadline;

	const { headline, subheadline } = data;
</script>

<div class="m-10 flex items-center justify-center">
	<div class="max-w-prose">
		<div class="mb-8 flex flex-col justify-start items-center gap-2.5">
			{#if headline}
				<h1 class="text-4xl font-bold text-slate-900 text-center">
					{headline}
				</h1>
			{/if}
			{#if subheadline}
				<h4 class="mt-2 text-xl text-center text-gray-400">
					{subheadline}
				</h4>
			{/if}
		</div>
	</div>
</div>
