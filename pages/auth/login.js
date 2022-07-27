import React from "react";
import { useAppState } from "../../AppState";

const auth = (props) =>{

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    });

    const [userData, setUserData] = React.useState(null);
    const { state, dispatch } = useAppState();
    state;

    React.useEffect(() => {
        if (userData) {
          const { token, user } = userData;
          dispatch({ type: "auth", payload: { token, email: user.email } });
          window.localStorage.setItem(
            "auth",
            JSON.stringify({ token, email: user.email })
          );
          props.history.push("/profile");
        }
      }, [userData]);

    const action ={
        login: () => {
            return fetch(process.env.HOST + "/login", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }).then((response) => response.json());
        }
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        action[type]().then((data) => {
          setUserData(data);
        });    
    }

    return(
        <div>
            <h1 className="page-title">Login</h1>
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input type="email" 
                    class="form-control" 
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div class="mb-3">
                    <input 
                    type="password" 
                    class="form-control" 
                    id="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

        </div>
    )

}

export default auth