import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import {useState} from "react";
import {useAuth} from "../hook/useAuth";

export const Comment=(props:any)=> {
	const { user } = useAuth()
	const [imagem,setImagem]=useState("");
	
	return (
		<div>
			{
				props.comment.map((element:string,index:number)=>{
					return(
						<div className={'flex mb-5'} key={index}>
							<div>
								<Tooltip title="Open settings">
									<IconButton>
										<Avatar src={`${imagem}`}/>
									</IconButton>
								</Tooltip>
							</div>
							<div>
								<p className={'text-[1rem]'}>{user ? user.name : "Anonimo"}</p>
								<p className={'text-gray-400'}>{element}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}
