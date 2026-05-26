import { ReactNode } from "react";
import Container from "./Container";

type SectionVariant = "bone" | "white" | "ink";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  hero?: boolean;
  className?: string;
  contained?: boolean;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  bone: "bg-bone text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-bone",
};

export default function Section({
  children,
  variant = "bone",
  hero = false,
  className = "",
  contained = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantClasses[variant]} ${hero ? "py-32" : "py-24"} ${className}`}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
