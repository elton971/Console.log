
import { useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";

export const SingIn=()=>{

    const {createAccountEmainPass}=useContext(AuthGoogleContext);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [reapetPassword,setRepeatPassWord]=useState('');

    const [control,setControl]=useState(false);
    const router=useNavigate();

    const test=()=>{
        if(password==reapetPassword)
        {
            if(createAccountEmainPass(email,password))
            {
                router("/login")
            }
        }
        else{
            setControl(true);
        }
    }

    return(
        <div >
            <NavBar/>
            <div className="flex justify-center ">
                <div className=" my-9 w-[40rem]">
                    <div  className={"p-5"}>
                    <div className="mb-2">
                        <h1 className="text-4xl font-bold mb-5">Cadastro</h1>
                    </div>
                    <form onSubmit={test}>
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
                                   onChange={(e)=>{setPassword(e.target.value);}}
                            />
                        </div>

                        <div className=" flex flex-col gap-1 mb-2">
                            <label className="text-base font-semibold">Repita a senha</label>

                            <input type="password" id="passwordR" placeholder="Senha"
                                   className=" border-2 p-2 rounded-md"
                                   onChange={(e)=>{setRepeatPassWord(e.target.value);}}
                            />
                        </div>
                        <div className={'flex flex-col'}>
                        <button type="button" onClick={test}
                                className="bordered text-white rounded-md border-none bg-[#2C974B]  transition">
                            Cadastrar
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}