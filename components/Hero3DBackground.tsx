'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

const FloatingShapes = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 1, 0]} scale={1.2}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#ef4444"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2.5, -1, -1]} scale={0.8}>
          <torusGeometry args={[1, 0.4, 32, 64]} />
          <meshStandardMaterial
            color="#dc2626"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, -2, 1]} scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#991b1b"
            roughness={0.3}
            metalness={1}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default function Hero3DBackground() {
  const { isCapable, isLoaded } = useDeviceCapability();

  // If not yet loaded or device is mobile / low capability, render ultra-lightweight CSS orbs
  if (!isLoaded || !isCapable) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-[120px] animate-orb" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-900/20 rounded-full blur-[90px]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[90px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <FloatingShapes />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.4}
            scale={15}
            blur={2.5}
            far={4}
            color="#dc2626"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
