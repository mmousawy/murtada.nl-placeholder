'use client';

import React from 'react';
import { useEffect } from 'react';
import styles from '@/styles/page.module.scss'

const NoiseFilter = ({ /* Destructure your props here */ }) => {
  const svgRef = React.useRef<SVGSVGElement>(null);

  useEffect(() => {
    const seedRandomizer = setInterval(() => {
      svgRef.current!.querySelector('#noiseFilter')!.children[0].setAttribute('seed', `${Math.round(Math.random() * 1000)}`);
    }, 40);

    window.addEventListener('resize', () => {
        svgRef.current!.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
        console.dir(svgRef.current);
    });

    svgRef.current!.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);

    return () => {
      clearInterval(seedRandomizer);
    };
  }, []);

  return (
    <svg viewBox="0 0 1920 1920" preserveAspectRatio="xMinYMin slice" className={styles.noise} ref={svgRef}>
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
