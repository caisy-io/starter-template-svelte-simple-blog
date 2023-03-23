<script lang="ts">
	import type { IGenNavigation } from '../services/graphql/__generated/sdk';
	import { page } from '$app/stores';

	export let navigation: IGenNavigation;
</script>

<header class="flex flex-wrap m-10 z-50 bg-white text-sm">
	<nav class="mx-auto">
		<div class="flex items-end flex-col justify-between flex-end">
			<div class="flex gap-5 flex-row flex-wrap items-center justify-center mt-0">
				{#if navigation.entries && navigation}
					{#each navigation.entries as entry}
						<a
							href={entry?.connection?.slug === 'home' ? '/' : `/${entry?.connection?.slug}`}
							class={`font-medium${
								entry?.connection?.slug && $page.url.pathname.includes(entry.connection.slug)
									? 'font-medium text-blue-500'
									: 'text-gray-600'
							}  hover:text-gray-400
							${$page.url.pathname === '/' && entry?.connection?.slug === 'home' && 'font-medium text-blue-500'}
							
							`}>{entry?.title}</a
						>
					{/each}
				{/if}
			</div>
		</div>
	</nav>
</header>
