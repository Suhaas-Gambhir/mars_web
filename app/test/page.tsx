"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Home() {
  return (
    <div>
      <h1>CAD Model Viewer</h1>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }} style={{ height: "100vh", width: "100%" }}>

      {/* Set Background Color to White */}
      <color attach="background" args={["grey"]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Model Loading */}
        <Model path="/models/banana_box.glb" />
        
        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path); // Load the GLTF/GLB model
  console.log("Loaded model:", scene);
  console.log("Loaded model:", scene.children[1].children[0].children);  // children is where the "meshes" are
  scene.children[1].children[0].children[0].visible = false;
  return <primitive object={scene} scale={1.5} />;
}
