<script lang="ts">
	import type { IGenNewsletterSignup } from '../services/graphql/__generated/sdk';

	export let data: IGenNewsletterSignup;
	const { headline, subheadline } = data;
</script>

<div class="m-10 flex items-center justify-center">
	<div class="max-w-prose">
		<div class="flex flex-col justify-start items-center py-14">
			<div class="flex flex-col justify-start items-center gap-2.5">
				{#if headline}
					<h2 class="text-4xl text-center font-bold text-slate-900">
						{headline}
					</h2>
				{/if}

				{#if subheadline}
					<p class="max-w-prose text-base text-center text-gray-600">
						{subheadline}
					</p>
				{/if}
			</div>
			<form action="#">
				<div class="items-center mx-auto my-3 max-w-screen-sm flex justify-center align-center">
					<div class="relative w-full">
						<label for="email" class="hidden mb-2 text-sm font-medium">Email address</label>
						<input
							class="min-w-[100px] sm:min-w-[300px] lg:min-w-[534px] selection:shadow-xs py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-5"
							placeholder="Enter your email"
							type="email"
							id="email"
						/>
					</div>
					<div class="ml-2 mr-0 mt-0 mb-0">
						<button
							type="submit"
							class="py-3 px-3 w-full text-center selection:inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5"
							>Subscribe</button
						>
					</div>
				</div>
			</form>
			<div class="flex flex-col justify-start items-start relative gap-1">
				<p class="text-xs text-center text-gray-400">
					By subscribing you accept to receive recurring newsletter emails
				</p>
			</div>
		</div>
	</div>
</div>
