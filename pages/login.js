import React, {useState} from "react";
import AuthForm from "../components/AuthForm";

const login = (props) =>{

  return(
    <div>
      <AuthForm endpoint={"/login"} state={"Sign In"}></AuthForm>
    </div>
  )
}

export default login