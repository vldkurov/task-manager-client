import {useDispatch} from 'react-redux';
import {logoutUser} from "../../features/auth/authOperations";
import {useNavigate} from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/')
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
