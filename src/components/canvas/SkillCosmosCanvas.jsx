import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function SkillNode({ skill, position, onSelectNode, isSelected }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectNode(skill);
        }}
        scale={hovered || isSelected ? 1.4 : 1}
      >
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={skill.color || '#00F0FF'}
          emissive={skill.color || '#00F0FF'}
          emissiveIntensity={hovered || isSelected ? 1.5 : 0.6}
          roughness={0.2}
          wireframe={!hovered && !isSelected}
        />
      </mesh>

      {/* HTML Tag overlay in 3D */}
      <Html distanceFactor={12} center position={[0, -0.6, 0]}>
        <div
          onClick={() => onSelectNode(skill)}
          style={{
            background: hovered || isSelected ? 'rgba(0, 240, 255, 0.25)' : 'rgba(14, 19, 31, 0.75)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${skill.color || 'var(--accent-primary)'}`,
            padding: '4px 10px',
            borderRadius: '16px',
            fontSize: '11px',
            color: '#fff',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            boxShadow: hovered ? `0 0 15px ${skill.color}` : 'none',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: skill.color }}></span>
          {skill.name}
        </div>
      </Html>
    </group>
  );
}

function CosmosGroup({ skills, onSelectNode, activeSkill }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const radius = 4.2;

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <SkillNode
            key={skill.name}
            skill={skill}
            position={[x, y, z]}
            onSelectNode={onSelectNode}
            isSelected={activeSkill?.name === skill.name}
          />
        );
      })}

      {/* Orbiting Orbital Lines */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[radius, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[radius * 0.9, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function SkillCosmosCanvas({ skills, onSelectNode, activeSkill }) {
  return (
    <div style={{ width: '100%', height: '420px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CosmosGroup skills={skills} onSelectNode={onSelectNode} activeSkill={activeSkill} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
