import "./Grid.css"
import { useState } from "react";
import Cell from "./Cell";


export default function DrawingTool () {

    const [gridSize, setGridSize] = useState(16);

    const totalSquares = gridSize * gridSize;

    const handleGridChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGridSize(Number(e.target.value));
    };

    return (
        <>
            {/* <button onClick={() => setSquareColour("white")}>clear</button> */}
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
            }}>
                {Array.from({ length: totalSquares }).map((_, index) => (
                    <Cell key={index}/>
                ))}
            </div>
        </>
    );
}