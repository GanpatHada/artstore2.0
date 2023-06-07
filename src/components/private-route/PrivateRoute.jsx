
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ProductContext } from '../../context/ProductContext';

export const PrivateRoute = ({children}) => {
  const{getToken}=useContext(ProductContext)  
  let location = useLocation();
  return (getToken()!==null) ? children : <Navigate to="/login" state={{ from: location }} /> 
}