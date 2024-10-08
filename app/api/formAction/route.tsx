// import React from "react";
import { EmailTemplate } from "@/components/email-template";
import { formSchema } from "@/lib/formValidation";
import { z } from "zod"; 
// import { EmailTemplate } from "@/components/email-template"; 
import { Resend } from "resend";
// import { getErrorMap } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const onFormAction = async (
  prevState: {
    message: string;
    user?: z.infer<typeof formSchema>;
    issues?: string[];
  },
  formData: FormData
) => {
  "use server";
  const data = Object.fromEntries(formData);
  const parsed = formSchema.safeParse(data);
  // const senderName = formData.get("senderName");
  // const email = formData.get("email");
  // const message = formData.get("message");

  if (parsed.success) { 
    // try {
    //   await resend.emails.send({
    //     from: "Acme <onboarding@resend.dev>",
    //     to: "mohansky@gmail.com",
    //     subject: `Enquiry from ${senderName}`,
    //     replyTo: email as string,
    //     react: React.createElement(EmailTemplate, {
    //       senderName: senderName as string,
    //       email: email as string,
    //       message: message as string,
    //     }),
    //   });
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "mohansky@gmail.com",
      subject: `Enquiry from ${parsed.data.senderName}`,
      replyTo: parsed.data.email as string,
      react: EmailTemplate({
        senderName: parsed.data.senderName as string,
        email: parsed.data.email as string,
        message: parsed.data.message as string,
      }),
    });
      return {
      message: "Form submitted thank you for your interest.",
      email: parsed.data,
    };
    // } catch (error: unknown) {
    //   console.log(error);
    //   return { error: getErrorMap() };
    // }
  } 
  else {
    return {
      message: "Invalid data",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
};


// import { EmailTemplate } from "@/components/email-template"; 
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: EmailTemplate({ senderName: 'Mohan', email: 'mohansky@gmail.com', message: 'Hello World' }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
