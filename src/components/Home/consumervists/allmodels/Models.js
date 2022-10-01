import React, { useEffect  , useState} from "react";
import Sidebar from "../../helper/addon/sidebar";
import logo from "../../../../assets/logo.png";

import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
import axios from "axios";
import { baseUrl } from "../../../../constants/engine";
function Models() {




  const [allmodels , setALlModels] = useState([]);
  useEffect(() =>  {
    const getModelsData = async () => {
      const res = await axios.get(baseUrl + "cvm_view_all.php") 
      console.log(res)
      if(res ){
        setALlModels(res.data);

      }
      else{
        console.log("no data is avilabel")
      }
    }
    getModelsData();
  },[]);


  return (
    <div >
      <Sidebar></Sidebar>
      <div className="full_container">
        <div className="inner_container">
          <div id="content">
              <Topbar />

            <div dir="rtl" className="row" style={{
                  
                  padding:20
                }}>
                 <div className="col">
                <label htmlFor="searchbyname" >بحث عن طريق الاسم</label>
                 <input id="searchbyname" className="input-group"  placeholder="بحث عن طريق الاسم"/>
                 </div>
                 <div className="col">
                <label htmlFor="searchbyname" >بحث عن طريق الرقم</label>
                 <input id="searchbyname" className="input-group"  placeholder="بحث عن طريق الرقم"/>
                 </div>
                 <div className="col">
                 <label htmlFor="from" > من  </label>
                 <input id="from" type="date" className="input-group" />
                 </div>
                 <div className="col">
                 
                 <label htmlFor="to" > إلي  </label>
                 <input id="to" type="date" className="input-group" />
                 </div>
                 <button className="btn-primary "    style={{
                      border:'0px',
                      height:'26px',
                      marginTop:20,
                      display:'block',
                      width: 40,
                      
                    }}  >بحث </button>
                </div>

            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th scope="col"> رقم النموذج</th>
                  <th scope="col">اسم الزبون</th>
                  <th scope="col">تاريخ الزيارة</th>
                  <th scope="col">تاريخ الاضافة </th>
                </tr>
              </thead>
              <tbody>
                {allmodels.map( (index ) => {
                  return (
                    <tr>
                    <td>{index.id_cvm}</td>
                    <td> {index.name}</td>
               
                    <td>{index.date_visits}</td>
                    <td>{index.date_create}</td>
                  </tr>
                  )
                } )}



              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
