"use client";

import * as React from "react";

type AsTag = "h1" | "h2" | "h3" | "p" | "span";

export type AnimatedTextProps = {
  text: string;
  as?: AsTag;
  className?: string;
  /**
   * "type" = typewriter effect (starts when the element scrolls into view)
   * "reveal" = fade/slide-up (starts when the element scrolls into view)
   */
  variant?: "type" | "reveal";
  /** Delay before animating (ms) */
  delayMs?: number;
  /** Typing speed (ms per character) */
  typeSpeedMs?: number;
  /** Alias for typeSpeedMs (backwards compatibility) */
  speedMs?: number;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.35, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

export default function AnimatedText({
  text,
  as = "h2",
  className = "",
  variant = "reveal",
  delayMs = 0,
  typeSpeedMs = 18,
  speedMs,
}: AnimatedTextProps) {
  const resolvedTypeSpeedMs = speedMs ?? typeSpeedMs;
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();
  const [typed, setTyped] = React.useState(variant === "type" ? "" : text);
  const [done, setDone] = React.useState(variant !== "type");

  React.useEffect(() => {
    if (!inView) return;
    if (variant !== "type") return;
    if (reduced) {
      setTyped(text);
      setDone(true);
      return;
    }

    let mounted = true;
    const start = window.setTimeout(() => {
      let i = 0;
      const tick = () => {
        if (!mounted) return;
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          setDone(true);
          return;
        }
        window.setTimeout(tick, resolvedTypeSpeedMs);
      };
      tick();
    }, delayMs);

    return () => {
      mounted = false;
      window.clearTimeout(start);
    };
  }, [delayMs, inView, reduced, text, resolvedTypeSpeedMs, variant]);

  const Tag = as as any;

  if (variant === "type") {
    return (
      <Tag ref={ref} className={className}>
        <span className="relative">
          {typed}
          {!done && (
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block h-[1em] w-[0.08em] translate-y-[0.12em] animate-[blink_1s_steps(1,end)_infinite] rounded bg-current opacity-70"
            />
          )}
        </span>

        {/* local keyframes (safe in Next/React) */}
        <style jsx>{`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </Tag>
    );
  }

  // reveal
  const visible = inView || reduced;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(12px) scale(0.99)",
        transition:
          "opacity 650ms cubic-bezier(.2,.8,.2,1), transform 650ms cubic-bezier(.2,.8,.2,1)",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {text}
    </Tag>
  );
}
