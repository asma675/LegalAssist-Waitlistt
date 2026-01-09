'use client';

import { useEffect, useState } from 'react';

export type AnimatedTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: 'type' | 'reveal';
  typeSpeedMs?: number;
  delayMs?: number;
};

export default function AnimatedText({
  text,
  as: Tag = 'div',
  className = '',
  variant = 'reveal',
  typeSpeedMs = 20,
  delayMs = 0,
}: AnimatedTextProps) {
  const [displayed, setDisplayed] = useState(
    variant === 'type' ? '' : text
  );
  const [visible, setVisible] = useState(variant !== 'reveal');

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (variant === 'type') {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayed(text.slice(0, i + 1));
          i++;
          if (i >= text.length) clearInterval(interval);
        }, typeSpeedMs);
      } else {
        setVisible(true);
      }
    }, delayMs);

    return () => clearTimeout(delayTimer);
  }, [text, variant, typeSpeedMs, delayMs]);

  return (
    <Tag
      className={`${className} ${
        variant === 'reveal'
          ? `transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`
          : ''
      }`}
    >
      {variant === 'type' ? displayed : text}
    </Tag>
  );
}
