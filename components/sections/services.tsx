"use client";
import Container from "../styled-comps/container";
import { services } from "#site/content";
import { Paragraph } from "../styled-comps/paragraph";
import { Heading } from "../styled-comps/heading";

export default function Services() {
  return (
    <>
      <section id="services" className="scroll-mt-20">
        <Container width="marginxy">
          <Heading size="md" className="text-center mb-5">{services.title}</Heading>
          <div className="mx-auto">
            <div className="text-xl md:columns-2 gap-8 text-justify mb-10">
              {services.description.map((item, index) => (
                <Paragraph key={index}>{item}</Paragraph>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
