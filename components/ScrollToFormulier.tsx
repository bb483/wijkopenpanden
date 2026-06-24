"use client";

import type { ReactNode } from "react";

export default function ScrollToFormulier({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("formulier");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.location.href = "/#formulier";
    }
  }

  return (
    <a href="/#formulier" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
