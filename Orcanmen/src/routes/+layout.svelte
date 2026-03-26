<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { LogIn, LogOut } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ModeWatcher } from 'mode-watcher';

	let { data, children } = $props();
</script>

<ModeWatcher />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header>
	{#if data.user}
		<Button>
			<LogOut />
			<a href="/auth/logout" data-sveltekit-preload-data="off">Logout</a>
		</Button>
	{:else}
		<Button>
			<LogIn />
			<a href="/auth/login">Login</a>
		</Button>
	{/if}

	<ThemeToggle />
</header>
{@render children()}
