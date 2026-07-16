import Piece from './Piece.jsx'
import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Cube() {
    // Create 27 piece objects in a cube shape of 3x3x3
    const allPiecesGroupRef = useRef();
    var gridPositions = [];
    var pieces = [];
    var posY;
    var posX;
    var posZ;

    // Create positions for pieces and stickers
    for (posY = 1; posY >= -1; posY -= 1) {
        for (posZ = 1; posZ >= -1; posZ -= 1) {
            for (posX = 1; posX >= -1; posX -= 1) {
                gridPositions.push([posX, posY, posZ]);
            }
        }
    }
    
    // Return as pieces with those locations
    return (
        <group name='allPieces' ref={allPiecesGroupRef}>
            {gridPositions.map((position, idx) => (
                <Piece key={`box-${idx}`} posX={position[0]} posY={position[1]} posZ={position[2]} />
            ))}
        </group>
        
    );
}

export default Cube;