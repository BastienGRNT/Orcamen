import type { User } from "$lib/domain/users/User";

export interface UserPresenter<T> {
    present(user: User): T;
}