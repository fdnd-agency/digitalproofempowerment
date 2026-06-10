import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

import { clocking } from "$lib/formValidation";

export const load = async () => {
  const form = await superValidate(zod(clocking));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(clocking));

    if (!form.valid) {
      return { form };
    }

    const endPoint = "https://fdnd-agency.directus.app/items/digital_proof_empowerment_clocking";
    const now = new Date().toISOString();

    if (form.data.action === "in") {
      const response = await fetch(endPoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Submission_id: form.data.submission_id,
          Clock_in: now,
        }),
      });

      const body = await response.json();
      console.log(body);

      if (!response.ok) {
        return message(form, "Something wend wrong, try again");
      }

      return message(form, "Clocked in");
    } else {
      const url =
        endPoint +
        "?filter[Submission_id][_eq]=" +
        form.data.submission_id +
        "&filter[Clock_out][_null]=true" +
        "&sort=-Clock_in" +
        "&limit=1";

      console.log("url:", url);

      const getResponse = await fetch(url);
      console.log("get status:", getResponse.status);

      const getData = await getResponse.json();
      const record = getData.data?.[0];

      if (!record) {
        return message(form, "Code not found");
      }

      const response = await fetch(endPoint + "/" + record.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Clock_out: now,
        }),
      });

      const body = await response.json();
      console.log(body);

      if (!response.ok) {
        return message(form, "Something went wrong");
      }

      return message(form, "Clocked out");
    }
  },
};
