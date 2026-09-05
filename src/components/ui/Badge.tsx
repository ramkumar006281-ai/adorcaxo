import React from "react";
import styles from "./Badge.module.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "signal" | "intelligence" | "neutral" | "lime" | "blue";
  className?: string;
}

export default function Badge({
  children,
  variant = "neutral",
  className = "",
  ...props
}: BadgeProps) {
  const variantClass = styles[variant] || styles.neutral;
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
