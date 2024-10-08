import clsx from "clsx";

export function Heading4({
  children,
  className,
  ...restProps
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={clsx(
        "tracking-wider font-semibold font-sans text-xl md:text-2xl mt-8",
        className
      )}
      {...restProps}
    >
      {children}
    </h4>
  );
}
