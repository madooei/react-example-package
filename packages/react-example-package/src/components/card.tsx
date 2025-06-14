import React from "react";
import { type CardProps } from "@/types";
import { checkPeerDependencies } from "@/utils/peer-deps-check";

export const Card: React.FC<CardProps> = ({
  children,
  title,
  className = "",
}) => {
  // Check peer dependencies on component usage
  checkPeerDependencies();
  const baseClasses =
    "bg-white shadow-md rounded-lg p-6 border border-gray-200";
  const combinedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClassName}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};
