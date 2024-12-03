import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 md:px-0 max-w-none md:max-w-[60rem] xl:max-w-[80rem]", className)}>{children}</div>
  );
}
