import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import MyLoader from './UI/MyLoader'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Canvas  shadows>
  <fog attach="fog" args={['#ff8c00', 3, 20]} />
  <color attach="background" args={['#ff8c00']} />
    <Suspense fallback={null}>
    <Experience/>
    </Suspense>
    </Canvas>
    <MyLoader></MyLoader>
  </>
  
)
