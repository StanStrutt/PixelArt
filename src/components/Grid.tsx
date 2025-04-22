import "./Grid.css"
import { useState } from "react";

const colours = ["rgb(0, 0, 0)", "rgb(255, 85, 85)", "rgb(170, 0, 0)", "rgb(170, 85, 0)", "rgb(255, 255, 85)", "rgb(85, 255, 85)",
    "rgb(0, 170, 0)", "rgb(85, 255, 255)", "rgb(0, 170, 170)", "rgb(0, 0, 170)", "rgb(85, 85, 255)", "rgb(170, 0, 170)", "rgb(255, 85, 255)",
    "rgb(255, 255, 255)", "rgb(170, 170, 170)", "rgb(85, 85, 85)" 
]

export default function Grid () {

    const [gridSize, setGridSize] = useState(16)

    const totalSquares = gridSize * gridSize;

    const [squareColours, setSquareColours] = useState(
        Array(totalSquares).fill("white")
    );

    const handleClick = (index: any) => {
        setSquareColours((prevColours) => {
            const newColours = [...prevColours];
            const currentColourIndex = colours.indexOf(prevColours[index]);
            const nextColour = colours[(currentColourIndex + 1) % colours.length];
            newColours[index] = nextColour;
            return newColours
        })
    }

    const handleGridChange = (e: any) => {
        setGridSize(e.target.value)
    }

    return(
        <>
            <button onClick={() => setSquareColours(Array(totalSquares).fill("white"))}>clear</button>
            <select value={gridSize} onChange={handleGridChange}>
                <option hidden selected>Grid size</option>
                <option value={16}>16x16</option>
                <option value={32}>32x32</option>
                <option value={64}>64x64</option>
            </select>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, 50px)`,
                gap: "1px",
            }}
            >
                {squareColours.map((colour, index) => (
                    <div 
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: colour,
                        cursor: 'pointer',
                    }}
                    />
                ))}
            </div>
        </>
    )
}