import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute1 from "./PrivateRoute1";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute2 from "./PrivateRoute2";



function App() {
  return (
  
  <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
    <div className="w-100" style={{maxWidth:"400px"}}>

      <Router>
        <AuthProvider>

          <Routes>

            <Route exact path="/" element={<PrivateRoute1  />} />

            <Route path="/updateprofile" element={<PrivateRoute2/>}/>


  

            <Route path="/signup" element={<Signup/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/forgotpassword" element={<ForgotPassword/>} />

          </Routes>


        </AuthProvider>
      </Router>




        

  </div>
        
 </Container>

      

    
  )
}



export default App

