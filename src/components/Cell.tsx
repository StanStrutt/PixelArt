import { useState } from "react";

const COLOURS = [
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)",
    "rgb(255, 85, 85)",
    "rgb(170, 0, 0)",
    "rgb(170, 85, 0)",
    "rgb(255, 255, 85)",
    "rgb(85, 255, 85)",
    "rgb(0, 170, 0)",
    "rgb(85, 255, 255)",
    "rgb(0, 170, 170)",
    "rgb(0, 0, 170)",
    "rgb(85, 85, 255)",
    "rgb(170, 0, 170)",
    "rgb(255, 85, 255)",
    "rgb(170, 170, 170)",
    "rgb(85, 85, 85)",
];

export default function Cell () {
    const [squareColour, setSquareColour] = useState<string>("rgb(255, 255, 255)");

    const handleClick = () => {
        setSquareColour((prevColour) => {
            const currentColourIndex = COLOURS.indexOf(prevColour);
            const nextColour = COLOURS[(currentColourIndex + 1) % COLOURS.length];
            return nextColour;
        });
    };

    return (
        <div 
            onClick={() => handleClick()}
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: squareColour,
                cursor: "pointer",
            }}
        />
    );
}
