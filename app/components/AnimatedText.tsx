"use client";

import React, { useEffect, useMemo, useState } from "react";

export type AnimatedTextVariant = "type" | "reveal";

export type AnimatedTextProps = {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;

  /** "type" = typing effect, "reveal" = fade/slide in */
  variant?: AnimatedTextVariant;

  /** Delay before animation starts (preferred: delayMs, alias: delay) */
  delayMs?: number;
  delay?: number;

  /** Typing speed in ms per character (preferred: typeSpeedMs, alias: speedMs) */
  typeSpeedMs?: number;
  speedMs?: number;

  /** Reveal duration (ms) for the "reveal" animation */
  revealDurationMs?: number;
};

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function AnimatedText({
  as: Tag = "div",
  text,
  className,
  variant = "reveal",
  delayMs,
  delay,
  typeSpeedMs,
  speedMs,
  revealDurationMs = 500,
}: AnimatedTextProps) {
  const startDelay = delayMs ?? delay ?? 0;
  const typingSpeed = typeSpeedMs ?? speedMs ?? 18;

  const [shown, setShown] = useState(variant === "type" ? "" : text);
  const [isVisible, setIsVisible] = useState(variant === "reveal" ? false : true);

  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    let t1: any;
    let t2: any;

    if (variant === "type") {
      setShown("");
      t1 = setTimeout(() => {
        let i = 0;
        t2 = setInterval(() => {
          i += 1;
          setShown(chars.slice(0, i).join(""));
          if (i >= chars.length) clearInterval(t2);
        }, typingSpeed);
      }, startDelay);
    }

    if (variant === "reveal") {
      setIsVisible(false);
      t1 = setTimeout(() => setIsVisible(true), startDelay);
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearInterval(t2);
    };
  }, [variant, chars, startDelay, typingSpeed]);

  if (variant === "type") {
    return (
      <Tag className={cn(className)}>
        {shown}
        <span className="ml-0.5 inline-block w-[0.6ch] animate-pulse opacity-70">
          |
        </span>
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(
        className,
        "transition-all will-change-transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      )}
      style={{ transitionDuration: `${revealDurationMs}ms` }}
    >
      {text}
    </Tag>
  );
}
