import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import RestrictAccess from "../RestrictedAccess";
import routes from '../../../routes';
import { AppRoutes } from '../../../routes/routeConstants/appRoutes';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const Authentication = (props: any) => {
        const {allowedRoles} = props
        const { authenticated } = AuthContext();
        const location = useLocation();
        const navigate = useNavigate();
        useEffect(() => {
            if (!authenticated && location.pathname !== AppRoutes.LOGIN) {
                return navigate(AppRoutes.LOGIN);
            }
        }, [props]);

        if(allowedRoles?.length) {
            const { user } = props;
            return allowedRoles.includes(user.role) ? children : <RestrictAccess />;
        }
        return children;
    } 

    return <Authentication/>;
};

export const isAuthenticated = (component: JSX.Element) => {
    return RequireAuth({children: component});
};


export default isAuthenticated;