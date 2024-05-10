import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
import React from "react";
import {logoutUser} from "../../features/auth/authOperations";
import {Button} from "@mui/material";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
    );
};

export default Logout;
