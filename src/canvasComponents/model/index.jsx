import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useToggledGroups } from '../../context/groupContext'


export function Fale( props ) {

  const { nodes } = useGLTF('/fale.gltf')

    // State to manage the hover effect
    const [ hoveredGroup, setHoveredGroup ] = useState(null)
    const { toggledGroups } = useToggledGroups()

    // Function to create a material based on the hover state
    const getMaterial = (group) =>
      new THREE.MeshBasicMaterial({
        wireframe: !toggledGroups[group],
        color: toggledGroups[group] ? "#568de6" : "#666",
      })

  return (
    <group {...props} dispose={null}>
      {/* Floor */}
      <group  onPointerOver={() => setHoveredGroup('floor')}
        onPointerOut={() => setHoveredGroup(null)}>
        <mesh geometry={nodes.Cube.geometry} material={getMaterial('floor')} position={[0, 1.171, 0]} scale={[4.215, 0.153, 2.306]} />
      </group>

      {/* Pile */}
      <group  onPointerOver={() => setHoveredGroup('posts')}
        onPointerOut={() => setHoveredGroup(null)}>
        <mesh geometry={nodes.Cylinder.geometry} material={getMaterial('posts')} position={[3.851, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={getMaterial('posts')} position={[-3.852, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={getMaterial('posts')} position={[3.6, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder004.geometry} material={getMaterial('posts')} position={[2.307, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder005.geometry} material={getMaterial('posts')} position={[1, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={getMaterial('posts')} position={[-0.315, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={getMaterial('posts')} position={[-1.616, 2.619, -1.961]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={getMaterial('posts')} position={[3.851, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder009.geometry} material={getMaterial('posts')} position={[-3.852, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder010.geometry} material={getMaterial('posts')} position={[3.6, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder011.geometry} material={getMaterial('posts')} position={[2.307, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder012.geometry} material={getMaterial('posts')} position={[1, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder013.geometry} material={getMaterial('posts')} position={[-0.315, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder014.geometry} material={getMaterial('posts')} position={[-1.616, 2.619, 1.951]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder002.geometry} material={getMaterial('posts')} position={[3.851, 2.619, 0.643]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder015.geometry} material={getMaterial('posts')} position={[3.851, 2.619, -0.69]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder016.geometry} material={getMaterial('posts')} position={[-3.83, 2.619, 0.643]} scale={[0.148, 1.166, 0.148]} />
        <mesh geometry={nodes.Cylinder017.geometry} material={getMaterial('posts')} position={[-3.83, 2.619, -0.69]} scale={[0.148, 1.166, 0.148]} />
      </group>

      {/* Roof */}
      <group onPointerOver={() => setHoveredGroup('roof')}
        onPointerOut={() => setHoveredGroup(null)}>
        <mesh geometry={nodes.Plane.geometry} material={getMaterial('roof')} position={[0, 3.714, 0]} scale={[4.757, 1, 2.663]} />
      </group>

      {/* Rooftruss */}
      <group  onPointerOver={() => setHoveredGroup('rooftruss')}
        onPointerOut={() => setHoveredGroup(null)}>
        <mesh geometry={nodes.Cube001.geometry} material={getMaterial('rooftruss')} position={[0, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube002.geometry} material={getMaterial('rooftruss')} position={[-1.319, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube003.geometry} material={getMaterial('rooftruss')} position={[-2.619, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube004.geometry} material={getMaterial('rooftruss')} position={[1.309, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube005.geometry} material={getMaterial('rooftruss')} position={[2.608, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube006.geometry} material={getMaterial('rooftruss')} position={[3.858, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube007.geometry} material={getMaterial('rooftruss')} position={[-3.851, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube008.geometry} material={getMaterial('rooftruss')} position={[0, 3.841, -1.928]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[0.056, 0.056, 3.808]} />
        <mesh geometry={nodes.Cube009.geometry} material={getMaterial('rooftruss')} position={[0, 3.841, 1.923]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[0.056, 0.056, 3.808]} />
        <mesh geometry={nodes.Cube010.geometry} material={getMaterial('rooftruss')} position={[-3.857, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.981]} />
        <mesh geometry={nodes.Cube011.geometry} material={getMaterial('rooftruss')} position={[3.86, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube012.geometry} material={getMaterial('rooftruss')} position={[2.603, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube013.geometry} material={getMaterial('rooftruss')} position={[2.608, 3.899, 0]} scale={[0.073, 0.073, 2.1]} />
        <mesh geometry={nodes.Cube014.geometry} material={getMaterial('rooftruss')} position={[1.307, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube015.geometry} material={getMaterial('rooftruss')} position={[0, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube016.geometry} material={getMaterial('rooftruss')} position={[-1.315, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube017.geometry} material={getMaterial('rooftruss')} position={[-2.616, 3.842, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 1.984]} />
        <mesh geometry={nodes.Cube018.geometry} material={getMaterial('rooftruss')} position={[0, 5.545, 0.853]} rotation={[2.591, Math.PI / 2, 0]} scale={[0.056, 0.056, 2.707]} />
        <mesh geometry={nodes.Cube019.geometry} material={getMaterial('rooftruss')} position={[0, 5.545, -0.853]} rotation={[2.151, Math.PI / 2, 0]} scale={[0.056, 0.056, 2.707]} />
        <mesh geometry={nodes.Cube020.geometry} material={getMaterial('rooftruss')} position={[-2.618, 5.632, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 0.786]} />
        <mesh geometry={nodes.Cube021.geometry} material={getMaterial('rooftruss')} position={[2.631, 5.632, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.056, 0.056, 0.786]} />
      </group>
    </group>
  )
}

useGLTF.preload('/fale.gltf')
