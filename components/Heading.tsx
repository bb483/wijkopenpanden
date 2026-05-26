import { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
  2: "text-3xl md:text-4xl font-bold",
  3: "text-xl md:text-2xl font-semibold",
};

export default function Heading({ children, level = 1, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  return (
    <Tag className={`font-serif ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}
