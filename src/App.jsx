import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cube from './Cube.jsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'

// GROUPING PIECES: https://r3f.docs.pmnd.rs/tutorials/how-it-works

// DOCS: https://threejs.org/docs/
// npm install three @react-three/fiber
// npm install @react-three/drai
// npm install leva@0.9.34

function App() {

  // Returns main rendering for animation!
  return (
    <div id="canvas-container">
      <Canvas> 
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewcube />
        </GizmoHelper>
        
        <OrbitControls 
          minDistance={5}
          maxDistance={5}
        />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Cube />
      </Canvas>
    </div>
  );
}

export default App
