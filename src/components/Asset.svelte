<script lang="ts">
	export let src: string;
	export let description: string;
</script>

{#if src}
	<div class="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose">
		<img
			loading="lazy"
			src={`${src}?w=1920&h=960`}
			srcset={`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w, ${src}?w=1280&h=640 640w`}
			alt={description ?? ''}
			class="rounded-lg "
		/>
		{#if description}
			<caption class="text-gray-400 mt-3 text-center block text-xs">{description}</caption>
		{/if}
	</div>
{/if}
