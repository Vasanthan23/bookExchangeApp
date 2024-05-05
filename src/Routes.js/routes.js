import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {Register} from "../components/Signup";
import {Login} from "../components/Signup";
import UserProfile from "../components/userProfile";

export const AppRoutes=({children})=>{
    return <Router>
      {children}
    <Routes>
      <Route path="/" exact element={<Navigate to="/login" replace />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<UserProfile/>} />
    </Routes>
  </Router>
}