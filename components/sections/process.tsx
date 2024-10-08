"use client";
import Container from "../styled-comps/container";
import { Icon } from "@iconify/react";
import { process, options } from "#site/content";
import { WobbleCard } from "../ui/wobble-card";
import { Heading } from "../styled-comps/heading";

export default function Process() {
  const sorted = process.sort((a, b) => a.id - b.id);

  return (
    <>
      <section id="process" className="scroll-mt-20">
        <Container width="marginxy">
          <Heading size="md" className="text-center mb-5">{options.processtitle}</Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
            {sorted.map((item) => {
              return (
                <WobbleCard
                  key={item.id}
                  containerClassName="h-full bg-primary min-h-[500px] lg:min-h-[300px]"
                  className=""
                >
                  <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
                    <span>{item.id}. </span>
                    {item.name}
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    {item.desc}
                  </p>
                  <Icon
                    icon={item.icon}
                    width="150"
                    className="text-neutral-200 absolute -right-10 md:-right-[40%] lg:-right-[1%] -bottom-10 object-contain rounded-2xl"
                  />
                </WobbleCard>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
