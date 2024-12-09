"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";

const TestPage = () => {
  const [selectedMesh, setSelectedMesh] = useState<THREE.Object3D | null>(null);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar for Mesh Control */}
      <Sidebar path="/models/banana_box.glb" onMeshSelect={setSelectedMesh} />

      {/* CAD Viewer */}
      <Canvas
        camera={{ position: [0, 1, 3], fov: 50 }}
        style={{ height: "100vh", width: "100%" }}
      >
        {/* Set Background Color to Grey */}
        <color attach="background" args={["#EDEBE5"]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Controls */}
        <OrbitControls makeDefault />

        {/* Fit to View Logic */}
        <FitToView selectedMesh={selectedMesh} />

        {/* Model */}
        <Model path="/models/banana_box.glb" />
      </Canvas>
    </div>
  );
}

function Sidebar({
  path,
  onMeshSelect,
}: {
  path: string;
  onMeshSelect: (mesh: THREE.Object3D | null) => void;
}) {
  const { scene } = useGLTF(path);
  const [meshes, setMeshes] = useState<THREE.Object3D[]>([]);

  // Extract meshes on first render
  React.useEffect(() => {
    const extractedMeshes: THREE.Object3D[] = [];
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        extractedMeshes.push(child);
      }
    });
    setMeshes(extractedMeshes);
  }, [scene]);

  // Toggle mesh visibility
  const toggleVisibility = (mesh: THREE.Object3D) => {
    mesh.visible = !mesh.visible;
    setMeshes([...meshes]);
  };

  return (
    <div style={{ padding: "10px", width: "300px", backgroundColor: "#f4f4f4" }}>
      <h2>Mesh Layers</h2>
      {meshes.map((mesh, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={mesh.visible}
            onChange={() => toggleVisibility(mesh)}
          />
          <span style={{ marginLeft: "10px" }}>{mesh.name || `Mesh ${index + 1}`}</span>
          <button
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => onMeshSelect(mesh)}
          >
            Fit to View
          </button>
        </div>
      ))}
    </div>
  );
}

function FitToView({ selectedMesh }: { selectedMesh: THREE.Object3D | null }) {
  useFrame((state) => {
    if (selectedMesh) {
      const box = new THREE.Box3().setFromObject(selectedMesh);

      // Ensure the box has a valid size
      if (box.isEmpty()) return;

      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Calculate camera position
      const maxDimension = Math.max(size.x, size.y, size.z);
      const distance = maxDimension * 2;

      // Smooth transition to the new position
      state.camera.position.lerp(
        new THREE.Vector3(center.x, center.y, distance),
        0.1
      );
      state.camera.lookAt(center);
      state.camera.updateProjectionMatrix();
    }
  });

  return null; // No visual output
}

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  console.log("Loaded model:", scene.children[1].children[0].children);

  ((scene.children[1].children[0].children[0] as THREE.Mesh ).material as THREE.Material).transparent = true;
  ((scene.children[1].children[0].children[0] as THREE.Mesh ).material as THREE.Material).opacity = 0.5;
  ((scene.children[1].children[0].children[3] as THREE.Mesh).material as THREE.MeshBasicMaterial).wireframe = true;


  // scene.children[1].children[0].children[0].material.transparent = true;
  // scene.children[1].children[0].children[0].material.opacity = 0.5;
  // scene.children[1].children[0].children[3].material.wireframe = true;
  return <primitive object={scene} />;
}

export default TestPage;