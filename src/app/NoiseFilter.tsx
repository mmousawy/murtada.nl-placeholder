'use client';

import React from 'react';
import { useEffect } from 'react';
import styles from '@/styles/page.module.scss'

const NoiseFilter = ({ /* Destructure your props here */ }) => {
  // Add your component logic here
  useEffect(() => {
    const noiseFilter = document.querySelector('#noiseFilter');

    const seedRandomizer = setInterval(() => {
      noiseFilter?.children[0].setAttribute('seed', `${Math.round(Math.random() * 1000)}`);
    }, 40);

    return () => {
      clearInterval(seedRandomizer);
    };
  }, []);

  return (
    <svg viewBox="0 0 192 192" preserveAspectRatio="xMinYMin slice" className={styles.noise}>
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='10'
          numOctaves='1'
        />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  );
};

export default NoiseFilter;
