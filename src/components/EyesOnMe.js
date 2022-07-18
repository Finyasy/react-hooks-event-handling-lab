// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleFocus(){
        console.log("Good!");
    }

    function handleBlur(){
        console.log("Hey! Eyes on me!");
    }
    return(
        <form onFocus={handleFocus} onBlur={handleBlur} >
            <button>Eyes on me</button>
        </form>
    )
}

export default EyesOnMe;