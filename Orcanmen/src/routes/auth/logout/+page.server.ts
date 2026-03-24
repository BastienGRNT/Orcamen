import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
    await auth.api.signOut({
        headers: event.request.headers
    });

    return redirect(302, '/auth/login');
};