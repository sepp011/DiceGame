import Die from "../Die/Die"
import { useState } from "react";
import { rollVal, sum } from "../../utils";
import './Dice.css'
export default function Dice(){
    
    const [values, setValues] =useState(Array.from({length: 2}, ()=>rollVal()));
    const rollAgain = () =>{
        setValues(Array.from({length: 2}, ()=>rollVal()));
    }
    
    const win = sum(values) === 7;
    return (
        <main className="Game">
            <h1>Dice Game</h1>
            <h4>Sum 7 to win</h4>
        <div className="Dice">
            <Die valueRoll={values[0]}/>
            <Die valueRoll={values[1]}/>
            
        </div>
        {win?<h1>You Win!!</h1>: null}
        <button onClick={rollAgain}>{win?"Start again": "Roll again"}</button>
        </main>
    )
}