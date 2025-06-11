import axios from "axios"
import { useEffect } from "react"
import { backendurl } from "../../configurl"

export const useGetAllUsers = ({setUsers})=>{
     
    useEffect(()=>{
      const fetchAllUsers = async()=>{
        const res = await axios.get(`${backendurl}/api/v1/user/getalluser`,{
            withCredentials:true
        })

        if(res.data.success){
            setUsers(res.data.users)
        }
      }
      fetchAllUsers()
    },[])
}