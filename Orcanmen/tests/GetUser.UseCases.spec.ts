import { describe, it, expect, vi } from 'vitest';
import { GetUserUseCase } from '$lib/domain/users/use-cases/GetUser.UseCases';
import type { UserRepository } from '$lib/domain/users/ports/User.Repository';
import { GetUserPresenter } from '$lib/domain/users/adapters/User.Presenter';
import { User } from '$lib/domain/users/User.ts';

describe('GetUserUseCase', () => {
    it('doit récupérer l\'utilisateur via le repository et le passer au presenter', async () => {

        const mockUser = User.create("1", "Test User", "test@test.com");
        const mockRepository: UserRepository = {
            getUser: vi.fn().mockResolvedValue(mockUser)
        };
        
        const presenter = new GetUserPresenter();
        const useCase = new GetUserUseCase(mockRepository);

        const result = await useCase.execute(presenter);

        expect(mockRepository.getUser).toHaveBeenCalledOnce();
        
        expect(result).toEqual({
            name: "Test User",
            email: "test@test.com",
        });
    });
});