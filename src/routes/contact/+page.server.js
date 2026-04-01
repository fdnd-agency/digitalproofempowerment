import { message, superValidate } from 'sveltekit-superforms';
// import { zod4 } from 'sveltekit-superforms/adapters';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod/v3';

import { validationItems } from '$lib/formValidation';

export const load = async () => {
    const form = await superValidate(zod(validationItems));
    return { form };
};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(validationItems));

        if (!form.valid) {
            return { form };
        }

        const endpoint = 'https://fdnd-agency.directus.app/items/digital_proof_empowerment_questions';
        // const endpoint = 'https://69b07208c63dd197febc4bbf.mockapi.io/questions/questions';

        console.log(form);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // data: {
                first_name: form.data.firstname,
                last_name: form.data.lastname,
                email: form.data.email,
                message: form.data.message
                // }
            })
        });

        if (!response.ok) {
            return message(form, 'Something went wrong');
        }

        console.log(form.data);

        console.log(message);
        return message(form, 'Message send successfull');
    }

    const endpoint = "https://fdnd-agency.directus.app/items/digital_proof_empowerment_questions";
    // const endpoint = 'https://69b07208c63dd197febc4bbf.mockapi.io/questions/questions';

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // data: {
        first_name: form.data.firstname,
        last_name: form.data.lastname,
        email: form.data.email,
        message: form.data.message,
        // }
      }),
    });

    console.log(form.data);

    console.log(message);
    return message(form, "Successfull");
  },
};
