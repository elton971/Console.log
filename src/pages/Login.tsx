import {Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from '../contextApi/Context';
import {Footer} from "../components/Footer";
import { validEmail, validPassword } from "../validator/Regex";
import AppBarComponent from "../components/AppBar";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../service/FireBase";
import {gql} from "@apollo/client";
import {Client} from "../service/ApolloService";
import {useAuth} from "../hook/useAuth";

export const Login=()=>{
    
   
    
    const [email,setEmail]=useState('');
    const [passWord,setPassWord]=useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const router=useNavigate();
    const auth = getAuth(app);
    const{setUserName}=useAuth();
    
    const GET_USER_QUERY=gql`
        query {
          userRegistereds(where: {email:"${email}"}) {
            email
            userName
          }
        }
    `
    const validate = async () => {
        if (!validEmail.test(email)) {
            setEmailErr(true);
        }
        if (!validPassword.test(passWord)) {
            setPwdError(true);
        }
        if (!emailErr && !pwdError)
        {
            login();
        }
        
    };
    async function  login()
    {
        signInWithEmailAndPassword(auth, email, passWord)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user
            fetchProducts();
            router("/")
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    const fetchProducts = async () => {
        const  data  = await Client.query({
            query: GET_USER_QUERY,
        });
        console.log(data.data.userRegistereds[0].userName);
        setUserName(data.data.userRegistereds[0].userName);
    }
    
    
    return(
        <div >
            <AppBarComponent/>
            <div className="flex justify-center mt-[5rem] md:mt-[5rem] ">
                <div className=" my-9 w-[40rem]">
                    <div className={"p-5 "}>
                        <div className="mb-10">
                            <h1 className="mb-2 ">
                                <p className={'text-3xl font-semibold'}>Login</p>
                            </h1>
                        </div>
                        <form>
                            <div className=" flex flex-col gap-1 mb-5">
                                <label className="text-base font-semibold mb-1 " >Email</label>
                                <input type="email" id="username" placeholder="exemplo@gmail.com"
                                       className=" border-2 p-2 rounded-md  "
                                       onChange={(e)=>{setEmail(e.target.value);}}
                                       formNoValidate
                                />
                                {emailErr && <li className={'text-red-900'}>Email invalido</li>}
                            </div>

                            <div className=" flex flex-col gap-1 mb-2">
                                <label className="text-base font-semibold">Password</label>

                                <input type="password" id="password" placeholder="Password"
                                    className=" border-2 p-2 rounded-md"
                                    onChange={(e)=>{setPassWord(e.target.value);}}
                                />
                                {pwdError && <li className={'text-red-900'}>A senha deve conter no minímo 6 digitos!</li>}
                                {pwdError && <li className={'text-red-900'}>A senha deve conter no mínimo 1 número e 1 letra</li>}
                            </div>

                            <div className=" flex flex-col">
                                <button type="button" onClick={()=>{validate()}}
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