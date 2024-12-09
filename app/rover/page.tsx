export default function RoverPage() {

};

// "use client";

// // npm install @react-three/fiber @react-three/drei @react-spring/three three

// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { animated, useSpring } from "@react-spring/three";
// import * as THREE from "three";

// export default function RoverPage() {
//   const [activePart, setActivePart] = useState<string>("chassis");
//   const [scrollProgress, setScrollProgress] = useState(0); // Tracks scroll for animations
//   const groupRef = useRef<THREE.Group | null>(null);

//   const { scene } = useGLTF("/models/rover.glb");

//   // Animation for model's position, rotation, and scale based on scroll progress
//   const { position, rotation, scale } = useSpring({
//     position: scrollProgress > 0.5 ? [0, -2, 0] : [0, 1, 5],
//     rotation: scrollProgress > 0.5 ? [Math.PI / 2, 0, 0] : [0, 0.5, 0],
//     scale: scrollProgress > 0.5 ? [2, 2, 2] : [1, 1, 1],
//     config: { mass: 1, tension: 280, friction: 60 },
//   });

//   // Track scroll progress for animations
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const maxScroll = document.body.scrollHeight - window.innerHeight;
//     setScrollProgress(scrollY / maxScroll);
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-black text-white overflow-y-scroll">
//       {/* Header Section */}
//       <div className="absolute top-10 z-10 w-full text-center">
//         <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600">
//           Wally
//         </h1>
//       </div>

//       {/* 3D Model Canvas */}
//       <Canvas camera={{ position: [0, 2, 8], fov: 50 }} style={{ width: "100%", height: "100%" }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <spotLight position={[5, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
//         <animated.group ref={groupRef} position={[0,0,0]} rotation={[0,1,0]} scale={1}>
//           {/* Render the rover model */}
//           <primitive object={scene} />
//         </animated.group>
//       </Canvas>

//       {/* Modern Sidebar Navigation */}
//       <div className="absolute right-10 top-1/4 z-10 flex flex-col items-end space-y-4">
//         {["Chassis", "Wheels", "Sensors", "Arms", "Head"].map((part, index) => (
//           <div key={index} className="relative group">
//             <button
//               onClick={() => setActivePart(part.toLowerCase())}
//               className={`p-3 rounded-lg text-lg font-medium transition-all bg-gray-800 hover:bg-gray-600 ${
//                 activePart === part.toLowerCase() ? "text-white" : "text-gray-400"
//               }`}
//             >
//               {part}
//             </button>
//             <span
//               className={`absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${
//                 part.toLowerCase() !== "chassis" ? "hidden lg:block" : ""
//               }`}
//             >
//               {part === "Chassis" ? "View chassis design" : "Coming soon"}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Information Section */}
//       <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-black pointer-events-none">
//         <div className="absolute left-1/4 text-white">
//           <h2 className="text-2xl font-semibold">
//             {activePart === "chassis" && "Rover Chassis"}
//             {activePart !== "chassis" && "Coming Soon"}
//           </h2>
//           <p className="text-sm mt-2">
//             {activePart === "chassis"
//               ? "The chassis is the structural backbone of the rover, housing critical components such as the power system and wheels."
//               : "Detailed information about this section is coming soon. Stay tuned!"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
