import { useEffect, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>{}[]=/\\|~^';
const ACCENT_GREEN = '#00ff66';

const isTouchOnly = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
};

const MatrixCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const smoothRef = useRef({ x: -100, y: -100 }); // Lerped position for smooth movement
  const particlesRef = useRef([]);
  const isHoveringRef = useRef(false);
  const animFrameRef = useRef(null);
  const lastSpawnRef = useRef(0);

  const spawnParticle = useCallback((x, y, isBurst = false) => {
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];

    if (isBurst) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      return {
        x,
        y,
        char,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        alpha: 1,
        decay: 0.025 + Math.random() * 0.025,
        size: 10 + Math.random() * 5,
        color: ACCENT_GREEN,
        gravity: 0.06,
      };
    }

    return {
      x: x + (Math.random() - 0.5) * 14,
      y,
      char,
      vx: (Math.random() - 0.5) * 0.6,
      vy: 0.4 + Math.random() * 2,
      alpha: 0.5 + Math.random() * 0.5,
      decay: 0.01 + Math.random() * 0.01,
      size: 8 + Math.random() * 3,
      color: ACCENT_GREEN,
      gravity: 0.04,
    };
  }, []);

  const spawnBurst = useCallback((x, y) => {
    const count = 12 + Math.floor(Math.random() * 8);
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(spawnParticle(x, y, true));
    }
  }, [spawnParticle]);

  useEffect(() => {
    if (isTouchOnly()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        target.closest?.('.glass-card');
      isHoveringRef.current = !!isInteractive;
    };

    const handleClick = (e) => {
      spawnBurst(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -200;
      mouseRef.current.y = -200;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    const style = document.createElement('style');
    style.id = 'matrix-cursor-hide';
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    // Smooth lerp factor — lower = smoother/laggier, higher = snappier
    const LERP = 0.45;
    // Cap particles to prevent performance drops
    const MAX_PARTICLES = 120;

    const animate = (timestamp) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      const isVisible = targetX > -50 && targetY > -50;

      // Smooth interpolation toward actual mouse position
      if (isVisible) {
        smoothRef.current.x += (targetX - smoothRef.current.x) * LERP;
        smoothRef.current.y += (targetY - smoothRef.current.y) * LERP;
      } else {
        smoothRef.current.x = targetX;
        smoothRef.current.y = targetY;
      }

      const sx = smoothRef.current.x;
      const sy = smoothRef.current.y;

      // Spawn particles from the smoothed position
      if (isVisible) {
        const spawnRate = isHoveringRef.current ? 16 : 35;
        if (timestamp - lastSpawnRef.current > spawnRate) {
          const count = isHoveringRef.current ? 2 : 1;
          if (particlesRef.current.length < MAX_PARTICLES) {
            for (let i = 0; i < count; i++) {
              particlesRef.current.push(spawnParticle(sx, sy));
            }
          }
          lastSpawnRef.current = timestamp;
        }
      }

      // Batch-render particles (single save/restore, grouped by shared properties)
      const particles = particlesRef.current;
      let aliveCount = 0;

      ctx.font = "9px 'Fira Code', monospace";
      ctx.textBaseline = 'middle';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha > 0.01) {
          particles[aliveCount++] = p;

          // Only set font size if it differs noticeably from default
          if (p.size > 10) {
            ctx.font = `${p.size}px 'Fira Code', monospace`;
          }

          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.alpha * 8;
          ctx.fillText(p.char, p.x, p.y);

          // Reset font if changed
          if (p.size > 10) {
            ctx.font = "9px 'Fira Code', monospace";
          }
        }
      }
      particles.length = aliveCount;

      // Reset shadow for cursor drawing
      ctx.shadowBlur = 0;

      // Draw cursor dot (always green)
      if (isVisible) {
        const hovering = isHoveringRef.current;
        const dotSize = hovering ? 5 : 4;

        // Soft outer glow
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(sx, sy, dotSize + 10, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT_GREEN;
        ctx.fill();

        // Inner bright dot
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT_GREEN;
        ctx.shadowColor = ACCENT_GREEN;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Hover ring (also green)
        if (hovering) {
          ctx.globalAlpha = 0.4;
          ctx.beginPath();
          ctx.arc(sx, sy, 22, 0, Math.PI * 2);
          ctx.strokeStyle = ACCENT_GREEN;
          ctx.lineWidth = 1.5;
          ctx.shadowColor = ACCENT_GREEN;
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
      const s = document.getElementById('matrix-cursor-hide');
      if (s) s.remove();
    };
  }, [spawnParticle, spawnBurst]);

  if (isTouchOnly()) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default MatrixCursor;
