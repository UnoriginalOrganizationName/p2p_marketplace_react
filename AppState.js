import React, { useContext, useReducer } from "react";

const initialState = {
    url: process.env.HOST,
    token: null,
    email: null
}

const reducer = (state, action) =>{
    switch(action.type){
        case "signup":
            fetch(state.url + "/users", {
                method: "post",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload)
            })
            .then(res => res.json())
            .then(user =>{
                return {
                    ...state,
                    token: user.token

                }
            });
            break
            fetch(state.url + "/users", {
                method: "post",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload)
            })
            .then(res => res.json())
            .then(user =>{
                return {
                    ...state,
                    token: user.token,
                    email: user.user.email
                }
            });
            break
            case "login":
                fetch(state.url + "/login", {
                    method: "post",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(action.payload)
                })
                .then(res => res.json())
                .then(user =>{
                    return {
                        ...state,
                        token: user.token,
                        email: user.user.email
                    }
                })
                fetch(state.url + "/users", {
                    method: "post",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(action.payload)
                })
                .then(res => res.json())
                .then(user =>{
                    return {
                        ...state,
                        token: user.token
                    }
                })
        default:
            return state
        break
    }
}

const AppContext = React.createContext(null)

export const AppState = (props) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>
};

export const useAppState = () =>{
    return React.useContext(AppContext)
}

