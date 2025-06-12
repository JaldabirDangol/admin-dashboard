import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetMe } from '../hooks/useGetMe';

const ProtectedRoutes = ({children}) => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useGetMe({user, setUser})

    setTimeout(()=>{
        console.log(user)
    },10000)
    
    useEffect(()=>{
        if(user === null){
            navigate("/auth");
        }
    },[])
  return <>{children}</>
}

export default ProtectedRoutes;