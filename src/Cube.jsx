import Piece from './Piece.jsx'
import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Sticker from './Sticker.jsx';

function Cube() {
    // Create 27 piece objects in a cube shape of 3x3x3
    const pieceReferences = [];
    const allPiecesGroupRef = useRef();
    var gridPositions = [];
    var pieces = [];
    var id = 0;
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
                // Create new group of pieces with stickers:
                <group name={`piece-${idx}`} >
                    <Piece key={`box-${idx}`} posX={position[0]} posY={position[1]} posZ={position[2]} />
                    {position[0] ? <Sticker key={id++} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0.05, 0, 0]}/> : null}
                    {position[1] ? <Sticker key={id++} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0, 0.05, 0]}/> : null}
                    {position[2] ? <Sticker key={id++} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0, 0, 0.05]}/> : null}
                </group>
            ))}
        </group>
        
    );
}

export default Cube;