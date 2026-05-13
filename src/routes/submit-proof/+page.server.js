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

    const endpoint = "https://fdnd-agency.directus.app/items/digital_proof_empowerment_evidence";
    console.log(form);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // data: {
        Location: form.data.location,
        Postal_code: form.data.postalCode,
        House_number: form.data.houseNumber,
        Time_stamp: form.data.time,
        Date: form.data.date,
        // }
      }),
    });

    const body = await response.json();
    console.log(body);

    if (!response.ok) {
      return message(form, "Something went wrong");
    }

    console.log(form.data);

    console.log(message);
    return message(form, "Message send successfull");
  },
};
