import "./DrawingTool.css"
import { useState } from "react";
import Cell from "./Cell";

export default function DrawingTool () {
    const [gridSize, setGridSize] = useState<number>(16);
    const [show, setShow] = useState<boolean>(true)

    const totalSquares = gridSize * gridSize;

    const handleGridChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGridSize(Number(e.target.value));
    };

    const forceRemount = () => {
        setShow(false);
        setTimeout(() => {
            setShow(true);
        }, 1000);
    }

    return (
        <> 
            {show && (
                <>
                    <button onClick={forceRemount}>clear</button>
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
            )}
            {!show && (
                <h1>Loading...</h1>
            )}
        </>
    );
}
