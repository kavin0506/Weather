import { useState } from "react";
import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { addData, submit } from "./LoginSlice";
const Form=()=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[dob,setDob]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");

    let dispatch=useDispatch();
    let data=useSelector((state)=>state.login.bioData);
    return(
        <div className="flex">
            <input type="text" value={name} placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={age} placeholder="Enter Your Age" onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" value={dob} placeholder="Enter Your DOB" onChange={(e)=>setDob(e.target.value)}/>
            <input type="text" value={email} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" value={phone} placeholder="Enter Your PhoneNumber " onChange={(e)=>setPhone(e.target.value)}/>
            <button onClick={()=>dispatch(addData({name,age,dob,email,phone}))}>Submit</button>
           <div className="show">
                <p>Name:{data.name}</p>
                <p>Age:{data.age}</p>
                <p>DOB:{data.dob}</p>
                <p>Email:{data.email}</p>
                <p>PhoneNUmber:{data.phone}</p>
           </div>
        </div>
    )
}

export default Form;