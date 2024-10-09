import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Container from "../styled-comps/container";
import { work } from "#site/content";
import { Heading } from "../styled-comps/heading";

export default function Work() {
  const filteredWork = work.workItems.filter((item) => item.draft === false);
  const oderedWork = filteredWork.sort((a, b) => a.id - b.id);

  return (
    <>
      <section id="work" className="scroll-mt-20">
        <Container width="marginxy">
          <Heading size="md" className="text-center mb-5">{work.title}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center gap-4">
            {oderedWork.map((item) => {
              return (
                <DirectionAwareHover key={item.id} imageUrl={item.src}>
                  <Card className="bg-transparent border-0 mx-auto shadow-none text-neutral-200">
                      <Heading size="sm"
                         className="font-bold uppercase">{item.title}</Heading>
                      <p>{item.category}</p>
                      <Link
                        href={item.url}
                        title="View website"
                        target="_blank"
                      >
                        <Button variant="link" className="text-neutral-200 ml-0 pl-0">
                          {" "}
                          View website <ArrowRight className="ml-2" />{" "}
                        </Button>
                      </Link>
                  </Card>
                </DirectionAwareHover>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
