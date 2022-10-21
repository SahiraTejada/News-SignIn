import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import './app.css';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
function App() {
  const user = true;
  return (
    <BrowserRouter>
    <div>
     <Navbar user={user}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={user ? <Navigate to="/"/>: <Login/>}/>
      <Route path="/post/:id" element={user ? <Post/>: <Navigate to="/login"/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
