import { UserRepositoryInMemory } from '$lib/domain/users/adapters/User.Repository.InMemory';
import { GetUserPresenter } from '$lib/domain/users/adapters/User.Presenter';
import { GetUserUseCase } from '$lib/domain/users/use-cases/GetUser.UseCases';
import type { PageServerLoad } from './$types';

export type ArticleViewModel = {
	name: string;
	description: string;
};

export const load: PageServerLoad = async () => {
	const repository = new UserRepositoryInMemory();
	const presenter = new GetUserPresenter();
	const useCase = new GetUserUseCase(repository);

	const userViewModel = await useCase.execute(presenter);
	const articleViewModel: ArticleViewModel = {
		name: 'Test article',
		description: 'Test Description'
	};

	return {
		user: userViewModel,
		article: articleViewModel
	};
};
