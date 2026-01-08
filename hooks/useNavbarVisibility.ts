'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function useNavbarHook() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const navLinks = [
    { href: '/accommodations', label: 'Acomodações' },
    { href: '/services', label: 'Serviços' },
    { href: '/about', label: 'Quem somos' },
  ];

  return { isVisible, isMobileMenu, setIsMobileMenu, pathname, navLinks };
}
