import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxOptions {
  offset?: number;
}

export const useParallax = (options: UseParallaxOptions = {}): {
  ref: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
} => {
  const { offset = 50 } = options;
  const ref = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
};
