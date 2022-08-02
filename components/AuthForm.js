import React, {useState} from "react";
import axios, { Axios } from "axios";
import nextConfig from "../next.config";
import { useRouter } from "next/router";

const AuthForm = (props) =>{

    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const handleSubmit = async (e, email, password) => {
        
        e.preventDefault()

        const url = process.env.NEXT_PUBLIC_API_URL

        await fetch(url + props.endpoint, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res =>{
            if (res.status === 200 || res.status === 201){
                router.push('/profile')
            }
            else{
                return(
                    <div></div>
                )
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