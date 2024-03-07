import { useState } from "react";
import Dice from "./Dice/Dice";
import { rollVal, sum } from "../utils";
import Button from "../Button";

export default function LuckyN({numOfDice, sumToWin}){
    const [values, setValues] = useState(Array.from({length: numOfDice}, () => rollVal()));
    const rollAgain = () =>{
        setValues(Array.from({length: numOfDice}, () => rollVal()));
    }
    const win = sum(values) === sumToWin;
    return(
        <main className="Game">
            <h1>Dice Game</h1>
            <h4>Sum {sumToWin} to win</h4>
            <Dice diceValuesArr = {values}/>
            {win?<h1>You Win!!</h1>: null}
            <Button stateUpdateFunc = {rollAgain} didWin={win}/>
        </main>
    )
}