'use client';

import React from 'react';
import { useEffect } from 'react';
import st from '@/styles/page.module.scss'

const NoiseFilter = ({ /* Destructure your props here */ }) => {
  const svgRef = React.useRef<SVGSVGElement>(null);

  useEffect(() => {
    let requestId: number;
    let then = Date.now();
    let fpsInterval = 1000 / 60;

    const updateNoiseFilter = (timestamp: number) => {
      requestId = requestAnimationFrame(updateNoiseFilter);
      const now = Date.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        if (!svgRef.current) {
          return;
        }

        svgRef.current!.querySelector('#noiseFilter')!.children[0].setAttribute('seed', `${Math.round(Math.random() * 1000)}`);
        then = now - (elapsed % fpsInterval);
      }
    };

    const handleResize = () => {
      svgRef.current!.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    };

    window.addEventListener('resize', handleResize);

    svgRef.current!.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);

    requestId = requestAnimationFrame(updateNoiseFilter);

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg viewBox="0 0 1920 1920" preserveAspectRatio="xMinYMin slice" className={st.noise} ref={svgRef}>
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='.7'
          numOctaves='1'
        />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  );
};

export default NoiseFilter;
