import { useEffect, useRef, useState } from 'react';

const SCROLL_THRESHOLD = 150;

export function useHeaderScroll() {
  const lastScrollY = useRef(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return window.scrollY <= SCROLL_THRESHOLD;
  });

  useEffect(() => {
    if (!isHydrated) setIsHydrated(true);
  }, [isHydrated]);

  function headerOnScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= SCROLL_THRESHOLD) {
      setShow(true);
      lastScrollY.current = currentScrollY;
      return;
    }

    if (currentScrollY > lastScrollY.current) {
      setShow(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShow(true);
    }

    lastScrollY.current = currentScrollY;
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    window.addEventListener('scroll', headerOnScroll, { passive: true });

    return () => window.removeEventListener('scroll', headerOnScroll);
  }, []);

  return !isHydrated || show;
}
