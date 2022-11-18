import {Link, useNavigate} from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";

export const Login=()=>{

    const {loginWithEmailPass}= useContext(AuthGoogleContext);
    const [email,setEmail]=useState('');
    const [passWord,setPassWord]=useState('');

    const router=useNavigate();
    const  login=async ()=>{
        let a= await loginWithEmailPass(email,passWord)
        console.log(a);
        if(a=="get")
        {
            router("/")
        }
        else{
            console.log("eroo");
        }
    }

    return(
        <div >
            <NavBar/>
            <div className="flex justify-center  ">
                <div className=" my-9 w-[40rem]">
                    <div className={"p-5 "}>
                        <div className="mb-10">
                            <h1 className="mb-2 ">
                                <p className={'text-3xl font-semibold'}>Login</p>
                            </h1>
                        </div>
                        <form onSubmit={login}>
                            <div className=" flex flex-col gap-1 mb-5">
                                <label className="text-base font-semibold mb-1 " >Email</label>
                                <input type="email" id="username" placeholder="exemplo@gmail.com"
                                       className=" border-2 p-2 rounded-md  "
                                       onChange={(e)=>{setEmail(e.target.value);}}
                                       formNoValidate
                                />
                            </div>

                            <div className=" flex flex-col gap-1 mb-2">
                                <label className="text-base font-semibold">Password</label>

                                <input type="password" id="password" placeholder="Password"
                                    className=" border-2 p-2 rounded-md"
                                    onChange={(e)=>{setPassWord(e.target.value);}}
                                />
                            </div>

                            <div className=" flex flex-col">
                                <button type="button" onClick={()=>{login()}}
                                        className="bordered text-white rounded-md border-none bg-[#2C974B]  transition" >
                                    Acessar
                                </button>
                                <div className="mt-5 ">
                                    <p  className=" flex  justify-center text-sm">Nao tem conta?

                                        <Link to="/singIn" className="ml-2 text-blue-500"> Crie sua conta aqui.</Link>
                                    </p>
                                    <p className=" flex  justify-center text-sm">Esqueceu sua senha?

                                        <Link to="/singIn" className="ml-2 text-blue-500"> Clique aqui.</Link>
                                    </p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}