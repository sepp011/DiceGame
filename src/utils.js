const rollVal =()=>{
    return Math.floor(Math.random()*6)+1;
}

const sum = (valuesArr) =>{
    return valuesArr.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
}

export {rollVal, sum}