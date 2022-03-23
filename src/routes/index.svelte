<script lang="ts">
	import '../app.scss';
	import App from '$lib/components/App.svelte';
	import AddRow from '$lib/components/utils/AddRow.svelte';
</script>

<div id="app">
	<App />
	<AddRow />
</div>

<style lang="scss">
	#app {
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>
