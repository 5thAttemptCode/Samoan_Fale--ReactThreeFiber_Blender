import React, { useRef } from 'react'
import { Center, Grid } from '@react-three/drei'
import { Fale } from '../../../model'
import { useFrame } from '@react-three/fiber'


export default function Floor() {

  const groupRef = useRef()
  
  useFrame(() => {
    groupRef.current.rotation.y += 0.01 * 0.2
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <Grid
          args={[9, 9]} 
          position-y={-1.6} 
          cellColor="white" 
          sectionColor="black" 
        />
      </mesh>
      <mesh rotation-x={Math.PI / -2} position-y={-1.559} >
        <planeGeometry args={[4.3, 2.3]} />
        <meshStandardMaterial color="white"/>
      </mesh>

      <Center>
        <Fale scale={0.5} />
      </Center>
    </group>
  )
}