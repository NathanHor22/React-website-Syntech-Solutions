import { useEffect, useState } from 'react';

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;

  // Rough day count; keeps it simple
  const days = Math.floor(totalHours / 24);
  return { days, hours, minutes, seconds };
}

export default function SinceCounter({ start }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const startMs = new Date(start).getTime();
  const diff = Math.max(0, now - startMs);
  const { days, hours, minutes, seconds } = formatDuration(diff);

  return (
    <div className="since-counter">
      <div className="since-values">
        <div><strong>{days}</strong> days</div>
        <div><strong>{hours}</strong> hours</div>
        <div><strong>{minutes}</strong> minutes</div>
        <div><strong>{seconds}</strong> seconds</div>
      </div>
    </div>
  );
}