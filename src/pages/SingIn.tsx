
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';

export const SingIn=()=>{

    const {createAccountEmainPass}=useContext(AuthGoogleContext);
    const [email,setEmail]=useState('');
    const [passWord,setPassWord]=useState('');

    const test=()=>{
        createAccountEmainPass(email,passWord);
    }
   
    return(
        <div className="flex justify-center items-center mt-12">
            <div className="">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold mb-5">Sing In</h1>
                    </div>
                    <div className=" flex flex-col gap-1 mb-5">
                        <label className="text-lg font-bold" >Email</label>
                        <input type="email" id="username" placeholder="exemplo@gmail.com" 
                            className=" border-b-2 outline-none py-2" 
                            onChange={(e)=>{setEmail(e.target.value);}}    
                        />
                    </div>

                    <div className=" flex flex-col gap-1 mb-5">
                        <label className="text-lg font-bold">Password</label>
                        <input type="password" id="password" placeholder="Password" 
                            className=" border-b-2 outline-none py-2"
                            onChange={(e)=>{setPassWord(e.target.value);}}
                        />
                    </div>

                    <div className=" flex flex-col">
                        <Link to="/" onClick={test} className="bordered text-white  border-none shadow-md shadow-black bg-gray-500 hover:bg-gray-700 transition" >
                            Regitrar
                        </Link>
                    </div>
            </div>
        </div>
    )
}