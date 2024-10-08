import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { options } from "#site/content";
import {
  NavigationMenu, 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, 
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HamburgerMenu() {
  return (
    <>
      <div className="lg:hidden my-auto">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8 text-gray-800 my-auto" />
            <span className="sr-only">Close</span>
          </SheetTrigger>
          <SheetContent className="w-full">
            <ThemeToggle />
            <NavigationMenu className="mx-auto my-20">
              <NavigationMenuList className="flex-col w-full">
                {options.links.map((item, index) => (
                  <NavigationMenuItem key={index} className="mx-auto my-2">
                    <Link href={item.link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()} title={item.text}
                      >
                        <SheetTrigger className="uppercase">
                          {item.text}
                        </SheetTrigger>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
