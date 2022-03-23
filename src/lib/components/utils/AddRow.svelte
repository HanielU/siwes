<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { db, showDrawer } from '$lib/stores/db';
	import { createUser } from '$lib/utils/helpers';

	const local = {
		firstname: '',
		lastname: '',
		workid: '',
		department: '',
		phoneNo: '',
		pcType: '',
		pcSerialCode: '',
		discCode: ''
	};

	const placeholders = {
		firstname: 'First Name',
		lastname: 'Last Name',
		workid: 'Work ID',
		department: 'Department',
		pcType: 'PC Type',
		pcSerialCode: 'Laptop Serial Code',
		discCode: 'Button Code',
		phoneNo: 'Phone Number'
	};

	function checkEmptyProperties(checkKey: string) {
		const keys = ['firstname', 'lastname', 'pcType', 'discCode', 'phoneNo'];
		return keys.includes(checkKey);
	}

	function handleSubmit() {
		for (const key in local) {
			if (Object.prototype.hasOwnProperty.call(local, key)) {
				if (!local[key].trim()) {
					if (checkEmptyProperties(key)) return;
				}
				local[key] = local[key].trim() ? local[key] : '-';
			}
		}
		const newUser = createUser(local);
		db.update((prev) => [...prev, newUser]);

		// clear local data
		for (const key in local) {
			if (Object.prototype.hasOwnProperty.call(local, key)) {
				local[key] = '';
			}
		}
	}

	const closeDrawer = () => showDrawer.set(false);
</script>

{#if $showDrawer}
	<div class="drawer-bg" on:click|self={closeDrawer} transition:fade={{ duration: 100 }}>
		<aside class="right-drawer" transition:fly={{ duration: 350, x: 400 }}>
			<form on:submit|preventDefault={handleSubmit}>
				{#each Object.entries(local) as [key]}
					<input type="text" placeholder={placeholders[key]} bind:value={local[key]} />
				{/each}

				<button>Save</button>
			</form>
		</aside>
	</div>
{/if}

<style lang="scss">
	.drawer-bg {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(#000, 0.5);
	}

	.right-drawer {
		height: 100%;
		width: 400px;
		background: white;
		margin-left: auto;
		padding: 24px;
	}

	form {
		width: 100%;
	}

	input,
	button {
		width: 100%;
		border-radius: 4px;
		margin-bottom: 20px;
		font-size: 1rem;
	}

	input {
		padding: 15px;
		border: 1px solid rgba(#515777, 0.2);
		font-weight: 500;

		&:focus {
			border-color: rgba(#515777, 0.8);
		}
	}

	button {
		display: block;
		margin: 10px;
		padding: 12px;
		font-weight: 500;
	}
</style>
