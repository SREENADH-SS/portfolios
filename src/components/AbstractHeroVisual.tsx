import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const AbstractHeroVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1) from viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background radial glow hint */}
      <div 
        className="absolute inset-0 bg-radial from-[#C97858]/10 via-transparent to-transparent rounded-full filter blur-2xl transform transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
        }}
      />

      {/* Main interactive SVG Container */}
      <motion.div
        className="relative w-full h-full"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Technical Grid Crosshairs */}
          <g stroke="#DCD9D1" strokeWidth="1" strokeDasharray="3 4" opacity="0.8">
            <line x1="250" y1="20" x2="250" y2="480" />
            <line x1="20" y1="250" x2="480" y2="250" />
            <circle cx="250" cy="250" r="230" />
          </g>

          {/* Coordinate tick marks */}
          <circle cx="250" cy="20" r="3" fill="#20211F" />
          <circle cx="250" cy="480" r="3" fill="#20211F" />
          <circle cx="20" cy="250" r="3" fill="#20211F" />
          <circle cx="480" cy="250" r="3" fill="#20211F" />

          {/* Outer Orbital Ring 1 - Counter Clockwise */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          >
            <ellipse
              cx="250"
              cy="250"
              rx="195"
              ry="110"
              stroke="#DCD9D1"
              strokeWidth="1.2"
              transform="rotate(-25 250 250)"
            />
            {/* Satellite node */}
            <circle
              cx="445"
              cy="250"
              r="4.5"
              fill="#C97858"
              transform="rotate(-25 250 250)"
            />
          </motion.g>

          {/* Outer Orbital Ring 2 - Clockwise */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          >
            <ellipse
              cx="250"
              cy="250"
              rx="170"
              ry="130"
              stroke="#20211F"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              transform="rotate(35 250 250)"
              opacity="0.6"
            />
            {/* Geometric Satellite */}
            <rect
              x="415"
              y="246"
              width="8"
              height="8"
              fill="#20211F"
              transform="rotate(35 250 250)"
            />
          </motion.g>

          {/* Inner Orbital Disc */}
          <circle
            cx="250"
            cy="250"
            r="120"
            stroke="#DCD9D1"
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Sculptural Core Polygon Shape */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          >
            {/* Hexagonal wireframe structure */}
            <polygon
              points="250,170 319,210 319,290 250,330 181,290 181,210"
              stroke="#20211F"
              strokeWidth="1.75"
              fill="rgba(234, 231, 224, 0.45)"
            />
            {/* Internal facet diagonals */}
            <line x1="250" y1="170" x2="250" y2="330" stroke="#DCD9D1" strokeWidth="1" />
            <line x1="319" y1="210" x2="181" y2="290" stroke="#DCD9D1" strokeWidth="1" />
            <line x1="319" y1="290" x2="181" y2="210" stroke="#DCD9D1" strokeWidth="1" />

            {/* Inner terracotta core anchor */}
            <circle cx="250" cy="250" r="14" fill="#C97858" />
            <circle cx="250" cy="250" r="6" fill="#F8F7F3" />
          </motion.g>

          {/* Dynamic Technical Overlay Badges */}
          <g className="font-mono text-[9px] fill-[#77766F] tracking-widest">
            <text x="260" y="55">COORD: 13.0827°N / 80.2707°E</text>
            <text x="50" y="440">ARCH: JAVA · SPRING · REACT</text>
            <text x="320" y="440">SYSTEM: ONLINE · STABLE</text>
          </g>
        </svg>

        {/* Small floating architectural pill badges */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-0 px-3 py-1 rounded-full bg-[#EAE7E0]/90 border border-[#DCD9D1] text-[10px] font-mono font-medium text-[#20211F] shadow-sm tracking-wider"
        >
          FULL STACK ARCHITECTURE
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-12 right-2 px-3 py-1 rounded-full bg-[#20211F] text-[#F8F7F3] text-[10px] font-mono tracking-widest shadow-sm flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C97858]"></span>
          SPRING BOOT · REST
        </motion.div>
      </motion.div>
    </div>
  );
};
