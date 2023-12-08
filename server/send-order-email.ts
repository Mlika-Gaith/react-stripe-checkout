// @see https://docs.aircode.io/guide/functions/
import aircode from "aircode";
import { Resend } from "resend";

type Params = {
  email: string;
};
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (params: Params) {
  console.log("Received params:", params);
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: params.email,
      subject: "Your Order From Company",
      html: '<div><p>Hi,There</p><p>We truly appreciate your business, and we look forward to serving you again in the future.</p></div><div>Thank you for your order! Click <a href="">here</a> to acces it.</div>',
    });
  } catch (error) {
    console.log(error);
  }
  return {
    message: "Email Sent.",
  };
}
