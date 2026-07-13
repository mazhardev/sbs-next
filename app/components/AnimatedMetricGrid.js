"use client";

import { useEffect, useState } from "react";
import { metrics } from "../data";

const cycleDuration = 7000;

function splitMetric(value) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { target: Number(match[1]), suffix: match[2] } : null;
}

export default function AnimatedMetricGrid({ compact = false }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return undefined;
    }

    let frame;
    let startedAt;

    const count = (timestamp) => {
      startedAt ??= timestamp;
      const cycleProgress = ((timestamp - startedAt) % cycleDuration) / cycleDuration;
      setProgress(cycleProgress);
      frame = window.requestAnimationFrame(count);
    };

    frame = window.requestAnimationFrame(count);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const easedProgress = 1 - Math.pow(1 - progress, 3);

  return (
    <div className={compact ? "metricGrid compact" : "metricGrid"}>
      {metrics.map((metric) => {
        const parsed = splitMetric(metric.value);
        const displayedValue = parsed
          ? `${Math.round(parsed.target * easedProgress)}${parsed.suffix}`
          : metric.value;

        return (
          <div className="metricCard reveal" key={metric.label}>
            <strong aria-label={metric.value}>{displayedValue}</strong>
            <span>{metric.label}</span>
          </div>
        );
      })}
    </div>
  );
}
