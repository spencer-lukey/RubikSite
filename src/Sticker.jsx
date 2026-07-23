import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { abs, backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'

function Sticker({ posX, posY, posZ, posFactor}) {
    // TODO: Given position of the piece, determine what dimensions the sticker should have
    // ...
    function pickColor() {
        const colors = ["red", "orange", "blue", "green", "white", "yellow"];
        var idx = 0;
        if (posFactor[0]) {
            
        } else if (posFactor[1]) {

        } else if (posFactor[2]) {

        }
    }



    return (
      <mesh position={[posX*(1 + posFactor[0]), posY*(1 + posFactor[1]), posZ*(1 + posFactor[2])]}>
        <boxGeometry args={[0.9, 0.9, 0.9]}/>
        <meshStandardMaterial color={pickColor()} /> 
      </mesh>
    )
}

export default Sticker;