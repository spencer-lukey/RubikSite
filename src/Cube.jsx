import Piece from './Piece.jsx'
import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Sticker from './Sticker.jsx';

function Cube() {
    // Create 27 piece objects in a cube shape of 3x3x3
    const pieceReferences = useRef([]); // Creates array of references for all 27 pieces
    const allPiecesGroupRef = useRef(); 
    const pivotRef = useRef();
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
        <group name='allPieces' ref={allPiecesGroupRef} onPointerMissed={console.log("miss")}>
            {gridPositions.map((position, idx) => (

                // Create new group of pieces with 0-3 stickers:
                <group 
                    name={`piece-${idx}`}
                    key={`piece-${idx}`}
                    position={[position[0], position[1], position[2]]}
                    ref={(currPiece) => { pieceReferences.current[idx] = currPiece}}
                > 

                    {/* Create the piece with position given */}
                    <Piece key={`box-${idx}`} posX={position[0]} posY={position[1]} posZ={position[2]} />

                    {/* Decide whether or not we need a sticker on each side of an OUTWARD FACING piece (eg. x, y, z value != 0) */}
                    {position[0] ? <Sticker key={idx} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0.07, 0, 0]}/> : null}
                    {position[1] ? <Sticker key={idx} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0, 0.07, 0]}/> : null}
                    {position[2] ? <Sticker key={idx} posX={position[0]} posY={position[1]} posZ={position[2]} posFactor={[0, 0, 0.07]}/> : null}

                </group>
            ))}

            {/* Empty group to be used for rotating pieces in a layer */}
            <group name="pivotLayer" ref={pivotRef} />

        </group>
        
    );
}

export default Cube;