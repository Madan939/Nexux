"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
interface SmoothScrollProviderProps {
  children: ReactNode;
}
export default function LenisScrollBehavior({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(2, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
    
    
  return <>{children}</>;
}
