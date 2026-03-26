import type { UserPresenter } from "$lib/domain/users/ports/User.Presenter";
import type { User } from "$lib/domain/User";

export type GetUserViewModel = {
    name: string;
    email: string;
};

export class GetUserPresenter implements UserPresenter<GetUserViewModel> {
    present(user: User): GetUserViewModel {
        return {
            name: user.name,
            email: user.email,
        };
    }
}