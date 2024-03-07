import './Die.css'
import Dot from './dot/Dot'
export default function Die({valueRoll}){
    const dots = () => {
        
            return Array.from({length: valueRoll}, (val, index)=> <Dot key={index}/>)
   
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