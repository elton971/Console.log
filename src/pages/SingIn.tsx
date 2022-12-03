
import { useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';
import {Footer} from "../components/Footer";
import AppBarComponent from "../components/AppBar";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from "../service/FireBase";

export const SingIn=()=>{
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [reapetPassword,setRepeatPassWord]=useState('');

    const [control,setControl]=useState(false);
    const router=useNavigate();
    const auth = getAuth(app);
    
    async function createAccountEmainPass() {
        if(password==reapetPassword)
        {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                router("/login")
                return user;
        
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
        else{
            setControl(true);
        }
    }

    return(
        <div >
            <AppBarComponent/>
            <div className="flex justify-center mt-[5rem] md:mt-[5rem] ">
                <div className=" my-9 w-[40rem]">
                    <div  className={"p-5"}>
                    <div className="mb-2">
                        <h1 className="text-4xl font-bold mb-5">Cadastro</h1>
                    </div>
                    <form onSubmit={createAccountEmainPass}>
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
                        <button type="button" onClick={createAccountEmainPass}
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