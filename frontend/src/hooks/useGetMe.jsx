import axios from "axios"
import { backendurl } from "../../configurl"
import { useEffect, useState } from "react"


export const useGetMe =()=>{
    const[user1,setUser] = useState(null);
    const [loading1 ,setLoading] = useState(true)
    
    useEffect(()=>{
       async function fetchMe(){
          
            try {
        const res = await axios.get(`${backendurl}/api/v1/user/amilogin`,{
            withCredentials:true
        })
    
        if(res.data.success){
            setUser(res.data.user);
        }else{
            setUser(null)
        }
    } catch (error) {
        console.log(error)
        setUser(null)
    }
finally{
    setLoading(false)
}}

    fetchMe()
    },[])
  return { user1, loading1}
}