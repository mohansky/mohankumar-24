"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export default function Menu() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // eslint-disable-next-line prefer-const
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "fixed py-3 top-0 left-0 right-0 border-b-4 border-secondary bg-primary backdrop-blur z-50"
          )}
        >
          <div className="sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex text-secondary text-2xl"
                title="Argya Legal"
              >
                m<span className="my-auto font-bold">K</span>
              </Link>
              <HamburgerMenu />
              <div className="hidden lg:flex">
                <Navbar />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
