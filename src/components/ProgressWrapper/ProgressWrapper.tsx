"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./ProgressWrapper.css";

export default function ProgressWrapper({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={disabled ? null : ref} className="progressWrapper">
      {!disabled && (
        <figure className="progress">
          <svg id="progress" width="36" height="36" viewBox="0 0 100 100">
            <circle
              id="circle"
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="bg"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      )}
      {children}
    </div>
  );
}
