import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function City(props) {
const texture = useTexture('./Baked.jpg')
texture.flipY = false
const { nodes, materials } = useGLTF("/city.glb");
  return (
    <group  dispose={null}
    position={[0,-1.81,0]}>
         <RigidBody type="fixed" colliders={false}>
           
      <mesh
        geometry={nodes.Cone003.geometry}
        material={nodes.Cone003.material}
        position={[-0.143, 1.9955, 0.0515]}
      >
        <meshStandardMaterial emissive={'red'} emissiveIntensity={3}></meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.Cone002.geometry}
        material={nodes.Cone002.material}
        position={[-0.0229, 1.71815, -0.02885]}
      >
         <meshStandardMaterial emissive={'white'} emissiveIntensity={3}></meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.Cone001.geometry}
        material={nodes.Cone001.material}
        position={[-0.05, 1.66, 0]}
      >
         <meshStandardMaterial map={texture}></meshStandardMaterial>
      </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/city.glb");