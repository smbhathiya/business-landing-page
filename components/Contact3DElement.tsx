'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

const FloatingRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={[2.2, 0, 0]} scale={1.5}>
        <torusGeometry args={[1, 0.3, 32, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh position={[2.2, 0, 0]} scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export default function Contact3DElement() {
  const { isCapable, isLoaded } = useDeviceCapability();

  if (!isLoaded || !isCapable) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute -inset-[50%] z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} className="w-full h-full">
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <FloatingRing />
        </Suspense>
      </Canvas>
    </div>
  );
}
