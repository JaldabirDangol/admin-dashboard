import axios from "axios"
import { backendurl } from "../../configurl"
import { useEffect } from "react"


export const useGetMe =({user,setUser})=>{
    
    useEffect(()=>{
       async function fetchMe(){
           console.log("hooks called")
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
    }}

    fetchMe()
    },[])

}