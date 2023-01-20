
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteTherapist = ({ user}) => {
 !user ? <Navigate to='/auth/therapists/signup' replace /> : <Outlet />;
};

export default ProtectedRouteTherapist