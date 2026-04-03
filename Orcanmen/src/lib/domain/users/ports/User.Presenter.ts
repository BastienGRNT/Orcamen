import type { User } from "$lib/domain/users/User.ts";

export interface UserPresenter<T> {
    present(user: User): T;
}