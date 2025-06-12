import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetMe } from '../hooks/useGetMe';

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    const { user1 , loading1} = useGetMe();

    
    useEffect(()=>{
        if(!loading1 && !user1){
            navigate("/auth");
        }
    },[loading1,user1,navigate])
  return <>{children}</>
}

export default ProtectedRoutes;