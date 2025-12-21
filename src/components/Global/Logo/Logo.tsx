import React from 'react';
import st from './Logo.module.scss';
import Link from 'next/link';

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ width = 48, height = 48, className }) => {
  return (
    <Link href="/" aria-label="Home" className={st.logoLink}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 62 62" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${st.logo} ${className || ''}`}
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeMiterlimit: 1.5 }}
      >
        <g>
          <g>
            <clipPath id="_clip1">
              <circle cx="30.72" cy="30.72" r="27.84"/>
            </clipPath>
            <g clipPath="url(#_clip1)">
              <circle cx="30.72" cy="30.72" r="27.84" className={st.circle}/>
              <g>
                <path d="M38.972,-10.541c4.555,-4.555 11.95,-4.555 16.505,-0c4.554,4.554 4.554,11.95 -0,16.504l-16.505,16.505c-4.554,4.554 -11.95,4.554 -16.504,-0c-4.555,-4.555 -4.555,-11.95 -0,-16.505l16.504,-16.504Z" className={st.shape}/>
                <path d="M47.224,-2.289c4.555,-4.554 11.95,-4.554 16.505,0c4.554,4.555 4.554,11.95 -0,16.505l-16.505,16.504c-4.554,4.555 -11.949,4.555 -16.504,0c-4.555,-4.555 -4.555,-11.95 0,-16.504l16.504,-16.505Z" className={st.shape}/>
                <path d="M55.477,5.963c4.554,-4.554 11.95,-4.554 16.504,0c4.555,4.555 4.555,11.95 0,16.505l-16.504,16.504c-4.555,4.555 -11.95,4.555 -16.505,0c-4.554,-4.554 -4.554,-11.95 0,-16.504l16.505,-16.505Z" className={st.shape}/>
                <path d="M47.224,30.72l16.505,-16.504" className={st.line}/>
              </g>
              <g>
                <path d="M22.468,38.972c4.554,-4.554 11.95,-4.554 16.504,0c4.555,4.555 4.555,11.95 0,16.505l-16.504,16.504c-4.555,4.555 -11.95,4.555 -16.505,0c-4.554,-4.554 -4.554,-11.95 0,-16.504l16.505,-16.505Z" className={st.shape}/>
                <path d="M14.216,30.72c4.554,-4.555 11.949,-4.555 16.504,0c4.555,4.555 4.555,11.95 -0,16.504l-16.504,16.505c-4.555,4.554 -11.95,4.554 -16.505,-0c-4.554,-4.555 -4.554,-11.95 0,-16.505l16.505,-16.504Z" className={st.shape}/>
                <path d="M5.963,22.468c4.555,-4.555 11.95,-4.555 16.505,-0c4.554,4.554 4.554,11.95 -0,16.504l-16.505,16.505c-4.554,4.554 -11.95,4.554 -16.504,-0c-4.555,-4.555 -4.555,-11.95 -0,-16.505l16.504,-16.504Z" className={st.shape}/>
                <path d="M-2.289,47.224l16.505,-16.504" className={st.line}/>
              </g>
            </g>
          </g>
          <path d="M30.72,0c16.955,0 30.72,13.765 30.72,30.72c-0,16.955 -13.765,30.72 -30.72,30.72c-16.955,0 -30.72,-13.765 -30.72,-30.72c-0,-16.955 13.765,-30.72 30.72,-30.72Zm-0,6c-13.643,0 -24.72,11.077 -24.72,24.72c-0,13.643 11.077,24.72 24.72,24.72c13.643,0 24.72,-11.077 24.72,-24.72c-0,-13.643 -11.077,-24.72 -24.72,-24.72Z" className={st.border}/>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;

