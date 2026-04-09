import { isFailure, type Result } from '$lib/domain/core/models/Result';
import type { ClientError } from '$lib/domain/core/errors/ClientError';
import { fail } from '@sveltejs/kit';

export const toActionResponse = <T>(result: Result<T, ClientError>) => {
	if (isFailure(result)) {
		return fail(result.error.statusCode, {
			success: false,
			errorMessage: result.error.message
		});
	}

	return {
		success: true,
		data: result.data
	};
};