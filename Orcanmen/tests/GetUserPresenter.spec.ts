import { describe, it, expect } from 'vitest';
import { GetUserPresenter } from '$lib/domain/users/adapters/User.Presenter';
import { User } from '$lib/domain/users/User.ts';

describe('GetUserPresenter', () => {
    it('doit formater une entité User en GetUserViewModel', () => {
        const presenter = new GetUserPresenter();
        const user = User.create("123", "Alice", "alice@example.com");

        const viewModel = presenter.present(user);

        expect(viewModel).toEqual({
            name: "Alice",
            email: "alice@example.com",
        });
    });
});