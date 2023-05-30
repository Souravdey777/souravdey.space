// // Not in use

"use client";
import React from "react";

// function Animation({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.main
//       variants={{
//         hidden: { opacity: 0 },
//         show: {
//           opacity: 1,
//           transition: {
//             delayChildren: 0.5,
//             staggerDirection: -1,
//           },
//         },
//       }}
//       initial="hidden"
//       animate="show"
//     >
//       {children}
//     </motion.main>
//   );
// }

// export default Animation;

// import { motion } from "framer-motion";
// const signaturePath =
//   "M 1.762 49.707 C 3.006 49.946, 4.806 49.937, 5.762 49.687 C 6.718 49.437, 5.700 49.241, 3.500 49.252 C 1.300 49.263, 0.518 49.468, 1.762 49.707 M 12.750 49.737 C 15.638 49.939, 20.363 49.939, 23.250 49.737 C 26.138 49.535, 23.775 49.370, 18 49.370 C 12.225 49.370, 9.863 49.535, 12.750 49.737";

// export default function Signature() {
//   return (
//     <div
//       className="example"
//       style={{
//         border: "none",
//         padding: "0",
//         marginLeft: "auto",
//         marginRight: "auto",
//       }}
//     >
//       <motion.svg
//         style={{ width: "80%", height: "80%" }}
//         viewBox="0 0 480 480"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <motion.path
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "loop",
//             repeatDelay: 1,
//           }}
//           strokeWidth={4}
//           strokeDasharray="0 1"
//           fill="none"
//           d={signaturePath}
//         />
//       </motion.svg>
//     </div>
//   );
// }

// export const Signature = () => {
//   return (
//     <motion.path
//       d={signaturePath}
//       initial={{ pathLength: 0, pathOffset: 1 }}
//       animate={{ pathLength: 1, pathOffset: 0 }}
//       transition={{ duration: 2 }}
//       style={{
//         fill: "none",
//         stroke: "black",
//         strokeWidth: 2,
//       }}
//     />
//   );
// };

// function Animate({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.span
//       whileHover={{ rotate: 360 }}
//       // style={{ rotate: 0, x: "calc(50vh - 100px)" }}
//     >
//       {children}
//     </motion.span>
//   );
// }

// export default Animate;

// import { motion, useMotionValue, useTransform } from "framer-motion";

// export const Animate = () => {
//   const x = useMotionValue(0);
//   const background = useTransform(
//     x,
//     [-100, 0, 100],
//     ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
//   );

//   return (
//     <motion.div style={{ background }}>
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x }}
//       >
//         Sourav Dey
//       </motion.div>
//     </motion.div>
//   );
// };
