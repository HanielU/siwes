<script lang="ts">
	import type { InfoSection } from "../types";

	export let bg = "inherit";
	export let sects: InfoSection = {};
</script>

<section style:background={bg}>
	{#each Object.entries(sects) as [key, value]}
		{@const { info, data } = value}
		<div class="content-wrapper">
			<h1 class="content-title">
				{key}
			</h1>

			<div class="content-details">
				{#if value.info}
					<div class="info">{info}</div>
				{/if}

				<div class="details-header">
					{#each Object.entries(data[0]) as [propTitle]}
						<div class="column">{propTitle}</div>
					{/each}
				</div>

				{#each data as element}
					<div class="details-row">
						{#each Object.entries(element) as [title, val]}
							<div class="column">
								{val}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style lang="scss">
	section {
		padding: 4px;
		grid-template-columns: auto;
	}

	.content-wrapper {
		padding-bottom: 10px;
		width: 100%;
		// height: 250px;
	}

	.content-title {
		@extend %section-title;
		text-transform: uppercase;
	}

	.content-details {
		padding: 0 5px;
	}

	.info {
		color: red;
		text-align: center;
		padding: 5px;
	}

	.details-header {
		display: flex;

		.column {
			width: calc(100% / 3);
			border-left: 2px solid black;
			padding-left: 10px;
		}
	}

	.details-row {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #949494;

		.column {
			padding: 4px 0;
			width: calc(100% / 3);
			border-left: 2px solid transparent;
			padding-left: 10px;
		}
	}
</style>
