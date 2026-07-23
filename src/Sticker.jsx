import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { abs, backgroundBlurriness } from 'three/tsl'
import { useControls } from 'leva'

function Sticker({ posX, posY, posZ, posFactor}) {
    // TODO: Given position of the piece, determine what dimensions the sticker should have
    // ...


    var color;
    function pickColor() {
        
      if (posFactor[0]) {

        color = posX > 0 ? "red" : 0xff6600;
      } else if (posFactor[1]) {

        color = posY > 0 ? "blue" : "green";
      } else if (posFactor[2]) {

        color = posZ > 0 ? "white" : "yellow";
      }
      
      return color;
    }



    return (
      <mesh position={[posX*(1 + posFactor[0]), posY*(1 + posFactor[1]), posZ*(1 + posFactor[2])]}>
        <boxGeometry args={[0.9, 0.9, 0.9]}/>
        <meshStandardMaterial color={pickColor()} /> 
      </mesh>
    )
}

export default Sticker;