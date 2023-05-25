import { Environment, Cloud ,Scroll, ScrollControls, SoftShadows ,Plane , Float ,Box} from "@react-three/drei"
import { City } from "./City"
import { Bin } from "./Bin"
import { Bag } from "./Bag"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {  Physics, RigidBody } from "@react-three/rapier";
import Interface from "./Interface"
import Camera from "./Camera"
import { gsap } from "gsap"

const Experience = () => {
  
  const createBag = () => {
    const randomVal = Math.random()
    let obj = { 
    key: 'instance_' + Math.random(),
    position: [Math.random() * 0.3, 2 - Math.random()  , Math.random() * 0.2],
    rotation: [Math.random(), Math.random(), Math.random()],
    scale: [ 1+ randomVal, 1+ randomVal, 1+ randomVal]}
    return obj;
  }

  const [showVisualizationMenu,setShowVisualizationMenu] = useState(false)
  const [data,setData] = useState({
  garbage: [3900,8350,14450,31300,43300,68240,97416,136280,167643,200560],
  years: [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]
  })
  const [maxBagsCount, setMaxBagsCount] = useState(201)
  const [blockClick,setBlockClick] = useState(false)
  const [bags,setBags] = useState( Array.from({length:200}).map(()=>createBag()))
  const [weight,setWeight] = useState(0);
  const binRef = useRef();
  const floatRef = useRef();
  const cameraRef = useRef()

 
  
console.log(binRef.current);

  const  handleWheel =  useCallback((e) => {
    e.preventDefault()
  },[])

  if(showVisualizationMenu){
  window.addEventListener('DOMMouseScroll', handleWheel, false); // older FF
  window.addEventListener('wheel', handleWheel, { passive: false }); // modern desktop
  window.addEventListener('touchmove', handleWheel, { passive: false });
  }
  else {
    window.removeEventListener('DOMMouseScroll', handleWheel, false);
  window.removeEventListener('wheel', handleWheel, { passive: false });
  window.removeEventListener('touchmove', handleWheel, { passive: false });
  }
  


  const addBag = () => {
  if(bags.length<maxBagsCount){
  setBags((bags) => [...bags,createBag()])
}}

const restore = () =>  {
    setBags(bags.slice(0,0))

}

const openVisualization = () => {
 setShowVisualizationMenu(true)
 gsap.to(binRef.current.children[0].rotation,{duration: 2, x: 0 , y: 0,z: 0})
 gsap.to(binRef.current.children[1].children[0].material.color,{duration: 2, r: 1 , g: 1,b: 1})
 restore(bags)
 cameraRef.current.handleVisualization()
}

const displayBags =  id => event  => {
 if(!blockClick){
  setBlockClick(true)
  restore()
  setWeight(0)
  let index = data.years.indexOf(id)
  let number = Math.round(data.garbage[index] /1000)
  let counter = 0;
  setWeight(data.garbage[index])
  const interval = setInterval(()=>{
    addBag()
    counter ++
    if(counter>=number){
      setBlockClick(false)
      clearInterval(interval);
    }
  },100)
}
}

const back = () => {
 setShowVisualizationMenu(false)
 gsap.to(binRef.current.children[0].rotation,{duration: 2, x: 0 , y: 0,z: Math.PI * 1.51})
 gsap.to(binRef.current.children[1].children[0].material.color,{duration: 2, r: 0, g: 0,b: 0})
}

const { config } = {
  enabled: true,
  size: { value: 25, min: 0, max: 100 },
  focus: { value: 0, min: 0, max: 2 },
  samples: { value: 10, min: 1, max: 20, step: 1 }
}


return (<>
<ScrollControls pages={3}>
  <Scroll html style={{ width: '100%'}}>
  <Interface back={back} tonnes={weight} displayBags={displayBags} data={data} showVisualizationMenu={showVisualizationMenu}  openVisualization={openVisualization}></Interface>
  </Scroll>
  <Camera lockcamera={showVisualizationMenu} ref={cameraRef}></Camera>
  </ScrollControls>
  {/* <Box args={[1,1,1]} onClick={()=>{restore(bags)}}></Box> */}
  <Physics>
    <RigidBody>
    <Plane receiveShadow args={[50,50,50]}  rotation={[-Math.PI /2,0 ,0]} position={[0,-0.5,0]}>
      <meshStandardMaterial color={'#ff8c00'}></meshStandardMaterial>
    </Plane>
    </RigidBody>
    {/* <Cloud position={[6, 0, -3]} speed={0.2} opacity={0.3} width={0.1} /> */}
  <Float
  ref={floatRef}
  enabled={!showVisualizationMenu}
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[0, 0.07]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
  >
  <Bin ref={binRef}></Bin>
  <City></City>
  </Float>
  <Bag bags={bags} maxBagsCount={maxBagsCount}></Bag>
  <Environment preset="dawn" />
  <spotLight shadow-mapSize={[4096,4096]} position={[-4, 6, -4]} angle={0.3} penumbra={0.8} castShadow intensity={1} shadow-bias={-0.0001} />
  </Physics>
  <SoftShadows {...config}></SoftShadows>
  </>
//   
)
}
export default Experience