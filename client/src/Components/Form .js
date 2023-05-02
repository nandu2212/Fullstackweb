import React, { useState } from "react"
import Table from "./Data"

const Form=()=>{
const usercontext=React.createContext()
    const [user,setUser]=useState({
        name:"",
        category:'',
        price:""
    })
    const {name,category,price}=user
    const eventhandler=(e)=>{
setUser({...user,[e.target.name]:[e.target.value]})
    }
  
    return(
        <>
        <input type='text' placeholder='Name of grocery' name="name" value={name} onChange={eventhandler}/><br/>
        <input type='text' placeholder='category of grocery' name='category' value={category} onChange={eventhandler}/><br/>
        <input type='text' placeholder='price of grocery' name="price" value={price} onChange={eventhandler}/><br/>
        <button >Submit</button>
        <usercontext.Provider value={user}>
                <Table value={'checking'}/>
                 </usercontext.Provider>
        </>
    )
}
export default Form;