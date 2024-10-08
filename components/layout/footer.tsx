import React from "react";
import { options } from "#site/content";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary p-8 text-white flex justify-between">
      {options.footnote}
      <div>
        {options.copyright}{' '}
        {new Date().getFullYear()} |
        <a
          className="ml-1 footer-email hover:text-mkorange transition duration-150 ease-in-out"
          href={`mailto:${options.author.email}`}
        >
          <Button variant="link" className="text-white ml-0 pl-0 hover:no-underline hover:text-secondary">
            {" "}
            {options.author.email}
          </Button>
        </a>
      </div>
    </footer>
  );
}
