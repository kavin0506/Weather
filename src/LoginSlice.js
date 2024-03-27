import { createSlice } from "@reduxjs/toolkit";


const initialState={
   bioData:{ 
    name:"",
    age:0,
    dob:0,
    email:"",
    phone:""}


};

const LoginSlice=createSlice({
    name:"slice",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.bioData=action.payload
        },
        defaultValue:(state,action)=>{
            state.bioData={
                name:"",
                age:"",
                dob:"",
                email:"",
                phone:""
            }
        }

    }
})

export const {defaultValue,addData}=LoginSlice.actions;
export default  LoginSlice.reducer;