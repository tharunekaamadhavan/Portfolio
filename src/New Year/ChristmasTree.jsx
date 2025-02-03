import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import treeModelPath from "../assets/neon-christmas-tree.glb";

// Load the 3D model and animations
function TreeModel() {
  const { scene, animations } = useGLTF(treeModelPath);
  const mixer = useRef(null);

  useEffect(() => {
    if (animations && animations.length) {
      // Set up the mixer and play animations
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [scene, animations]);

  // Update animation on each frame
  useEffect(() => {
    const animate = () => {
      if (mixer.current) {
        mixer.current.update(0.01); // Update mixer with time
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <primitive object={scene} scale={0.5} position={[0, -0.2, 0]} />;
}

export default function ChristmasTree() {
  return (
    <div className="xmas-tree">
      {/* Add the heading text here */}
      <h2 className="zoom-text">Zoom and Turn Around the X-mas Tree!🎄</h2>
      
      {/* The tree visualization */}
      <div className="tree-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <TreeModel />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
