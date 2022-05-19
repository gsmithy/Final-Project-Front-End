import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    let user = null;

    const strUser = localStorage.getItem('user');
    if (strUser) {
        user = JSON.parse(strUser);
    }

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }   else {
        return children;
    }

}

export default RequireAuth;