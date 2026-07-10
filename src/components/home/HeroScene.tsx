'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei/core/Float'
import * as THREE from 'three'

function Coin({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.008 * speed
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1
    }
  })

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <cylinderGeometry args={[1, 1, 0.12, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} envMapIntensity={1} />
      </mesh>
      <mesh position={[position[0], position[1] + 0.07 * scale, position[2]]} scale={scale * 0.85}>
        <circleGeometry args={[0.8, 32]} />
        <meshStandardMaterial color="#C9A030" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

function ChartBar({
  position,
  height,
  delay = 0,
}: {
  position: [number, number, number]
  height: number
  delay?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const startTime = useRef(Date.now() + delay * 1000)

  useFrame(() => {
    const elapsed = (Date.now() - startTime.current) / 1000
    const t = Math.min(elapsed, 1)
    const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    if (ref.current) {
      ref.current.scale.y = Math.max(eased, 0.001)
      ref.current.position.y = position[1] + (height * eased) / 2 - height / 2
    }
  })

  return (
    <mesh ref={ref} position={[position[0], position[1] - height / 2, position[2]]} scale={[1, 0.001, 1]}>
      <boxGeometry args={[0.35, height, 0.35]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.3} transparent opacity={0.7} />
    </mesh>
  )
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(120 * 3)
    for (let i = 0; i < 120; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
    }
    return positions
  }, [])

  const ref = useRef<THREE.Points>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[points, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#D4AF37" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#D4AF37" />
      <pointLight position={[-3, -2, 3]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 6]} intensity={0.5} color="#D4AF37" />

      <Coin position={[-2, 0.3, 0]} scale={1.0} speed={1.0} />
      <Coin position={[1.8, -0.5, -1]} scale={0.7} speed={0.8} />
      <Coin position={[0.3, 1.0, -2]} scale={0.5} speed={1.2} />

      <ChartBar position={[3.5, -1.5, -3]} height={1.5} delay={0.2} />
      <ChartBar position={[4.2, -1.5, -3]} height={2.5} delay={0.4} />
      <ChartBar position={[4.9, -1.5, -3]} height={3.5} delay={0.6} />

      <Particles />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ fov: 45, position: [0, 0, 8] }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
