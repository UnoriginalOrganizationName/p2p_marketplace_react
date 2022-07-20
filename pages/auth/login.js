import AuthForm from "../../components/AuthForm";

const login = (props) =>{

    const submitUser= async (event) => {
        event.preventDefault();
        const res = await fetch(`${process.env.HOST}/login`)
        
    }

    return(
        <div>
            <h1 className="page-title">Sign In</h1>
        <AuthForm {...submitUser}></AuthForm>
        </div>
    )

}

export default login