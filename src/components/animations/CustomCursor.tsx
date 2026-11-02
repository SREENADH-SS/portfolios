import React, { useEffect, useState } from 'react';
import { motion, type TargetAndTransition } from 'motion/react';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const { cursorVariant, cursorText } = usePortfolioStore();

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const springTransition = {
    type: 'spring' as const,
    damping: 26,
    stiffness: 320,
    mass: 0.1,
  };

  const getVariantStyles = (): TargetAndTransition => {
    switch (cursorVariant) {
      case 'hover':
        return {
          width: 44,
          height: 44,
          x: mousePosition.x - 22,
          y: mousePosition.y - 22,
          backgroundColor: 'transparent',
          border: '1.5px solid #C5A059',
          transition: springTransition,
        };
      case 'project':
        return {
          width: 84,
          height: 84,
          x: mousePosition.x - 42,
          y: mousePosition.y - 42,
          backgroundColor: '#18191B',
          border: '1.5px solid #C5A059',
          transition: springTransition,
        };
      case 'magnetic':
        return {
          width: 36,
          height: 36,
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          backgroundColor: 'transparent',
          border: '1px solid #C5A059',
          transition: springTransition,
        };
      default:
        return {
          width: 8,
          height: 8,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          backgroundColor: '#C5A059',
          border: 'none',
          transition: springTransition,
        };
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-center overflow-hidden shadow-sm"
      animate={getVariantStyles()}
    >
      {cursorVariant === 'project' && (
        <span className="font-mono text-[9px] text-[#FAF7F2] tracking-widest font-semibold uppercase px-1">
          {cursorText || 'VIEW'}
        </span>
      )}
    </motion.div>
  );
};
