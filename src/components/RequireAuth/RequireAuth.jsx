import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';

const RequireAuth = ({children}) => {
    const {isAuthenticated} = useSelector(state => state.auth);
    const location = useLocation();

    // Redirect to login page if not authenticated, but retain the intended URL in state
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children; // Return children components if authenticated
};

export default RequireAuth;
