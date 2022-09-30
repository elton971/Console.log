
import { SvgIcon } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';

export const Login=()=>{

    const {signInGoogle}= useContext(AuthGoogleContext);
    return(
        <div className="flex justify-center items-center mt-2">
            <div className="">
                
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold ">Login</h1>
                    </div>
                    <div className=" flex flex-col gap-1 mb-5">
                        <label className="text-lg font-bold" >Email</label>
                        <input type="email" id="username" placeholder="exemplo@gmail.com" 
                            className=" border-b-2 outline-none py-2" />
                    </div>

                    <div className=" flex flex-col gap-1 mb-2">
                        <label className="text-lg font-bold">Password</label>
                        <input type="password" id="password" placeholder="Password" 
                        className=" border-b-2 outline-none py-2"/>
                    </div>

                    <div className=" flex flex-col">
                        <a href="http://" className="bordered text-white  border-none bg-gray-500 hover:bg-gray-700 transition" >
                            Registrar
                        </a>
                        <button
                             onClick={()=>{signInGoogle()}} 
                            className="bordered" >Continuar com Google   <SvgIcon component={GoogleIcon} inheritViewBox />
                         </button>
                        <button  className="bordered  bg-blue-600" >Continuar com Facebbok   <SvgIcon component={FacebookIcon} inheritViewBox /></button>

                        <p className="mt-5">Nao tem conta? faça o <strong className="underline"><Link to="/singIn">Sing In
                                </Link>
                            </strong> 
                        </p>
                    </div>

              
            </div>
        </div>
    )
}