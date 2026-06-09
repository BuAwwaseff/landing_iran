import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

