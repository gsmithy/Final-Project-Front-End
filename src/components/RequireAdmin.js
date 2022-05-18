import { useLocation, Navigate } from "react-router-dom";


const RequireAdmin = ({ children }) => {
    const location = useLocation();
    let user = null;

    const strUser = localStorage.getItem('user');
    if (strUser) {
        user = JSON.parse(strUser);
    }

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }   else if(user.admin) {
        return children;
    } else {
        alert('You are not authorized');
        return <Navigate to="/" state={{ from: location}} replace />
    }

}

export default RequireAdmin;