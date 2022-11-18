
import { Button,  SvgIcon } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthGoogleContext} from "../contextApi/Context";

export const NavBar=()=>{

    const {users,signOut}=useContext(AuthGoogleContext);
    function logOut()
    {
        signOut();
    }
    return(
        <header className="bg-white text-black mb-2 border-b-2">
            <nav className="p-5">
                <div className="flex justify-between items-center md:mx-10">
                    <Link to="/">
                        <h1 className='font-bold text-[1.5rem] hoverLink cursor-pointer'>
                            <span className="text-rose-900 ">Console</span>
                             <span className=''>.</span>
                            <span >log</span>
                        </h1>
                    </Link>
                    <div className={'md:hidden'}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)} 
                            className=" text-white"
                            >
                                <SvgIcon component={ListRoundedIcon} inheritViewBox />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="/contact">
                                    Contact
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                    </PopupState>
                    </div>

                    {
                        users ? (
                            <div  className={'hidden md:flex '}>
                                <button onClick={logOut}>
                                    <p className={'font-bold'}>Log out</p>
                                </button>
                            </div>
                        ):(
                            <div  className={'hidden gap-3 md:flex '}>
                                <div>
                                    <Link to="/login">
                                        <p className={'font-bold'}>Login</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/singin">
                                        <p className={'font-bold'}>Cadastrar</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    }

                </div>
            </nav>
        </header>
    )
}