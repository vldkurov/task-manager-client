import {useDispatch} from 'react-redux';
import {logout} from "../../features/auth/authSlice";


const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()); // This will clear the token from local storage and reset the state
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
