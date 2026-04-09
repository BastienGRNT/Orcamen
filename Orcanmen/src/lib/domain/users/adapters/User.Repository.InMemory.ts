import type {UserRepository} from "$lib/domain/users/ports/User.Repository";
import {User} from "$lib/domain/users/User";

export class UserRepositoryInMemory implements UserRepository {
    async getUser(): Promise<User> {
        console.log("REPOSITORY EXECUTER")
        await new Promise(resolve => setTimeout(resolve, 1000));
        return User.create("1", "John Doe", "john@example.com")
    }
}