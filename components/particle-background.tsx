"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)

  // Create a custom random position generator
  const generateRandomPositions = (count: number) => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Generate random positions between -2 and 2
      positions[i3] = (Math.random() - 0.5) * 4
      positions[i3 + 1] = (Math.random() - 0.5) * 4
      positions[i3 + 2] = (Math.random() - 0.5) * 4
    }
    return positions
  }

  // Create a custom random color generator
  const generateRandomColors = (count: number) => {
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Apply color palette (purple, blue, green)
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        // Purple
        colors[i3] = 0.98
        colors[i3 + 1] = 0.25
        colors[i3 + 2] = 1.0
      } else if (colorChoice < 0.66) {
        // Blue
        colors[i3] = 0.31
        colors[i3 + 1] = 0.78
        colors[i3 + 2] = 1.0
      } else {
        // Green
        colors[i3] = 0.28
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 0.65
      }
    }
    return colors
  }

  // Generate positions and colors
  const positions = generateRandomPositions(count)
  const colors = generateRandomColors(count)

  useFrame((state, delta) => {
    if (!points.current) return

    // Rotate the entire particle field
    points.current.rotation.x = state.clock.elapsedTime * 0.05
    points.current.rotation.y = state.clock.elapsedTime * 0.03

    // Pulse the size of particles
    const size = 0.03 + Math.sin(state.clock.elapsedTime * 0.3) * 0.01
    if (points.current.material) {
      ;(points.current.material as PointMaterial).size = size
    }
  })

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

