import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Paragraph } from "./paragraph";
import { ListUnordered } from "./list-unordered";
import { ListOrdered } from "./list-ordered";
import { Heading4 } from "./heading4";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const sharedComponents = {
  Image,
  p: Paragraph,
  h4: Heading4,
  ul: ListUnordered,
  ol: ListOrdered,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function MDXContent({ code, components, ...props }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
}
