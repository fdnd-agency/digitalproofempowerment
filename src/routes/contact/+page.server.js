import { message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { validationItems } from '$lib/formValidation';

export const load = async () => {
    const form = await superValidate(zod4(validationItems));
    return { form };
};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod4(validationItems));

        if (!form.valid) {
            return { form };
        }
