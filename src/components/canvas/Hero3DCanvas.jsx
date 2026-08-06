import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function ProfessionalSpatialMesh({ activeColor = '#3B82F6' }) {
  const groupRef = useRef();
  const innerRef = useRef();
  const outerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = (state.pointer.x * Math.PI) / 8;
    const mouseY = (state.pointer.y * Math.PI) / 8;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX + t * 0.15, 0.04);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY + t * 0.08, 0.04);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = t * 0.3;
    }

    if (outerRef.current) {
      outerRef.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sleek Inner Geometry Core */}
      <mesh ref={innerRef} scale={1.3}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={activeColor}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Subtle Glowing Center Sphere */}
      <mesh scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={activeColor}
          emissive={activeColor}
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Refined Outer Glass Shell */}
      <mesh ref={outerRef} scale={2.1}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={activeColor}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.2}
          transmission={0.85}
          thickness={0.4}
        />
      </mesh>

      {/* Orbital Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} scale={2.6}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshBasicMaterial color={activeColor} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas({ activeColor = '#3B82F6' }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} color={activeColor} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <ProfessionalSpatialMesh activeColor={activeColor} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  );
}
