
import {Route, Routes} from "react-router-dom"
import ProductList from "./ProductList";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import { useEffect } from "react";
import { getCurrent } from "./Redux/Action/ActionUser";
import { useDispatch } from "react-redux";
import { getproduct } from "./Redux/Action/ActionProduct";
import Addproduct from "./Addproduct";
import Editproduct from "./Editproduct";
import PrivateRout from "./PrivateRout";
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
    <Route path="/profile" element={<PrivateRout><Profile/></PrivateRout>} />
    <Route path="/addproduct" element={<Addproduct/>}/>
    <Route path="/edit/:id" element={<Editproduct/>}/>
  

  </Routes>
     
     
    </div>
  );
}

export default App;
