import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';





export default function PrivateRoute({Component}) {


    

    const {currentUser}=useAuth()





    return (currentUser ? <UpdateProfile/>   : <Navigate to="/login" />)
   





      
    
  
}





