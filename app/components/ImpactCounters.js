"use client";

import { useEffect, useRef, useState } from "react";
import { impactCounters } from "../data";

function useCountUp(target, isActive, duration = 1300) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, isActive, target]);

  return value;
}

function ImpactCounter({ counter, index, isActive }) {
  const value = useCountUp(counter.value, isActive);

  return (
    <article
      className={`impactCounter impactCounter-${counter.tone} reveal`}
      style={{
        "--card-delay": `${index * 80}ms`,
        "--progress": `${isActive ? counter.progress : 0}%`,
      }}
    >
      <div className="progressRing" aria-hidden="true">
        <span>{counter.icon}</span>
      </div>
      <strong>
        {counter.prefix}
        {value}
        {counter.suffix}
      </strong>
      <p>{counter.label}</p>
    </article>
  );
}

export default function ImpactCounters() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="impactDashboard" ref={sectionRef}>
      <div className="impactVisual" aria-label="Analytics dashboard and transformation visuals">
        <div className="analyticsCard revenueCard">
          <span>Transformation Index</span>
          <strong>92%</strong>
          <div className="miniBars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="analyticsCard processCard">
          <span>Process Flow</span>
          <div className="flowNodes" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="analyticsCard chartCard">
          <span>Accuracy Trend</span>
          <svg viewBox="0 0 240 120" role="img" aria-label="Rising analytics line chart">
            <path d="M8 96 L58 72 L103 82 L148 42 L190 50 L232 18" />
            <circle cx="58" cy="72" r="5" />
            <circle cx="148" cy="42" r="5" />
            <circle cx="232" cy="18" r="5" />
          </svg>
        </div>
      </div>
      <div className="impactCounterGrid">
        {impactCounters.map((counter, index) => (
          <ImpactCounter
            counter={counter}
            index={index}
            isActive={isActive}
            key={counter.label}
          />
        ))}
      </div>
    </div>
  );
}
