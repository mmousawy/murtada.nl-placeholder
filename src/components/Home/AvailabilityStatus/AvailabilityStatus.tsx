'use client';

import st from './AvailabilityStatus.module.scss';

import LogoIo from '../../../../public/logos/io.svg';

const AvailabityStatus = () => {
  return (
    <span className={ st.asideItem }>
      <span className={`${st.availabilityBullet} ${ st[`availabilityBullet--available`] }`}></span>
      <LogoIo title="iO digital logo" /> Currently employed at iO
    </span>
  )
}

export default AvailabityStatus;
