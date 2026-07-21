import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { abs, backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'



function Sticker({ posX, posY, posZ, posFactor}) {
    // TODO: Given position of the piece, determine what dimensions the sticker should have
    // ...
    return (
      <mesh position={[posX + (posX*posFactor[0]), posY + (posY*posFactor[1]), posZ + (posZ*posFactor[2])]}>
        <boxGeometry args={[0.9, 0.9, 0.9]}/>
        <meshStandardMaterial color={{} ? 'orange' : 0x222222} /> 
      </mesh>
    )
}

export default Sticker;