import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Piece from './Piece.jsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'

// GROUPING PIECES: https://r3f.docs.pmnd.rs/tutorials/how-it-works

// DOCS: https://threejs.org/docs/
// npm install three @react-three/fiber
// npm install @react-three/drai
// npm install leva@0.9.34

function App() {

  // Create 27 piece objects in a cube shape of 3x3x3

  var pieces = [];
  var posY;
  var posX;
  var posZ;
  for (posY = 1; posY >= -1; posY -= 1) {

    // New layer
    for (posZ = 1; posZ >= -1; posZ -= 1) {

      for (posX = 1; posX >= -1; posX -= 1) {
        
      }
    }
  }


  // Returns main rendering for animation!
  return (
    <div id="canvas-container">
      <Canvas> 
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewcube />
        </GizmoHelper>
        <axesHelper args={[10]}/>
        <gridHelper args={[20, 10, 0x222222, 0x222222]}/>
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        {pieces}
        <Piece posX={0} posY={0} posZ={0} />
      </Canvas>
    </div>
  );
}

export default App
