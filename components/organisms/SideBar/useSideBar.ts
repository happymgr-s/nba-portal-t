'use client';
import { useEffect, useState } from 'react';

export const useSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClickLink = () => {
    if (!isMobile) return;
    setSidebarOpen(false);
  };

  return { sidebarOpen, isMobile, setSidebarOpen, handleClickLink };
};
