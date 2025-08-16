import axios from 'axios'
import React, {useEffect} from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
  useEffect(()=>{
    const fetchProtectedData = async () =>{
    try{
     const response = await axiosInstance.get('http://127.0.0.1:8000/api/v1/protected-view/')
     console.log('success: ', response.data)
    }catch(error){
      console.log('Error fetching data: ', error)
    }
   }
    fetchProtectedData();
  }, [])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard
