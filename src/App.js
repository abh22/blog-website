import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home/Home";
import Sign from "./Pages/Sign";
import Write from "./Components/Write/Write"
import PrivateRoute from "./Components/PrivateRoute";
import DetailedPost from "./Components/DetailedPost/DetailedPost";
import Posts from "./Components/Posts/Posts";
import Signup from "./Pages/Sign/Signup";

function App() {
  //   const navigate=useNavigate();
  // useEffect=(()=>{
  // navigate("/write")
  // },[auth])
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign" element={<Sign/>} />
          <Route path="/signUp" element={<Signup />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/write" element={<Write/>} />
          </Route>
          <Route exact path="/" element={<Posts/>} />
          <Route path="/:id" element={<DetailedPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
