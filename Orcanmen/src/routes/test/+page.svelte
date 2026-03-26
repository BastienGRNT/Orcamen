<script lang="ts">
	import type { GetUserViewModel } from '$lib/domain/users/adapters/User.Presenter';
	import type { ArticleViewModel } from './+page.server';

	let { data }: {
		data: {
			user: GetUserViewModel;
			article: ArticleViewModel
		}
	} = $props();

	let { user, article } = $derived(data);
</script>

<header>
	<p>Profil de : {user.name}</p>
	<p>Contact : {user.email}</p>
</header>

<main>
	<article>
		<h2>{article.name}</h2>
		<p>{article.description}</p>
	</article>
</main>