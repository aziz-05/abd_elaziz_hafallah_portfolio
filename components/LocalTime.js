import { useEffect, useState } from 'react';
import { profile } from '../content/profile';

const format = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timezone,
  }).format(new Date());

// Rendered client-side only so static HTML never shows a stale build-time clock.
export default function LocalTime() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
