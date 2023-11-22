import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';





export default function PrivateRoute({Component}) {


    

    const {currentUser}=useAuth()





    return (currentUser ? <Dashboard/>   : <Navigate to="/login" />)
   





      
    
  
}





