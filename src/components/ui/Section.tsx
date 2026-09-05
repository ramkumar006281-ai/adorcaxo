import React from "react";
import styles from "./Section.module.css";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "dark" | "warm" | "transitional" | "plain" | "floating";
  className?: string;
  container?: "default" | "narrow" | "wide" | "none";
}

export default function Section({
  children,
  variant = "warm",
  className = "",
  container = "default",
  ...props
}: SectionProps) {
  const variantClass = styles[variant] || styles.warm;
  const containerClass = container !== "none" ? styles[`container_${container}`] : "";
  return (
    <section className={`${styles.section} ${variantClass} ${className}`.trim()} {...props}>
      {container !== "none" ? (
        <div className={`${styles.container} ${containerClass}`.trim()}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
