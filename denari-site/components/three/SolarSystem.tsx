"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Define types for Planet props
interface PlanetProps {
  radius: number;
  position: [number, number, number];
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  name: string;
  distortFactor?: number;
  distortSpeed?: number;
  bumpIntensity?: number;
}

// Planet with procedural texture
function Planet({ 
  radius, position, orbitRadius, orbitSpeed, color, name, 
  distortFactor = 0.3, 
  distortSpeed = 0.2, 
  bumpIntensity = 0.2 
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [time, setTime] = useState(0);
  
  // Create unique procedural texture for each planet
  const texture = useMemo(() => {
    // Create canvas for procedural texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Fill background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create unique pattern based on planet name
    const patternSeed = name.charCodeAt(0) / 10;
    
    // Add some details
    for (let i = 0; i < 100 + patternSeed * 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 1 + Math.random() * 3;
      
      // Create gradient for each spot
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      
      // Determine pattern color based on planet
      const alpha = 0.1 + Math.random() * 0.2;
      
      if (name === "Earth") {
        // Blue oceans with green landmasses
        const isLand = Math.random() > 0.7;
        if (isLand) {
          gradient.addColorStop(0, `rgba(30, 180, 30, ${alpha})`);
          gradient.addColorStop(1, `rgba(30, 120, 30, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(20, 80, 200, ${alpha})`);
          gradient.addColorStop(1, `rgba(20, 20, 180, 0)`);
        }
      } else if (name === "Mars") {
        // Reddish with some craters
        gradient.addColorStop(0, `rgba(200, 100, 50, ${alpha})`);
        gradient.addColorStop(1, `rgba(150, 80, 50, 0)`);
      } else if (name === "Venus") {
        // Yellowish-white clouds
        gradient.addColorStop(0, `rgba(230, 220, 190, ${alpha})`);
        gradient.addColorStop(1, `rgba(200, 180, 150, 0)`);
      } else if (name === "Jupiter") {
        // Bands of different colors
        const band = Math.floor(y / (canvas.height / 8)) % 2;
        if (band === 0) {
          gradient.addColorStop(0, `rgba(210, 180, 140, ${alpha})`);
        } else {
          gradient.addColorStop(0, `rgba(180, 150, 120, ${alpha})`);
        }
        gradient.addColorStop(1, `rgba(150, 120, 90, 0)`);
      } else {
        // Default pattern
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(200, 200, 200, 0)`);
      }
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Create bump map texture effects depending on planet type
    if (name === "Mercury") {
      // Add craters
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 5 + Math.random() * 15;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(50, 50, 50, 0.5)");
        gradient.addColorStop(0.8, "rgba(100, 100, 100, 0.2)");
        gradient.addColorStop(1, "rgba(100, 100, 100, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create a three.js texture
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, [color, name]);
  
  // Create bump texture for the planet
  const bumpTexture = useMemo(() => {
    // Create canvas for bump texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    // Fill with base color
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create details
    const details = 100 + name.length * 20;
    for (let i = 0; i < details; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 1 + Math.random() * 5;
      
      const brightness = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, [name]);
  
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

  if (!texture) return null;

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        map={texture}
        bumpMap={bumpTexture || undefined}
        bumpScale={bumpIntensity}
        roughness={0.7}
        metalness={0.2}
      />
    </mesh>
  );
}

// Enhanced sun component with glow effect
function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  // Create procedural sun texture
  const sunTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    // Create radial gradient for the sun
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    
    gradient.addColorStop(0, "#FFFFA0");   // Center - bright yellow
    gradient.addColorStop(0.5, "#FFA500");  // Middle - orange
    gradient.addColorStop(1, "#FF4500");    // Edge - reddish orange
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some solar flare details
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 150;
      const size = 10 + Math.random() * 30;
      
      const x = canvas.width / 2 + Math.cos(angle) * distance;
      const y = canvas.height / 2 + Math.sin(angle) * distance;
      
      const flareGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      flareGradient.addColorStop(0, "rgba(255, 255, 0, 0.6)");
      flareGradient.addColorStop(1, "rgba(255, 100, 0, 0)");
      
      ctx.fillStyle = flareGradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);
  
  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
      
      // Pulse glow effect
      if (glowRef.current) {
        const time = state.clock.getElapsedTime();
        glowRef.current.scale.set(
          1 + Math.sin(time) * 0.04,
          1 + Math.sin(time) * 0.04,
          1 + Math.sin(time) * 0.04
        );
      }
    }
  });

  if (!sunTexture) return null;

  return (
    <group>
      {/* Main sun sphere with texture */}
      <mesh ref={sunRef} castShadow>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          map={sunTexture}
          color="#FFFF00"
          toneMapped={false}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial
          color="#FFA500"
          transparent={true}
          opacity={0.15}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial
          color="#FF8C00"
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

// Custom star field component with edge fading
function CustomStars() {
  const starsRef = useRef<THREE.Points>(null);
  
  // Create a gradient mask to fade out stars at the edges
  const fadeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    // Create radial gradient for fading at edges
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);
  
  useFrame((state) => {
    if (starsRef.current) {
      // Slow rotation of the entire star field
      starsRef.current.rotation.y += 0.0003;
    }
  });
  
  return (
    <Stars 
      ref={starsRef}
      radius={90} 
      depth={50} 
      count={3000} 
      factor={4} 
      fade={true}
    />
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
      <pointLight position={[0, 0, 0]} intensity={3} color="#FFA500" castShadow />
      
      {/* Sun */}
      <Sun />
      
      {/* Planets with enhanced textures */}
      <Planet 
        name="Mercury"
        radius={0.4} 
        position={[4, 0, 0]} 
        orbitRadius={4} 
        orbitSpeed={0.5} 
        color="#A9A9A9" 
        bumpIntensity={0.3}
      />
      <Planet 
        name="Venus"
        radius={0.6} 
        position={[6, 0, 0]} 
        orbitRadius={6} 
        orbitSpeed={0.35} 
        color="#E39E6D" 
        bumpIntensity={0.1}
      />
      <Planet 
        name="Earth"
        radius={0.7} 
        position={[8, 0, 0]} 
        orbitRadius={8} 
        orbitSpeed={0.25} 
        color="#3B82F6" 
        bumpIntensity={0.2}
      />
      <Planet 
        name="Mars"
        radius={0.5} 
        position={[10, 0, 0]} 
        orbitRadius={10} 
        orbitSpeed={0.2} 
        color="#C1440E" 
        bumpIntensity={0.4}
      />
      <Planet 
        name="Jupiter"
        radius={1.2} 
        position={[14, 0, 0]} 
        orbitRadius={14} 
        orbitSpeed={0.1} 
        color="#E0BB95" 
        bumpIntensity={0.15}
      />
      
      {/* Custom stars with edge fading */}
      <CustomStars />
      
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
        shadows
      >
        <SolarSystemScene />
      </Canvas>
      
      {/* Overlay to prevent touch issues on mobile */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
} 