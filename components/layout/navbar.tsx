"use client";
import * as React from "react";
import Link from "next/link";
// import { cn } from "@/lib/utils";
import { options } from "#site/content";
import {
  NavigationMenu, 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, 
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="mx-3 uppercase">
        {options.links.map((item, index: React.Key) => (
          <NavigationMenuItem key={index}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} title={item.text}>
                {item.text}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <ThemeToggle />
    </NavigationMenu>
  );
}