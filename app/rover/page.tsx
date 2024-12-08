"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function RoverPage() {
  const [activePart, setActivePart] = useState<string>("");
  const groupRef = useRef<THREE.Group | null>(null); // Ref for the group to control the rover model

  const { nodes, materials } = useGLTF("/models/rover.glb");

  // Log nodes and materials for debugging (Remove after debugging)
  useEffect(() => {
    console.log("Nodes:", nodes);
    console.log("Materials:", materials);
  }, [nodes, materials]);

  // Handle highlighting the active part
  const handlePartClick = (part: string) => {
    setActivePart(part);
  };

  // Function to render a mesh if a node exists or fallback to a default
  const renderPart = (
    nodeName: string,
    fallbackName: string,
    geometry: THREE.BufferGeometry | undefined,
    material: THREE.Material | undefined
  ) => {
    if (geometry) {
      return (
        <mesh
          geometry={geometry}
          material={material || new THREE.MeshStandardMaterial({ color: "gray" })}
          onClick={() => handlePartClick(fallbackName)}
          scale={activePart === fallbackName ? 1.2 : 1} // Highlight the active part by scaling
        />
      );
    }
    return (
      <mesh
        geometry={new THREE.BoxGeometry(1, 1, 1)} // Fallback geometry (box) if part is missing
        material={new THREE.MeshStandardMaterial({ color: "gray" })}
        onClick={() => handlePartClick(fallbackName)}
        scale={activePart === fallbackName ? 1.2 : 1} // Highlight the active part by scaling
      />
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
      {/* Header with text */}
      <div className="absolute top-10 text-center z-10">
        <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-400">
          Wally
        </h1>
      </div>

      {/* 3D Model Canvas */}
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }} style={{ width: "100%", height: "100%" }}>
        {/* Lighting for better visibility */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[5, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        {/* Rover Model */}
        <group ref={groupRef} position={[0, -1, 0]} scale={[1, 1, 1]}>
          {/* Body */}
          {renderPart("Body", "chassis", nodes?.Body?.geometry, materials?.Body)}

          {/* Wheels */}
          {renderPart("Wheels", "wheels", nodes?.Wheels?.geometry, materials?.Wheels)}

          {/* Additional parts (fallbacks for other parts in the model) */}
          {renderPart("Arms", "arms", nodes?.Arms?.geometry, materials?.Arms)}
          {renderPart("Head", "head", nodes?.Head?.geometry, materials?.Head)}
        </group>

        {/* Controls */}
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>

      {/* Right Sidebar Navigation */}
      <div className="absolute right-10 top-1/4 z-10 flex flex-col gap-4">
        {["Chassis", "Wheels", "Arms", "Head"].map((part, index) => (
          <button
            key={index}
            onClick={() => setActivePart(part.toLowerCase())}
            className={`p-3 rounded-lg text-lg font-medium transition-all ${
              activePart === part.toLowerCase() ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-500"
            }`}
          >
            {part}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 text-center text-gray-500 text-sm">
        Scroll or click the buttons to explore Wally.
      </div>
    </div>
  );
}
