import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {Link} from "react-router-dom";
import PopupState from "material-ui-popup-state";
import {AuthGoogleContext} from "../contextApi/Context";
import {useContext} from "react";

function AppBarComponent() {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { image,name,user,setUser}=useContext(AuthGoogleContext);

    function logOut()
    {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className={'flex items-center '}>
                        <div className={'flex items-center justify-center'}>
                            <CopyrightIcon sx={{ mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                            >
                                <Link to="/">
                                    <h1 className='font-bold text-[1.5rem] hoverLink cursor-pointer'>
                                        <span className="text-rose-900 ">Console</span>
                                        <span className=''>.</span>
                                        <span >log</span>
                                    </h1>
                                </Link>
                            </Typography>
                        </div>

                        <div className={'fixed right-5 '}>
                        {
                            user ? (
                            <div >
                                <Box sx={{ flexGrow: 0 }}>
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Tooltip title="Open settings">
                                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                        <Avatar  src={`${image}`} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Menu
                                                    sx={{ mt: '45px' }}
                                                    id="menu-appbar"
                                                    anchorEl={anchorElUser}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={Boolean(anchorElUser)}
                                                    onClose={handleCloseUserMenu}
                                                >
                                                    <MenuItem onClick={popupState.close}>
                                                        <Link to="/">
                                                            Home
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem onClick={popupState.close}>
                                                        <Link to="/contact">
                                                            Contacto
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem onClick={popupState.close}>
                                                        <button onClick={logOut}>
                                                            <p className={'font-bold'}>Log out</p>
                                                        </button>
                                                    </MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </Box>
                            </div>
                            ):(
                                <div  className={' flex gap-3 '}>
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
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarComponent;