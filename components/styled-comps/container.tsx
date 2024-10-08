"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  width?: "marginxy" | "marginx" | "fluidmy" | "fluid";
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  as: Comp = "section",
  width = "fluid",
  className,
  children,
  ...restProps
}: ContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Comp
      className={clsx(
        "scroll-mt-10",
        width === "marginxy" &&
          "sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto my-40",
        width === "marginx" &&
          "sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto",
        width === "fluidmy" && "w-full my-28",
        width === "fluid" && "w-full",
        className
      )}
      {...restProps}
      ref={ref}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </Comp>
  );
}
