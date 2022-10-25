import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginScreen/Login";
import NewConsumer from "./components/Home/consumervists/addConsumer/addCosumer"
import AddModel from "./components/Home/consumervists/addModel/addModel";
import AllModels from "./components/Home/consumervists/allmodels/Models";
import AllconsumerModels from "./components/Home/consumervists/addConsumer/AllconsumerModels";
import ViewModel from "./components/Home/consumervists/showModel/ViewModel";
import Main from "./components/Home/adminPanel/Main";
import Users from "./components/Home/adminPanel/Users";



function App() {
  const check =   window.localStorage.getItem('isLogIn')

  return (
 //   check  ? <AllModels /> : 
          <Routes>
           <Route  exact path="/" element={ check  ?<AllModels /> : <Login/> } />

            {/* models system routes  */}
          <Route  path="/index" element={<AllModels /> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/addconumer"  element={ check ? <NewConsumer /> : <Login  />} />
          <Route path="/addmodel" element={ <AddModel /> } />
          <Route path="/allmodels" element={check  ? <AllModels /> : <Login/> } />
          <Route path="/scm" element={check  ? <AllconsumerModels /> : <Login/> } />
          <Route path="/viewspmodel" element={check  ? <ViewModel /> : <Login/> } />
            {/* end models system routes  */}

          {/* models system routes  */}
          <Route  path="/main" element={<Main /> } />
          <Route path="/addnewuser" element={ <Users />  } />
      
            {/* end models system routes  */}


        </Routes>
      

  );

}

// function InstenceApp () {
//   return (
   
//       <App />
  
//   );


export default App;
