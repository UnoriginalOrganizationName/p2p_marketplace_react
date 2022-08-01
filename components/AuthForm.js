import React, {useState} from "react";
import axios from "axios";
const AuthForm = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const handleSubmit = (e, email, password) => {
        
        e.preventDefault()

        axios.post("http://127.0.0.1:3001/login", {
            user: {
                email: email,
                password: password
            }
        })
        .then(response =>{
            if (response.data.console.errors){
                //setError(response.data.errors)
            }
            else{
                //setError("")
                localStorage.setItem("token", response.data.jwt)
            }
        })
    }

    return(

        <div className="container">
            
            <h1 className="page-title mb-3">{props.state}</h1>

            <form onSubmit={ e => handleSubmit(e, email, password)}>
                <div className="mb-3">
                    <input type='text' 
                    placeholder='Email' 
                    onChange={ e => setEmail(e.target.value)} 
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input type='password' 
                    placeholder='Password' 
                    onChange={ e => setPassword(e.target.value)} 
                    className="form-control"      
                    />
                </div>
                <button type='submit'
                className="btn btn-primary"
                >{props.state}</button>
            </form>
        </div>
    )
}

export default AuthForm