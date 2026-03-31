// import p5 from "p5";
// import React, { useEffect, useRef } from "react";

// const ParticleSketch = () => {
//   const ref = useRef();

//   useEffect(() => {
//     const sketch = (p) => {
//       let particles = [];

//       p.setup = () => {
//         p.createCanvas(400, 400);
//         for (let i = 0; i < 100; i++) {
//           particles.push({ x: p.random(p.width), y: p.random(p.height) });
//         }
//       };

//       p.draw = () => {
//         p.background(0);
//         p.fill(255);
//         particles.forEach((pt) => {
//           pt.x += p.random(-2, 2);
//           pt.y += p.random(-2, 2);
//           p.circle(pt.x, pt.y, 4);
//         });
//       };
//     };

//     const p5Instance = new p5(sketch, ref.current);
//     return () => p5Instance.remove();
//   }, []);

//   return <div ref={ref}></div>;
// };

// export default ParticleSketch;
