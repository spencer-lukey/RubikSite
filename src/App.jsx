import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'

// DOCS: https://threejs.org/docs/
// npm install three @react-three/fiber
// npm install @react-three/drai
// npm install leva@0.9.34

function AnimationBox() {

  const boxRef = useRef();
  
  useFrame(() => {
    // Runs repeatedly every frame!
    
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0x00bfff} />
    </mesh>
  )
}

function App() {


  // Returns main rendering for animation!
  return (
    <div id="canvas-container">
      <Canvas> 
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewcube />
        </GizmoHelper>
        <axesHelper args={[7]}/>
        <gridHelper args={[20, 10, 0x0000ff, 0xff0000]}/>
        <OrbitControls />
        <AnimationBox />
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App
