import Container from "../styled-comps/container"; 
import { ContactForm } from "../contact-form";
import { onFormAction } from "@/app/api/formAction/route"; 
import { Heading } from "../styled-comps/heading";

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-20">
        <Container width="marginxy">
          <Heading size="md" className="text-center mb-5">Get in touch</Heading> 
          <div className="row">
            <div className="max-w-2xl mx-auto">
              <ContactForm onFormAction={onFormAction} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
