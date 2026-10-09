'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

const FloatingAbstract = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[1.5, 0.2, -0.5]} scale={1.2}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ef4444"
          roughness={0.15}
          metalness={0.85}
          wireframe={true}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[1.5, 0.2, -0.5]} scale={0.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#dc2626"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

export default function About3DElement() {
  const { isCapable, isLoaded } = useDeviceCapability();

  if (!isLoaded || !isCapable) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute -inset-[100%] z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <FloatingAbstract />
        </Suspense>
      </Canvas>
    </div>
  );
}
