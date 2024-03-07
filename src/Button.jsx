

export default function Button({stateUpdateFunc, didWin}){
    
    return(
    <button onClick={stateUpdateFunc}>{didWin?"Start again": "Roll again"}</button>
    )
}