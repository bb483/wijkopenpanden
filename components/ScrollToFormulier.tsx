"use client";

import type { ReactNode } from "react";
import Link from "next/link";

export function scrollToFormulier() {
  const el = document.getElementById("formulier");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  } else {
    sessionStorage.setItem("scrollToFormulier", "1");
    window.location.href = "/";
  }
}

export default function ScrollToFormulier({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/#formulier"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToFormulier();
      }}
    >
      {children}
    </Link>
  );
}
