import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
