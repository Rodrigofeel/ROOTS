'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useParallaxAccommodation() {
  const container = useRef<HTMLDivElement>(null);
  const bed1 = useRef<HTMLDivElement>(null);
  const bed2 = useRef<HTMLDivElement>(null);
  const bed3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerEl = container.current;
    const bed1El = bed1.current;
    const bed2El = bed2.current;
    const bed3El = bed3.current;

    if (!containerEl || !bed1El || !bed2El || !bed3El) return;

    let ctx: gsap.Context | undefined;

    const init = () => {
      gsap.set([bed1El, bed2El, bed3El], {
        force3D: true,
        willChange: 'transform',
      });

      const y1 = bed1El.getBoundingClientRect().top;
      const y2 = bed2El.getBoundingClientRect().top;
      const y3 = bed3El.getBoundingClientRect().top;

      const offset2 = y1 - y2;
      const offset3 = y1 - y3;

      gsap.set(bed2El, { y: offset2 });
      gsap.set(bed3El, { y: offset3 });
      gsap.set(bed1El, { y: 0 });

      ctx = gsap.context(() => {
        const totalMove = window.innerHeight * 1.7;

        const elements = [
          { el: bed1El, startY: 0 },
          { el: bed2El, startY: offset2 },
          { el: bed3El, startY: offset3 },
        ];

        elements.forEach(({ el, startY }) => {
          gsap.to(el, {
            y: startY + totalMove,
            ease: 'none',
            scrollTrigger: {
              trigger: containerEl,
              start: '+=400 center',
              end: 'bottom +=650',
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });
        });
      }, container);
    };

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(init);
    });

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach(st => st.kill());
      ctx?.revert();

      const elements = [bed1El, bed2El, bed3El].filter(
        (el): el is HTMLDivElement => el !== null
      );

      if (elements.length > 0) {
        gsap.set(elements, { clearProps: 'all' });
      }
    };
  }, []);

  return { container, bed1, bed2, bed3 };
}
