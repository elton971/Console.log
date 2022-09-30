import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { SvgIcon } from '@mui/material';

export const About =()=>{
    return(
        <div className=" flex flex-wrap flex-col justify-center items-center px-28 my-10 gap-10">
            <div className=" ">
                <figure >
                    <img src={"https://avatars.githubusercontent.com/u/82831720?v=4"} alt="foto do perfil" 
                        className="md:h-80 md:w-80 h-60 w-60  rounded-full"
                     />
                </figure>
            </div>
            <div className="flex gap-5 mt-8">
                    <a href="http://">
                        <SvgIcon component={GitHubIcon} inheritViewBox />
                    </a>
                    <a href="http://">
                        <SvgIcon component={LinkedInIcon} inheritViewBox />
                    </a>
                    <a href="http://">
                        <SvgIcon component={YouTubeIcon} inheritViewBox />
                    </a>
                   
            </div>

            <div className="w-[50rem] text-center">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">Developer</h1>
                    <p>
                        Hi, my name is Elton Carlos Dias Cavele, I'm a Web Developer👨‍💻
                        and a final year student of the Computer Engineering course at
                        Instituto Superior de Ciencias e Tecnologia de Moçambique, I love
                        programming, I'm currently learning React native. I'm looking to collaborate on
                        projects and do an internship. you can find me on my social media and you can
                        also help me by accessing my repositories and giving your feedback. Let's code
                        and work together!!!
                    </p>
                </div>
                
            </div>

        </div>
    )
}