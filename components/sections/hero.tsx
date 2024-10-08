"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AuroraBackground } from "../ui/aurora-background";
import { options } from "@/.velite";

export default function Hero() {
  return (
    <AuroraBackground className="bg-gray-600 relative overflow-hidden">
      <Noise />
      <motion.div
        initial={{ opacity: 0.0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-neutral-200 text-center">
          {options.heroslider[0].title}
        </div>
        <Link href={options.heroslider[0].link}>
          <Icon
            icon={options.heroslider[0].btnText}
            width="100"
            className=" animate-[bounce_3s_ease-in-out_infinite] mt-14 mx-auto dark:text-neutral-200"
          />
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
