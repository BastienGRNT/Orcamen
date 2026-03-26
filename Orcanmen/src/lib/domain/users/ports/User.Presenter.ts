import type { User } from "$lib/domain/User";

export interface UserPresenter<T> {
    present(user: User): T;
}