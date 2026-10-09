'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

const FloatingKnot = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      group.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3.0, 0, -1]} scale={0.8}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial
            color="#dc2626"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default function Services3DElement() {
  const { isCapable, isLoaded } = useDeviceCapability();

  if (!isLoaded || !isCapable) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <FloatingKnot />
        </Suspense>
      </Canvas>
    </div>
  );
}
