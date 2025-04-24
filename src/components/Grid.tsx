import { useState } from "react";
import "./Grid.css"

const colours = ["rgb(0, 0, 0)", "rgb(255, 85, 85)", "rgb(170, 0, 0)", "rgb(170, 85, 0)", "rgb(255, 255, 85)", "rgb(85, 255, 85)",
    "rgb(0, 170, 0)", "rgb(85, 255, 255)", "rgb(0, 170, 170)", "rgb(0, 0, 170)", "rgb(85, 85, 255)", "rgb(170, 0, 170)", "rgb(255, 85, 255)",
    "rgb(255, 255, 255)", "rgb(170, 170, 170)", "rgb(85, 85, 85)" 
]

export default function Grid () {

    const [squareColour, setSquareColour] = useState(["white"]);

    const handleClick = (index: number) => {
        setSquareColour((prevColour) => {
            const newColour = [...prevColour];
            const currentColourIndex = colours.indexOf(prevColour[index]);
            const nextColour = colours[(currentColourIndex + 1) % colours.length];
            newColour[index] = nextColour;
            return newColour
        })
    }


    
    return(
        <>
            {squareColour.map((colour, index) => (
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
        </>
    )
}