/// <reference types="vite/client" />

declare module '@/components/ScrollReveal' {
  import type { ReactNode } from 'react';
  const ScrollReveal: (props: {
    children: ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement | null>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
  }) => JSX.Element;
  export default ScrollReveal;
}
