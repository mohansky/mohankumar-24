export function ListUnordered({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc text-justify [&>li]:mt-2">{children}</ul>;
}
