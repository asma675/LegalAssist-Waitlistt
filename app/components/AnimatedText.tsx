"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export type AnimatedTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: "type" | "reveal" | "pop";
  className?: string;

  /** delay before animation (ms) */
  delayMs?: number;

  /** alias for delayMs (backwards compatible) */
  delay?: number;

  /** typing speed (ms per char) */
  speedMs?: number;
};

export default function AnimatedText({
  text,
  as = "div",
  variant = "reveal",
  className,
  delayMs,
  delay,
  speedMs = 18,
}: AnimatedTextProps) {
  const Tag = as;

  const resolvedDelay = delayMs ?? delay ?? 0;

  const [displayed, setDisplayed] = useState(
    variant === "type" ? "" : text
  );
  const [visible, setVisible] = useState(variant !== "reveal");

  /* ───────────────────────── Typing Effect ───────────────────────── */
  useEffect(() => {
    if (variant !== "type") return;

    let timeout: NodeJS.Timeout;
    let index = 0;

    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speedMs);
    }, resolvedDelay);

    return () => clearTimeout(timeout);
  }, [text, variant, speedMs, resolvedDelay]);

  /* ───────────────────────── Reveal / Pop Effect ───────────────────────── */
  useEffect(() => {
    if (variant === "type") return;

    const t = setTimeout(() => setVisible(true), resolvedDelay);
    return () => clearTimeout(t);
  }, [variant, resolvedDelay]);

  return (
    <Tag
      className={clsx(
        "transition-all duration-700 ease-out",
        className,

        variant === "reveal" && !visible && "opacity-0 translate-y-4",
        variant === "reveal" && visible && "opacity-100 translate-y-0",

        variant === "pop" && !visible && "opacity-0 scale-95",
        variant === "pop" && visible && "opacity-100 scale-100"
      )}
    >
      {variant === "type" ? displayed : text}
    </Tag>
  );
}
