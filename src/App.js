import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import Login from './components/loginScreen/Login.jsx';
import Home from './components/Home/consumervists/main/index'
import AddModel from './components/Home/consumervists/addModel/addModel.jsx'
import AllModels from './components/Home/consumervists/allmodels/Models.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/addmodel' element={<AddModel />} />
      <Route  path='/allmodels' element={<AllModels />} />
    </Routes>


   
    </>
  );
}

export default App;
