'use client';

import st from './AvailabilityStatus.module.scss';

import LogoIo from '../../../../public/logos/io.svg';

const AvailabityStatus = () => {
  const currentDate = new Date();
  const utcHours = currentDate.getUTCHours();
  const utcMinutes = currentDate.getUTCMinutes();
  const utcWeekday = currentDate.getUTCDay();
  const onejan = new Date(currentDate.getFullYear(), 0, 1);
  const week = Math.ceil((((currentDate.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);

  // Set availability status based on UTC time (between 7:30 and 15:00) and weekday (Monday to Friday) except Monday of every even week of the year
  const availabilityStatus = utcWeekday > 0 && utcWeekday < 6 && utcHours >= 7 && utcHours < 15 && !(utcWeekday === 1 && week % 2 === 0) ? 'available' : 'unavailable';

  return (
    <span className={ st.asideItem }>
      <span className={`${st.availabilityBullet} ${ st[`availabilityBullet--${availabilityStatus}`] }`}></span>
      <LogoIo title="iO digital logo" /> Currently { availabilityStatus } at iO
    </span>
  )
}

export default AvailabityStatus;
