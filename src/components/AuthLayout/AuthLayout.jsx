import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuth} from "../../features/auth/authOperations";

const AuthLayout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    return children;
}

export default AuthLayout;
