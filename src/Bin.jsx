import React, { forwardRef, useRef } from "react";
import { useGLTF , Float, MeshTransmissionMaterial } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
export const Bin = forwardRef((props,ref) => {
  const { nodes } = useGLTF("/bin.glb");
  return (
    <group ref={ref} position={[0, -0.46, 0]} dispose={null}>
        <mesh
          castShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[0.47, 1.09, 0]}
          rotation={[0, 0, Math.PI * 1.51]} 
          // 1.51
        >
          <meshPhysicalMaterial roughness={1} color={'black'} ></meshPhysicalMaterial>
        </mesh>
        <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
        >
       <MeshTransmissionMaterial roughness={0.1} color={'#000000'} background={'#000000'} />
        </mesh>
        </RigidBody>
        <mesh
          castShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={nodes.Cylinder005_1.material}
        >
          <meshStandardMaterial roughness={0} metalness={1} color={'white'}></meshStandardMaterial>
        </mesh>
     
    </group>
  );
})

useGLTF.preload("/bin.glb");
