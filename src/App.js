import "./App.css";
import { Route, Routes } from "react-router-dom";
import {useContext} from 'react'
import Login from "./components/loginScreen/Login";
import Home from "./components/Home/consumervists/main/index";
import NewConsumer from "./components/Home/consumervists/addConsumer/addCosumer"
import AddModel from "./components/Home/consumervists/addModel/addModel";
import AllModels from "./components/Home/consumervists/allmodels/Models";
import { AuthContext, AuthProvider } from "./components/loginScreen/AuthContext";



function App() {
  const check =   window.localStorage.getItem('isLogIn')

  const authContext = useContext(AuthContext);
  return (

          <Routes>
          <Route exact path="/index" element={<Home /> } />
          <Route exact path="/" element={check  ? <Home /> : <Login/> } />
          <Route path="/login" element={check  ? <Home /> : <Login/> } />
          <Route path="/addconumer" element={<NewConsumer />} />
          <Route path="/addmodel" element={<AddModel />} />
          <Route path="/allmodels" element={<AllModels />} />
        </Routes>
      

  );

}

// function InstenceApp () {
//   return (
   
//       <App />
  
//   );


export default App;
