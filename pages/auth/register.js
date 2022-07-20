import AuthForm from "../../components/AuthForm";

const register = (props) =>{

    const submitUser= async (event) => {
        event.preventDefault();
        const res = await fetch(`${process.env.HOST}/signup`)
        
    }

    return(
        <div>
            <h1 className="page-title">Sign Up</h1>
        <AuthForm {...submitUser}></AuthForm>
        </div>    )

}

export default register