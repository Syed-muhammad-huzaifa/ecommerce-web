"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/app/lib/cn";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function MotionSection({
  children,
  className,
  as = "section",
  id,
}: MotionSectionProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      id={id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
