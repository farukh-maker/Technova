import { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { stats } from "../data/stats";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setCount(value);
          return;
        }

        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <strong ref={ref} className="stat__value">
      {count}
      {suffix}
    </strong>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="section section--dark" aria-labelledby="stats-title">
      <div className="container">
        <SectionTitle id="stats-title" title="Raqamlarda natijalarimiz" />
        <ul className="grid grid--4">
          {stats.map((s) => (
            <li key={s.id} className="stat">
              <Counter value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
