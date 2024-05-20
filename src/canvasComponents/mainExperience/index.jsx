import React from 'react'
import { Canvas } from '@react-three/fiber'
import Floor from './components/floor'


export default function MainExperience() {
    
  return (
    <div className='canvas'>
      <Canvas camera={{ position: [0, 2, 15], fov: 30 }}>
        <directionalLight intensity={5} />
        <Floor />
      </Canvas>
    </div>
  )
}