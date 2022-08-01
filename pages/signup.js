import React, {useState} from "react";
import AuthForm from "../components/AuthForm";

const register = (props) =>{

  return(
    <div>
      <AuthForm endpoint={"/users"} state={"Sign Up"}></AuthForm>
    </div>
  )
    

}

export default register