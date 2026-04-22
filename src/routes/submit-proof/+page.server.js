import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { z } from "zod/v3";

import { proofSchema } from "$lib/formValidation";

export const load = async () => {
  const form = await superValidate(zod(proofSchema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(proofSchema));

    if (!form.valid) {
      return { form };
    }

    console.log(form);

    // const endpoint = 'https://fdnd-agency.directus.app/items/digital_proof_empowerment_evidence';
    const endpoint = "https://69b15419adac80b427c4cc0e.mockapi.io/evidence";

    console.log(form);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // data: {
        location: form.data.location,
        time: form.data.time,
        date: form.data.date,
        // }
      }),
    });

    console.log(response);

    if (!response.ok) {
      return message(form, "Something went wrong");
    }

    console.log(form.data);

    console.log(message);
    return message(form, "Message send successfull");
  },
};
