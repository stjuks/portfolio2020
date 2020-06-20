import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = () => {
    setScroll(window.scrollY);
  };

  return scroll;
};
