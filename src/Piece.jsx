import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'
import Sticker from './Sticker.jsx'


function Piece({ posX, posY, posZ}) {

    // Returns a cube given inputs on position
    const boxRef = useRef();

    // Determines whether or not we should group and move piece
    const [isActive, setActive] = useState(false); 


    useFrame(() => {
      // Runs repeatedly every frame!
      
    });


    return (
      <mesh 
        ref={boxRef}
        position={[posX, posY, posZ]}
        onClick={(event) => {
          console.log(key);
          setActive(!isActive)
        }}>
        <boxGeometry args={[0.98, 0.98, 0.98]}/>
        <meshStandardMaterial color={isActive ? 'orange' : 	0x222222} /> 
      </mesh>
    )
    


    // When held down need to group with others based on drag direction

}



export default Piece