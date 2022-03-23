<script lang="ts">
	export let columnData = [];
</script>

<div class="row" style:--data-length={columnData.length}>
	{#each columnData as column}
		<div class="column">
			{column}
		</div>
	{/each}
</div>

<style lang="scss">
	.row {
		width: 100%;
		display: table-row;
	}

	.column {
		display: table-cell;
		padding: 10px;

		&:not(:last-child) {
			border-right: 1px solid black;
		}
	}
</style>
