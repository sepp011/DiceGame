import Die from "../Die/Die"
import { useState } from "react";
import { rollVal, sum } from "../../utils";
import './Dice.css'
export default function Dice({diceValuesArr}){
    
 
    return (
       
        <div className="Dice">
            {diceValuesArr.map((val, index)=>(
                <Die key={index} valueRoll={val}/>
            ))}
                       
        </div>
 
    )
}