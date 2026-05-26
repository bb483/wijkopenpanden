import { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export default function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`max-w-prose text-base leading-relaxed text-ink font-sans ${className}`}
    >
      {children}
    </div>
  );
}
