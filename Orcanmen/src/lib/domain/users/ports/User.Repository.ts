import {User} from "$lib/domain/User";

export interface UserRepository {
    getUser(): Promise<User>
}