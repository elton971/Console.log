import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import {useContext} from "react";
import {AuthGoogleContext} from "../contextApi/Context";

export const Comment=(props:any)=> {

    const {image, name, user} = useContext(AuthGoogleContext);
    return (
        <div>
            {
                props.comment.map((element:string,index:number)=>{
                    return(
                        <div className={'flex mb-5'} key={index}>
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton>
                                        <Avatar src={`${image}`}/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div>
                                <p className={'text-[1rem]'}>{name? name : "Anonimo"}</p>
                                <p className={'text-gray-400'}>{element}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
