<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<h1>Tester l'ajout de compte</h1>

<form method="POST" use:enhance>
	<label>
		Nom du compte :
		<input type="text" name="name" required />
	</label>

	<button type="submit">Ajouter</button>
</form>

{#if form?.success === false}
	<p style="color: red;">
		<strong>Erreur :</strong> {form.errorMessage}
	</p>
{/if}

{#if form?.success && form.data}
	<p style="color: green;">
		<strong>Succès !</strong> Compte "{form.data.name}" créé.
	</p>
{/if}