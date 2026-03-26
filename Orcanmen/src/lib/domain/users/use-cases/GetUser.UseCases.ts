import type { UserRepository } from "$lib/domain/users/ports/User.Repository";
import type { UserPresenter } from "$lib/domain/users/ports/User.Presenter";

export class GetUserUseCase {
    constructor(private readonly repository: UserRepository) {}

    async execute<T>(presenter: UserPresenter<T>): Promise<T> {
        const user = await this.repository.getUser();
        return presenter.present(user);
    }
}