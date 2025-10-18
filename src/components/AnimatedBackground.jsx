import React, { useEffect, useRef } from 'react';

// === Color helpers ===
function hexToHSL(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToCss(h, s, l, a = 1) {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const cloudsRef = useRef([]);
  const animationRef = useRef(null);

  const baseColor = '#1e2d31';
  const baseHSL = hexToHSL(baseColor);
  const darkerBackground = hslToCss(baseHSL.h, baseHSL.s, baseHSL.l - 8);

  // More prominent clouds
  const createClouds = (count = 12) => {
    const clouds = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 200 + 150; 
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight * 0.8;
      const speed = 0.18 + Math.random() * 0.25;
      const opacity = 0.25 + Math.random() * 0.25;
      const lightnessOffset = 35 + Math.random() * 20; 
      const blur = 50 + Math.random() * 15;
      clouds.push({ size, left, top, speed, opacity, lightnessOffset, blur });
    }
    return clouds;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.backgroundColor = darkerBackground;

    const clouds = createClouds(14);
    cloudsRef.current = clouds.map(cloud => {
      const el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.borderRadius = '50%';
      el.style.filter = `blur(${cloud.blur}px)`;
      el.style.width = `${cloud.size}px`;
      el.style.height = `${cloud.size * 0.6}px`;
      el.style.backgroundColor = hslToCss(
        baseHSL.h,
        baseHSL.s * 0.8,
        Math.min(baseHSL.l + cloud.lightnessOffset, 95),
        cloud.opacity
      );
      el.style.left = `${cloud.left}px`;
      el.style.top = `${cloud.top}px`;
      el.style.transition = 'opacity 3s ease-in-out';
      container.appendChild(el);
      return { ...cloud, el };
    });

    const animate = () => {
      cloudsRef.current.forEach(cloud => {
        cloud.left += cloud.speed;
        if (cloud.left > window.innerWidth + 350) {
          cloud.left = -350;
          cloud.top = Math.random() * window.innerHeight * 0.8;
        }
        cloud.el.style.left = `${cloud.left}px`;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      cloudsRef.current.forEach(cloud => {
        if (cloud.el && cloud.el.parentNode) {
          cloud.el.parentNode.removeChild(cloud.el);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
