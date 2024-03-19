
import {Route, Routes} from "react-router-dom"
import ProductList from "./ProductList";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import { useEffect } from "react";
import { getCurrent } from "./Redux/Action/ActionUser";
import { useDispatch } from "react-redux";
import { getproduct } from "./Redux/Action/ActionProduct";
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(getCurrent())
   dispatch(getproduct())
  }, [])
  
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<ProductList/>} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />

  

  </Routes>
     
     
    </div>
  );
}

export default App;
