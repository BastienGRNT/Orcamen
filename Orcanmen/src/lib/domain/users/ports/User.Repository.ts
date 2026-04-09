import {User} from "$lib/domain/users/User";

export interface UserRepository {
    getUser(): Promise<User>
}