import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Entrance reveal — pure CSS, no JS dependency.
 * Always settles to fully visible (works without JS and respects
 * prefers-reduced-motion via the .reveal rule in globals.css).
 * (emil: motion is a finish, never a gate on content.)
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
