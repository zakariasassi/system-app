import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginScreen/Login";
import NewConsumer from "./components/Home/consumervists/addConsumer/addCosumer"
import AddModel from "./components/Home/consumervists/addModel/addModel";
import AllModels from "./components/Home/consumervists/allmodels/Models";



function App() {
  const check =   window.localStorage.getItem('isLogIn')

  return (

          <Routes>
           <Route  exact path="/" element={check  ? <AllModels /> : <Login/> } />

          <Route  path="/index" element={<AllModels /> } />
          <Route path="/login" element={check  ? <AllModels /> : <Login/> } />
          <Route path="/addconumer"  element={ check ? <NewConsumer /> : <Login  />} />
          <Route path="/addmodel" element={check  ? <AddModel /> : <Login/> } />
          <Route path="/allmodels" element={check  ? <AllModels /> : <Login/> } />
        </Routes>
      

  );

}

// function InstenceApp () {
//   return (
   
//       <App />
  
//   );


export default App;
