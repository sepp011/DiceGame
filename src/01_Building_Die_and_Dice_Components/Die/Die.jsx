import './Die.css'
import Dot from './dot/Dot'
export default function Die({valueRoll}){
    const dots = () => {
        for (let i=1; i<=valueRoll; i++){
            return Array.from({length: valueRoll}, ()=> <Dot />)
        }
    }
    const dieClassName = `Die face-${valueRoll}`;
    return(
        <>
        <div className='DieContainer'>
        <div className={dieClassName}>{dots()}</div>
        </div>
        </>
    )
}