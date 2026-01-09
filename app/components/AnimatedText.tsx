"use client";

import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

export type AnimatedTextVariant = "type" | "reveal";

export type AnimatedTextProps = {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;

  variant?: AnimatedTextVariant;

  
  delayMs?: number;
  delay?: number;


  typeSpeedMs?: number;
  speedMs?: number;

  revealDurationMs?: number;
};

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

  // For typing effect
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
  }, [variant, chars, startDelay, typingSpeed, text]);

  if (variant === "type") {
    return (
      <Tag className={clsx(className)}>
        {shown}
        <span className="ml-0.5 inline-block w-[0.6ch] animate-pulse opacity-70">|</span>
      </Tag>
    );
  }

  // reveal
  return (
    <Tag
      className={clsx(
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
