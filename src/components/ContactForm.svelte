<script lang="ts">
	import type { IGenContactForm } from '../services/graphql/__generated/sdk';

	export let data: IGenContactForm;
	const { headline } = data;
</script>

<div class="px-6 lg:m-10 lg:flex lg:items-center lg:justify-center ">
	<div class="max-w-prose">
		<form action="#">
			<div
				class="flex flex-col justify-start items-start max-w-prose relative overflow-hidden gap-8 px-6 py-[15px] rounded-lg bg-white border border-gray-200"
			>
				{#if headline}
					<h1 class="text-xl font-semibold text-center text-black">
						{headline}
					</h1>
				{/if}
				<div class="flex flex-col justify-start items-start self-stretch">
					<div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
						<div class="flex justify-start items-start self-stretch relative">
							<label class="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
								Name
							</label>
						</div>
						<div
							class="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200"
						>
							<input
								type="text"
								class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-start items-start self-stretch">
					<div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
						<div class="flex justify-start items-start self-stretch relative">
							<label class="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
								Email
							</label>
						</div>
						<div
							class="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200"
						>
							<input
								type="email"
								class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-start items-start self-stretch">
					<div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
						<div class="flex justify-start items-start self-stretch relative">
							<label class="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
								Mesage
							</label>
						</div>
						<div
							class="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200"
						>
							<textarea
								class="py-3 px-4 block w-full resize-none border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
								rows="6"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-start items-start self-stretch">
					<div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
						<button
							type="submit"
							class="py-3 px-4 w-full inline-flex selection:inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
