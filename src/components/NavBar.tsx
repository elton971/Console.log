
import { Button, IconButton,  SvgIcon } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import React from 'react';
import { Link } from 'react-router-dom';
export const NavBar=()=>{
    return(
        <header className="bg-white text-black border-b-8 ">
            <nav className="p-5">
                <div className="flex justify-between  md:mx-10">
                    <Link to="/">
                        <h1 className='font-bold text-[1.5rem] hoverLink cursor-pointer'>
                            <span className="text-rose-900 ">Console</span>
                             <span className=''>.</span>
                            <span >log</span>
                        </h1>
                    </Link>
                    <div>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)} 
                            className=" text-white"
                            >
                                <SvgIcon component={ListRoundedIcon} inheritViewBox />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Home</MenuItem>
                                <MenuItem onClick={popupState.close}>About</MenuItem>
                                <MenuItem onClick={popupState.close}>Contact</MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                    </PopupState>
                    </div>
                </div>
            </nav>
        </header>
    )
}