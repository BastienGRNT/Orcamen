import {User} from "$lib/domain/users/User.ts";

export interface UserRepository {
    getUser(): Promise<User>
}