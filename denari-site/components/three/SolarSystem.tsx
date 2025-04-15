"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Define types for Planet props
interface PlanetProps {
  radius: number;
  position: [number, number, number];
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  name: string;
}

// Individual planet component
function Planet({ radius, position, orbitRadius, orbitSpeed, color, name }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [time, setTime] = useState(0);
  
  // Animation logic
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate planet on its axis
      meshRef.current.rotation.y += 0.01;
      
      // Update orbital position
      const newTime = state.clock.getElapsedTime() * orbitSpeed;
      setTime(newTime);
      
      // Calculate position on elliptical orbit
      const x = Math.cos(newTime) * orbitRadius;
      const z = Math.sin(newTime) * orbitRadius * 0.8; // Flattened orbit for perspective
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.7}
        metalness={0.2}
      />
    </mesh>
  );
}

// Sun component with glow effect
function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#FDB813" 
          emissive="#FF8C00"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial
          color="#FFA500"
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

// Complete solar system
function SolarSystemScene() {
  // Use effect to handle resize and adjust the scene accordingly
  useEffect(() => {
    const handleResize = () => {
      // Could add responsive adjustments here if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.1} />
      
      {/* Main directional light from the sun */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#FFA500" />
      
      {/* Sun */}
      <Sun />
      
      {/* Planets */}
      <Planet 
        name="Mercury"
        radius={0.4} 
        position={[4, 0, 0]} 
        orbitRadius={4} 
        orbitSpeed={0.5} 
        color="#A9A9A9" 
      />
      <Planet 
        name="Venus"
        radius={0.6} 
        position={[6, 0, 0]} 
        orbitRadius={6} 
        orbitSpeed={0.35} 
        color="#E39E6D" 
      />
      <Planet 
        name="Earth"
        radius={0.7} 
        position={[8, 0, 0]} 
        orbitRadius={8} 
        orbitSpeed={0.25} 
        color="#6B93D6" 
      />
      <Planet 
        name="Mars"
        radius={0.5} 
        position={[10, 0, 0]} 
        orbitRadius={10} 
        orbitSpeed={0.2} 
        color="#C1440E" 
      />
      <Planet 
        name="Jupiter"
        radius={1.2} 
        position={[14, 0, 0]} 
        orbitRadius={14} 
        orbitSpeed={0.1} 
        color="#E0BB95" 
      />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} />
      
      {/* Camera controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export function SolarSystem() {
  return (
    <div className="h-full w-full relative">
      <Canvas
        camera={{ position: [0, 15, 20], fov: 45 }}
        dpr={[1, 2]}
        style={{ 
          background: 'transparent'
        }}
        className="!touch-none"
      >
        <SolarSystemScene />
      </Canvas>
      
      {/* Overlay to prevent touch issues on mobile */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
} 