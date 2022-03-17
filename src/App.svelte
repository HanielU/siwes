<script lang="ts">
	import InfoBar from "./components/InfoBar.svelte";
	import Default from "./Default.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import { secondBar, thirdBar } from "./data/personaldata";
</script>

<!-- <Default /> -->

<div class="wrapper">
	<Sidebar />
	<InfoBar sects={secondBar} />
	<InfoBar sects={thirdBar} bg="#e7e7e7" />
</div>

<style lang="scss">
	.wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 350px 1fr 1fr;
		grid-auto-rows: auto;
	}
</style>
