'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

function MilkyWayGalaxy() {
  const galaxyRef = useRef<THREE.Points>(null);

  const parameters = {
    count: 10000,
    size: 0.01,
    radius: 12,
    branches: 5,
    spin: 1,
    randomness: 0.7,
    randomnessPower: 5,
    insideColor: '#ffffff',
    outsideColor: '#377DFF',
  };

  const galaxyGeometry = useMemo(() => {
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * 0.1;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, [
    parameters.count,
    parameters.radius,
    parameters.branches,
    parameters.spin,
    parameters.randomness,
    parameters.randomnessPower,
    parameters.insideColor,
    parameters.outsideColor,
  ]);

  useFrame(({ clock }) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = clock.getElapsedTime() * 0.06;
    }
  });

  return (
    <points ref={galaxyRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[galaxyGeometry.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[galaxyGeometry.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={parameters.size}
        vertexColors
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        transparent
      />
    </points>
  );
}

export default function FloatingGalaxyScene() {
  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 75 }} className="fixed inset-0 -z-10 h-[90vh]">
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 8, 5]} intensity={1} />

      <MilkyWayGalaxy />

      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.0} />
      </EffectComposer>

      <OrbitControls enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}