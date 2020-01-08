import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';


export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const isLogin = useSelector(state => state.userData.isLogin)
    const user = useSelector(state => state.userData.user);

    if (isLogin === false) {
        return null;
    } else {
        return (
            <Route {...rest} render={props => {
                if (user.role === 'admin') {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/warningpage" />
                }
            }} />
        )
    }
}
