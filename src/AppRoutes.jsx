// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Screening from "./Pages/Screening";
import BookSession from "./Pages/BookSession";
import Schedule from "./Pages/Schedule";
import Resources from "./Pages/Resources";
import JoinForum from "./Pages/JoinForum";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";
import Chat from "./Pages/Chat";
import AuthProvider from "./Components/context/AuthProvider";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login"

export default function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/Screening" element={<Screening />} />
        <Route path="/BookSession" element={<BookSession />}/>
        <Route path="/Schedule" element={<Schedule />}/>
        <Route path="/Resources" element={<Resources />}/>
        <Route path="/JoinForum" element={<JoinForum />}/>
        <Route path="/Support" element={<Support />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Chat" element={<Chat />}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
       
      </Routes>
       </AuthProvider>
    </Router>
  );
}
