import { UserRepositoryInMemory } from '$lib/domain/users/adapters/User.Repository.InMemory';
import { GetUserPresenter } from '$lib/domain/users/adapters/User.Presenter';
import { GetUserUseCase } from '$lib/domain/users/use-cases/GetUser.UseCases';
import type { PageLoad } from './$types';
import type { ArticleViewModel } from './+page.server';

export const load: PageLoad = async ({ data }) => {
	const repository = new UserRepositoryInMemory();
	const presenter = new GetUserPresenter();
	const useCase = new GetUserUseCase(repository);

	const userViewModel = await useCase.execute(presenter);

	const articleViewModel: ArticleViewModel = {
		name: 'Test articleeeeee',
		description: 'Test Description'
	};

	return {
		...data,
		user: userViewModel
	};
};
