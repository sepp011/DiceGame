import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './01_Building_Die_and_Dice_Components/Die/Die'
import Dice from './01_Building_Die_and_Dice_Components/Dice/Dice'
import LuckyN from './01_Building_Die_and_Dice_Components/LuckyN'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LuckyN numOfDice={3} sumToWin={13}/>
     </>
  )
}

export default App
