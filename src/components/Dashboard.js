import React, { useState } from 'react'
import {Form,Button,Card,Alert} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link,useNavigate } from "react-router-dom"

export default function Dashboard() {


  const [error,setError]=useState("");


  const {currentUser,logout}=useAuth()

  const history=useNavigate()



   async function handleLogout(){
    setError("")

    try{
      await logout()
      history("/login")
    }
    catch{
      setError("failed to logout")

    }


  }








  return (
    <>

    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant='danger' >{error}</Alert>}
        <strong>Email:</strong> {/*currentUser && */ currentUser.email}
        <Link to="/updateprofile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
      </Card.Body>
    </Card>
    
    <div className='w-100 text-center mt-2'>
      <Button variant='link' onClick={handleLogout}>Log Out</Button>
    </div>
    </>
  )
}
