import { message, superValidate, fail } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { proofSchemaAnon, proofSchemaIdentified } from "$lib/formValidation";

export const load = async () => {
  const identifiedForm = await superValidate(zod(proofSchemaIdentified));
  const anonForm = await superValidate(zod(proofSchemaAnon));
  return { anonForm, identifiedForm };
};

export const actions = {
  anon: async ({ request }) => {
    const form = await superValidate(request, zod(proofSchemaAnon));

    if (!form.valid) return fail(400, { form });

    const endpoint =
      "https://69b07208c63dd197febc4bbf.mockapi.io/questions/questions";

    const formData = new FormData();
    form.data.photos?.forEach((f) => formData.append("photos", f));
    form.data.audio?.forEach((f) => formData.append("audio", f));
    form.data.location?.forEach((f) => formData.append("location", f));
    form.data.chat?.forEach((f) => formData.append("chat", f));
    form.data.note?.forEach((f) => formData.append("note", f));

    await fetch(endpoint, { method: "POST", body: formData });

    console.log(form.data);
    return message(form, "Form Submitted Successfully");
  },

  identified: async ({ request }) => {
    const form = await superValidate(request, zod(proofSchemaIdentified));

    if (!form.valid) return fail(400, { form });

    const endpoint =
      "https://69b07208c63dd197febc4bbf.mockapi.io/questions/questions";

    const formData = new FormData();
    formData.append("email", form.data.email ?? "");
    form.data.photos?.forEach((f) => formData.append("photos", f));
    form.data.audio?.forEach((f) => formData.append("audio", f));
    form.data.location?.forEach((f) => formData.append("location", f));
    form.data.chat?.forEach((f) => formData.append("chat", f));
    form.data.note?.forEach((f) => formData.append("note", f));

    await fetch(endpoint, { method: "POST", body: formData });

    console.log(form.data);
    return message(form, "Form Submitted Successfully");
  },
};
