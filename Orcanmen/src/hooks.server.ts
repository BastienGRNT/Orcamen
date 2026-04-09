import type { Handle, HandleServerError } from '@sveltejs/kit';
import { building } from '$app/environment';
import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { ServerError } from '$lib/domain/core/errors/ServerError';

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;

export const handleError: HandleServerError = ({ error, event }) => {

	if (error instanceof ServerError) {
		console.error(`[CRASH] ${event.url.pathname} - ${error.message}`, error.cause);
	} else {
		console.error(`[INCONNU]`, error);
	}

	return {
		message: "Un problème technique est survenu. L'équipe a été prévenue."
	};
};
