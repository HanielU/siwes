<script lang="ts">
	import { personalProfile } from "../data/personaldata";
</script>

<section>
	<div class="section-header">
		<h1>Personal Profile</h1>
	</div>

	<ul>
		{#each personalProfile as { id, value }}
			<li>
				<span>{id}: </span>

				{#if typeof value === "object"}
					{#if id === "3 yr Appraisal"}
						<span class="field">
							<span>Rating: {value.rating}</span>
							<span>Ranking: {value.ranking}</span>
						</span>
					{/if}
				{:else}
					<span>{value}</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		padding: 4px;
		// border-right: 1px solid rgb(202, 198, 198);
		background: #e7e7e7;
	}

	.section-header {
		@extend %section-title;
	}

	li {
		display: flex;
		width: 100%;
		padding: 8px 10px;

		&:nth-of-type(even) {
			background: white;
		}

		span {
			width: 50%;
		}
	}
</style>
