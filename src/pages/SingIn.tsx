
import { SvgIcon } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

export const SingIn=()=>{
    return(
        <div className="flex justify-center items-center mt-12">
            <div className="">
                <form action="">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold mb-5">Sing In</h1>
                    </div>
                    <div className=" flex flex-col gap-1 mb-5">
                        <label className="text-lg font-bold" >Email</label>
                        <input type="email" id="username" placeholder="exemplo@gmail.com" 
                            className=" border-b-2 outline-none py-2" />
                    </div>

                    <div className=" flex flex-col gap-1 mb-5">
                        <label className="text-lg font-bold">Password</label>
                        <input type="password" id="password" placeholder="Password" 
                        className=" border-b-2 outline-none py-2"/>
                    </div>

                    <div className=" flex flex-col">
                        <a href="http://" className="bordered text-white  border-none shadow-md shadow-black bg-gray-500 hover:bg-gray-700 transition" >Registrar</a>
                    </div>

                </form>
            </div>
        </div>
    )
}