import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { abs, backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'



function Sticker({ posX, posY, posZ}) {
    // TODO: Given position of the piece, determine what dimensions the sticker should have
    // ...
    return (
      <mesh position={[posX, posY, posZ]}>
        <boxGeometry args={[0.92, 0.92, 0.92]}/>
        <meshStandardMaterial color={{} ? 'orange' : 0x222222} /> 
      </mesh>
    )
}

export default Sticker;