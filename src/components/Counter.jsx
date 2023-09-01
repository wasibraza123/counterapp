import { useState } from "react";
import Button from "./Button";

function Counter ({initval}){

    const[value, setvalue] = useState(initval);
    function incVal(){
        setvalue((prev)=>prev+1)
    }
    function decValue(){
        setvalue((value)=> value-1)
    }
    function reset(){
        setvalue((0))
    }
    return(
        <>
        <p> This is my counter</p>
        <h1 data-testid = "cnumber">{value}</h1>
        <Button val= "Increment" handleclick = {incVal} cls="btn"/>
        <Button val = "Decrement" handleclick = {decValue} cls = "btn"/>
        <Button val = "Reset" handleclick = {reset} cls = "btn"/>
        </>


    )}

    




export default Counter