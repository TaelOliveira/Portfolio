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

declare module "@/components/LiquidEther.jsx" {
  const LiquidEther: (props: {
    mouseForce?: number;
    cursorSize?: number;
    isViscous?: boolean;
    viscous?: number;
    iterationsViscous?: number;
    iterationsPoisson?: number;
    dt?: number;
    BFECC?: boolean;
    resolution?: number;
    isBounce?: boolean;
    colors?: string[];
    style?: React.CSSProperties;
    className?: string;
    autoDemo?: boolean;
    autoSpeed?: number;
    autoIntensity?: number;
    takeoverDuration?: number;
    autoResumeDelay?: number;
    autoRampDuration?: number;
    color0?: string;
    color1?: string;
    color2?: string;
  }) => JSX.Element;
  export default LiquidEther;
}
