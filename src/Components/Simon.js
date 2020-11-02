import React, { useCallback, useEffect, useState } from "react";
const baseButtons = {
    1: "game-pad-button",
    2: "game-pad-button",
    3: "game-pad-button",
    4: "game-pad-button",
    5: "game-pad-button",
    6: "game-pad-button",
    7: "game-pad-button",
    8: "game-pad-button",
    9: "game-pad-button"
}

function Simon () {

    const [buttons, setButtons] = useState({...baseButtons})
    const [series, setSeries] = useState(Array.from({length: 20}, () => Math.ceil(Math.random()*9)))
    const [gameCurrent, setGameCurrent] = useState(0)
    const [going, setGoing] = useState(false)
    const [myTimeout,setMyTimeout] = useState()

    
    const colorChange = (number) => {
        
        setButtons({...buttons, [number]:"game-pad-button clicked"})
        setTimeout(() => setButtons({...buttons, [number]:"game-pad-button"}) ,300)
    }


    


    return (
        <div className={"keypad"}>
            Current:{gameCurrent}
            <div className={"first row"}>
                <div className={buttons[1]} onClick={()=>colorChange(1)} /> 
                <div className={buttons[2]} onClick={()=>colorChange(2)} /> 
                <div className={buttons[3]} onClick={()=>colorChange(3)} /> 
            </div>
            <div className={"second row"}>
                <div className={buttons[4]} onClick={()=>colorChange(4)} /> 
                <div className={buttons[5]} onClick={()=>colorChange(5)} /> 
                <div className={buttons[6]} onClick={()=>colorChange(6)} /> 
            </div>
            <div className={"third row"}>
                <div className={buttons[7]} onClick={()=>colorChange(7)} /> 
                <div className={buttons[8]} onClick={()=>colorChange(8)} /> 
                <div className={buttons[9]} onClick={()=>colorChange(9)} /> 
            </div>
            <button onClick={playSeries}>Play</button>
        </div>
    )
}

export default Simon