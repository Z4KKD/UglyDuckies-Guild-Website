import React, { useEffect, useRef } from 'react';

const FlyingDucksBackground = ({ count = 15 }) => {
  const duckRefs = useRef([]);
  const positions = useRef([]);

  useEffect(() => {
    // Start ducks offscreen left with random vertical positions and speeds
    positions.current = Array(count).fill(0).map(() => ({
      left: -50 - Math.random() * 100, // offscreen left
      top: Math.random() * window.innerHeight,
      speed: 0.5 + Math.random() * 1.2,
    }));

    const animate = () => {
      positions.current.forEach((pos, i) => {
        pos.left += pos.speed; // move right

        // Reset to left side after going off right edge
        if (pos.left > window.innerWidth + 50) {
          pos.left = -50;
          pos.top = Math.random() * window.innerHeight;
        }

        const duck = duckRefs.current[i];
        if (duck) {
          duck.style.left = `${pos.left}px`;
          duck.style.top = `${pos.top}px`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [count]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (duckRefs.current[i] = el)}
          style={{
            position: 'absolute',
            left: '0px', // initial left, overridden by animation
            top: '0px',  // initial top, overridden by animation
            fontSize: `${24 + Math.random() * 20}px`,
            transform: 'rotate(13deg) scaleX(-1)', // no flip, ducks face right
            opacity: 0.8,
          }}
        >
          🦆
        </span>
      ))}
    </div>
  );
};

export default FlyingDucksBackground;
