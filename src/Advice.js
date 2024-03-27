import "./advice.css"
const { useState } = require("react")



const Advice=()=>{
    const[advice,setAdvice]=useState("")
    const[count,setCount]=useState(0)

  async function getAdvice(){
  let result= await fetch("https://api.adviceslip.com/advice")
    let data=await result.json();
    setAdvice(data.slip.advice);
    setCount((e)=>e+1);


 }

    return(
        <div className="advice">
        <h4>{advice}</h4>
        <button onClick={getAdvice}>Get Advice</button>
        <p>you now {count} advice</p>

        </div>
    )
}

export default Advice;