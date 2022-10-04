import React, { useEffect  , useState} from "react";
import Sidebar from "../../helper/addon/sidebar";
import logo from "../../../../assets/logo.png";
import Moment from "moment"
import Pagination from "./Pagination"
import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
import axios from "axios";
import { baseUrl } from "../../../../constants/engine";





function Models() {



  const [allmodels , setALlModels] = useState([]);
  const [curentpage , setCurentpage] = useState(1);
  const [ postPerPage , setPostPerPage] = useState(10)
  
  
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



  // const curentpage = 1;
  const lastPostIndex = curentpage * postPerPage ; 
  const firstPostIndex = lastPostIndex - postPerPage;
  
  const curentPost = allmodels.slice(firstPostIndex , lastPostIndex)



  const [searchByname , setSeachByname] = useState("");
  const [searchBynumber , setSeachBynumber] = useState("")
  const [dateFrom , setDatefrom] = useState("");
  const [dateTo , setDateto] = useState("") 


  const Searching = () => {
    // let data =  curentPost.filter( item => item.name !== e.target.value)
    // console.log( data.name)
    // setALlModels(curentPost.filter( item => item !== e.target.value))

    
    const res = axios.get(baseUrl + "cvm_view_all_search.php" , {
      id_cvm : searchBynumber ,
      name : searchByname ,
      datefrom : dateFrom ,
      dateTo : dateTo,
    })
    
    if(res){
      console.log(res);
    }else{
      alert("errro")
    }
  }




  return (
    <div >
      <Sidebar></Sidebar>
      <div className="full_container">
        <div className="inner_container">
          <div id="content">
              <Topbar />

            <div dir="rtl" className="row" style={{padding:20}}>
                <div className="col">
                <label htmlFor="searchbyname" >بحث عن طريق الاسم</label>
                 <input id="searchbyname" className="form-control"  placeholder="بحث عن طريق الاسم" 
                 onChange={ e =>  setSeachByname(e.target.value)}/>
                 </div>
                 <div className="col">
                <label htmlFor="searchbyname" >بحث عن طريق الرقم</label>
                 <input id="searchbyname" className="form-control" onChange={  e =>  setSeachBynumber(e.target.value)}  placeholder="بحث عن طريق الرقم"/>
                 </div>
                 <div className="col">
                 <label htmlFor="from" > من  </label>
                 <input id="from" onChange={  e =>  setDatefrom(e.target.value)} type="date" className="form-control" />
                 </div>
                 <div className="col">
                 <label htmlFor="to" > إلي  </label>
                 <input id="to" type="date" onChange={  e =>  setDateto(e.target.value)} className="form-control" />
                 </div>
          
                </div>
                  <div  style={{ 
                    height: 60,
                    width: 'auto'
                   }}>

                    <div style={{ 
                      width:'40%',
                      margin: 'auto'
                     }}>

                  <button 
                  onClick={Searching()}
                  className="btn-warning " style={{
                      border:'0px',
                      height:'40px',
                      width: '100vh',
                      margin: 'auto'
                      
                    }}  >بحث </button>

                     </div>




                  </div>
          

            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th scope="col" style={{ 
                    textAlign:'center',
                    fontWeight:'bold'

                  }}> رقم النموذج</th>
                  <th scope="col" style={{ 
                    textAlign:'center',
                    fontWeight:'bold'

                  }}>اسم الزبون</th>
                  <th scope="col"style={{ 
                    textAlign:'center',
                    fontWeight:'bold'

                  }}>تاريخ الزيارة</th>
                  <th scope="col" style={{ 
                    textAlign:'center',
                    fontWeight:'bold'

                  }}>تاريخ الاضافة </th>
                  <th scope="col" style={{ 
                    textAlign:'center',
                    fontWeight:'bold'

                  }} >اجراء </th>

                </tr>
              </thead>
              <tbody>
                {curentPost.map( (index  , key) => {
                  return (
                    <tr key={key}>
                    <td style={{ 
                    textAlign:'center',
               

                  }}>{index.id_cvm}</td>
                    <td style={{ 
                    textAlign:'center',
               

                  }}> {index.name}</td>
               
                    <td style={{ 
                    textAlign:'center',
               

                  }}>{index.date_visits}</td>
                    <td style={{ 
                    textAlign:'center',
               

                  }}>{index.date_create}</td>
                    <td>
                      <Button style={{ 
                        margin:10,
                        textAlign:'center'
                       }} >تعديل</Button>
                      <Button style={{ 
                        margin:10,
                        textAlign:'center'
                       }} >حذف</Button>
                                   <Button style={{ 
                        margin:10,
                        textAlign:'center'
                       }} >عرض</Button>


                    </td>

                  </tr>
                  )
                } )}



              </tbody>
            </table>

                <Pagination totalposts={allmodels.length} posterpage={postPerPage} setCurentpage={setCurentpage}  />

              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
