import type { ReactNode } from "react";

// Export your library's types
export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

export interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}
