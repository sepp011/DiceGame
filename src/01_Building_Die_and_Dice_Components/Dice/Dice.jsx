import Die from "../Die/Die"
import { useState } from "react";

export default function Dice(){
    const rollVal =()=>{
        return Math.floor(Math.random()*6)+1;
    }
    const [values, setValues] =useState(Array.from({length: 2}, ()=>rollVal()));
    const rollAgain = () =>{
        setValues(Array.from({length: 2}, ()=>rollVal()));
    }
    const sum = () =>{
        return values.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
    }
    const win = sum() === 7;
    return (
        <main className="Game">
            <h1>Dice Game - Sum 7 to win</h1>
        <div className="Dice">
            <Die valueRoll={values[0]}/>
            <Die valueRoll={values[1]}/>
            {win?<h1>You Win!!</h1>: null}
        </div>
        <button onClick={rollAgain}>{win?"Start again": "Roll again"}</button>
        </main>
    )
}