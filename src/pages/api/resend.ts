import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ params, request }) => {
  const data = await request.formData();
  const email = data.get("email");

  if (!email) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 400,
    });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "jakobevangelista@plusev.dev",
    to: `${email}`,
    subject: "Thank you for Signing Up!",
    html: "<p>Thank you for registering for my email list! <strong>I will get back to you shortly</strong>!</p>",
  });

  return new Response(
    JSON.stringify({
      message: "Successfully registered, check your email for confirmation!",
    }),
    { status: 200 }
  );
};
