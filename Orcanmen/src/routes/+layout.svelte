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

<header class="flex flex-row items-center justify-between px-8 py-4 border-b-1 border-foreground">
	<h1 class="text-xl font-bold">
		<a href="/">
			Orcanmen
		</a>
	</h1>

	<nav class="flex flex-row gap-4">
		<a class="font-medium border-b-1 border-foreground" href="/a">Test</a>
		<a class="font-medium border-b-1 border-foreground" href="/b">Test</a>
		<a class="font-medium border-b-1 border-foreground" href="/c">Test</a>
		<a class="font-medium border-b-1 border-foreground" href="/d">Test</a>
	</nav>

	<div class="flex flex-row gap-4">
		{#if data.user}
			<a href="/auth/logout" data-sveltekit-preload-data="off">
				<Button>
					<LogOut />
					Logout
				</Button>
			</a>

		{:else}
			<a href="/auth/login">
				<Button>
					<LogIn />
					Login
				</Button>
			</a>
		{/if}

		<ThemeToggle />
	</div>
</header>

{@render children()}
