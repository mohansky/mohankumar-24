export function ListOrdered({ children }: { children: React.ReactNode }) {
    return <ol className="my-6 ml-6 list-decimal text-justify [&>li]:mt-2">{children}</ol>;
  }
  