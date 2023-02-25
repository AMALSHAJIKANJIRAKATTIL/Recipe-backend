import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [redirect, setredirect] = useState(false);

    const url=process.env.REACT_APP_API;
    const [checked,setChecked]=useState(false)

    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

    const validatePassword = (password) => {
        let error = '';

        if (!password) {
            error = 'Password is required';
        } else if (password.length < 8) {
            error = 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(password)) {
            error = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(password)) {
            error = 'Password must contain at least one lowercase letter';
        } else if (!/\d/.test(password)) {
            error = 'Password must contain at least one number';
        }
        return error;
    }

    const HandleClick = () => {

        if(checked){

        if (email, password, Confirm) {
            const isVallid = validateEmail(email);
            const isPasswd = validatePassword(password);
            if (isVallid) {
                if (isPasswd !== "") {
                    alert(isPasswd)
                }
                else {
                    if (password === Confirm) {
                        fetch(`${url}/register`, {
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
                                setemail("")
                                setpassword("")
                                setConfirm("")
                                alert(data.message)
                                setredirect(true)

                            }
                        })
                    }else {
                        alert("Password and confirm password must be same")
                    }

                }
            } else {
                alert("Please enter a valid email")
            }
        } else {
            alert("Please Fill all Fields")
        }
    }
    else{
        alert("Agree to our terms and conditions ")
    }
    }
    const performRedirect = () =>{
        if (redirect){
            return <Navigate to="/" />
        }
    }
    return (

        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[blue]">
            {performRedirect()}
            

            <div className="flex justify-center items-center flex-col w-[40%] h-[70%] bg-white drop-shadow-md gap-3	rounded-md	">
                

                <div className="text-center p-3">
                    <h1 className="font-bold text-4xl text-blue-400">SignUp</h1>
                    <p className="pt-3 font-light text-[gray] text-sm">Create New Account</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <input type="email" className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="pt-3">
                        <input type='password' className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                    </div>
                    <div className="pt-3">
                        <input type='password' className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Confirm Password" onChange={(e) => { setConfirm(e.target.value) }} value={Confirm} />
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <input type={'checkbox'} value={checked} onChange={()=>setChecked(!checked)}></input><span className="text-[grey] text-sm ml-2">I agree to the terms and conditions</span>
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-blue-500 w-[250px] rounded-lg text-white" onClick={HandleClick}>Sign Up</button>
                </div>
                

            </div>
            

        </div>

    )
}

export default SignUp;