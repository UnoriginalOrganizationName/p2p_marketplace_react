import React, { useContext, useReducer } from "react";

const initialState = {
    url: process.env.HOST,
    token: null,
    email: null
}

const reducer = (state, action) =>{
    let newState;
    switch(action.type){
        case "auth":
            newState = {...state, ...action.payload};
            return newState;
            break;
        default:
            return state;
            break;
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

