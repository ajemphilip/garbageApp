import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, InstancedRigidBodies } from "@react-three/rapier";

  export const Bag = (props) => {
  const { nodes } = useGLTF("/bag.glb");
  var maxBagsCount = props.maxBagsCount;
  const instances = props.bags;
  var rigidBodies = useRef(null);
  

  return (
    <group>
    <InstancedRigidBodies
    ref={rigidBodies}
    instances={instances}
    colliders="cuboid"
  >
    <instancedMesh frustumCulled={false} castShadow args={[nodes.Cube020.geometry, undefined, maxBagsCount]} count={instances.length}>
    <meshStandardMaterial roughness={0} color={'green'}></meshStandardMaterial>
    </instancedMesh>
  </InstancedRigidBodies>
  </group>
  );
}

useGLTF.preload("/bag.glb");
