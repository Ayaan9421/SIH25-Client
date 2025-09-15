import "./Appbar.css";
import * as React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import { doSignOut } from "./firebase/auth";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Appbar(){
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className="Appbar"> 
           <div style={{display:"flex",alignItems:"center",margin:"0px 20px",gap:"4px"}}>
                <AgricultureTwoToneIcon/>
                <p style={{fontSize:"20px"}}>FarmAI</p>
           </div>

           <div style={{display:"flex",alignItems:"center"}}>
                <span className="weather">weather,temp</span>
                <AccountCircleOutlinedIcon fontSize="large" style={{margin:"0px 10px",color:"green"}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}/>


                <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                            }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    {/* <MenuItem onClick={handleClose}> */}
                    <nav>
                        {
                            userLoggedIn ? <><MenuItem onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='text-sm text-blue-600 underline'>Logout</MenuItem></> :<><Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link><Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link></>
                        }
                    </nav>
                    {/* </MenuItem> */}
                </Menu>
           </div>
        </div>
    );
}