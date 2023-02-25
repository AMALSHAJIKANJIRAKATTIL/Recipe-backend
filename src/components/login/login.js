import React, { useState } from "react";
import { isAuthenticated } from "../../helper/helper";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [redirect, setredirect] = useState(false);
    const url=process.env.REACT_APP_API;

    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

    const HandleClick = () => {
        if (email, password) {
            const isVallid = validateEmail(email);
            if (isVallid) {
                fetch(`${url}/login`, {
                    method: "POST",
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then((res) => res.json()
                ).then((data) => {
                    console.log(data);
                    if (data.error) {
                        alert(data.error)
                    } else {
                        localStorage.setItem("token", JSON.stringify(data.token))
                        localStorage.setItem("user", data.user)
                        setemail("")
                        setpassword("")
                        console.log(isAuthenticated())
                        
                        setredirect(true);
                        
                    }
                })
            } else {
                alert("Please Enter Valid Email");
            }

        } else {
            alert("Please Fill all Fields")
        }
    }

    const performRedirect = () =>{
        if (redirect){
            return <Navigate to="/recipes" />
        }
    }
    return (

        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[blue]">
            {performRedirect()}
            

            <div className="flex justify-center items-center flex-col w-[40%] h-[70%] bg-white drop-shadow-md gap-3	rounded-md	">
            

                <div className="text-center p-3">
                    <h1 className="font-bold text-4xl text-blue-400">Login</h1>
                    <p className="pt-3 font-light text-[gray] text-sm">Enter your credentials to access your account</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="pb-5 ">
                        <input type="email" className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div >
                        <input type="password" className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                        
                    </div>



                </div>
                <div className="pt-3">
                    <button className="bg-blue-500 w-[250px] rounded-lg text-white" onClick={HandleClick}>Sign In</button>
                    <Link to="/register" ><p className="text-center pt-3" >Sign Up</p></Link>
                </div>
                

            </div>
           

        </div>

    )
}

export default Login;