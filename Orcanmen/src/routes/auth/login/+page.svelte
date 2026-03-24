<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import * as Card from "$lib/components/ui/card";

    let { form }: { form: ActionData } = $props();
</script>

<section class="flex min-h-screen items-center justify-center p-4">
    <Card.Root class="-my-4 w-full max-w-sm">
        <Card.Header>
            <Card.Title>Login to your account</Card.Title>
            <Card.Description>Enter your email below to login to your account</Card.Description>
            <Card.Action>
                <Button variant="link">
                    <a href="/auth/register">Register</a>
                </Button>
            </Card.Action>
        </Card.Header>
        <Card.Content>
            <form method="post" action="?/signInEmail" use:enhance>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div class="grid gap-2">
                        <Label for="password">Password</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <Button type="submit" class="w-full">Login</Button>
                </div>
            </form>
        </Card.Content>
    </Card.Root>
</section>

{#if form?.message}
    <p class="mt-4 text-center text-sm font-medium text-destructive">{form.message}</p>
{/if}