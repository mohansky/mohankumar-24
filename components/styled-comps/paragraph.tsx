import clsx from "clsx";

export function Paragraph({
  children,
  className,
  ...restProps
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={clsx(
        "text-justify leading-7 [&:not(:first-child)]:mt-3",
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}
