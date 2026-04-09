<script lang="ts">
	import { page } from '$app/state';
</script>

<main class="flex min-h-[80vh] items-center justify-center p-4">
	<div class="bg-card text-card-foreground shadow-lg border-border w-full max-w-md rounded-lg border p-8 text-center">

		<h1 class="text-foreground mb-4 text-3xl font-bold">
			Oups ! Erreur {page.status}
		</h1>

		<p class="text-destructive mb-8 text-lg font-medium">
			{page.error?.message ?? "Une erreur inattendue est survenue."}
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/"
				class="bg-primary text-primary-foreground hover:opacity-90 rounded-md px-6 py-2 transition-all"
			>
				Retourner à l'accueil
			</a>

			<button
				type="button"
				onclick={() => history.back()}
				class="border-input bg-secondary text-secondary-foreground hover:bg-accent rounded-md border px-6 py-2 transition-all cursor-pointer"
			>
				Page précédente
			</button>
		</div>

	</div>
</main>