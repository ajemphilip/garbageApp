import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { Vector3 } from "three"

const Camera =  forwardRef((props,ref) => {
    const perspectiveCamera = useRef()
    const controlls = useRef()
    const data = useScroll()
    let currentValue = 0;
    const positionArray = [
        {x:-2,y:0.26,z:0} ,
        {x:-0.8,y:-0.3,z:-0.5},
        {x:-3,y:3,z:-0.5}];
    const rotationArray= [
        {x:0,y:0.3,z:0}, 
        {x:-1,y:1.5,z:-0.3},
        {x:0,y:0,z:0}]
    
useImperativeHandle(ref , ()=>({
    handleVisualization : () => {
        gsap.to(perspectiveCamera.current.position,{duration: 2, x: -2 ,y : 0.26 ,z : 0 , ease : "power4"})
        gsap.to(perspectiveCamera.current.position,{duration: 2, x: -2 ,y : 0.26 ,z : 0 , ease : "power4"})
       
    }
}))

useFrame(()=>{
   
scrollY = data.offset * 2;
const newValue = scrollY.toFixed(0)
if(!props.lockcamera){
if(newValue != currentValue){
    currentValue = newValue;
    gsap.to(controlls.current.target,{duration:2,x:rotationArray[currentValue].x ,y : rotationArray[currentValue].y ,z : rotationArray[currentValue].z, ease : "power4"})
    gsap.to(perspectiveCamera.current.position,{duration:2,x:positionArray[currentValue].x ,y : positionArray[currentValue].y ,z : positionArray[currentValue].z, ease : "power4"})
}
}})

return(
    <group>
    <PerspectiveCamera castShadow
    ref={perspectiveCamera}
    makeDefault
    position={[-2,0.26,0]}
    fov={65}
    ></PerspectiveCamera>
    <OrbitControls maxPolarAngle={Math.PI/2} target={[0,0.3,0]} ref={controlls} camera={perspectiveCamera.current} enablePan={props.lockcamera} enableRotate={props.lockcamera} enableZoom={false} enabled={true}></OrbitControls>
    </group>
)
})
export default Camera