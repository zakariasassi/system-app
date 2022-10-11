import React, { useEffect  , useState} from "react";
import Sidebar from "../../helper/addon/sidebar";
import logo from "../../../../assets/logo.png";
import Moment from "moment"
import Pagination from "./Pagination"
import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../constants/engine";





function Models() {

  const Navigate = useNavigate();

  const [allmodels , setALlModels] = useState([]);
  const [filtredModels , setFiltersModels] = useState([]) 
  const [curentpage , setCurentpage] = useState(1);
  const [ postPerPage , setPostPerPage] = useState(10)
  // const [curentPost , setCurentPost] = useState([]);
  const lastPostIndex = curentpage * postPerPage ; 
  const firstPostIndex = lastPostIndex - postPerPage;
  const [searchByname , setSeachByname] = useState("");
  const [searchBynumber , setSeachBynumber] = useState("")
  const [dateFrom , setDatefrom] = useState("");
  const [dateTo , setDateto] = useState("") 


  // var data = allmodels.slice(firstPostIndex , lastPostIndex)
  // console.log(setCurentPost(data))

    let curentPost = allmodels.slice(firstPostIndex , lastPostIndex)

    const check =   window.localStorage.getItem('isLogIn')


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
  useEffect(() =>  {

    if (check){
      getModelsData();
    }else{
      Navigate("/login")
    }

  },[]);

  const ViewSpecifcModel = ( e , id) => {
    e.preventDefault();
    Navigate("/viewspmodel" , {state:{id:id}})
  }


  const Searching = async  () => {
    console.log(searchBynumber)
    const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php" , {
      id_cvm : searchBynumber ,
      name : searchByname ,
      date_from : dateFrom ,
      date_to : dateTo,
    })
    setALlModels(resFilterd.data)
        if( allmodels.length > 0 ) {
          curentPost = allmodels.slice(firstPostIndex , lastPostIndex) ;
          console.log(curentPost)
        }else{
          curentPost = allmodels;
        }
   
  } 

     

  const HandelDelete = (e ,id) => {
   e.preventDefault();
     let iduser = window.localStorage.getItem('userID') 
      axios.get(baseUrl  + "cvm_delete.php", {id_cvm:id , id_user :iduser }).then((res) =>  console.log(res)).catch( e => console.log(e))
      getModelsData()
    }


        

  return (
    <div >
      <Sidebar></Sidebar>
      <div className="full_container">
        <div className="inner_container">
          <div id="content">
              <Topbar />

            <div dir="rtl" className="row" style={{padding:20}}>
            <h1 style={{ textAlign: "center", marginTop: 30 , marginBottom:30, color:'#FF5723' }}>
                    عرض النماذج

              </h1>
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
                      width:'20%',
                      margin: 'auto'
                     }}>

                  <button 
                  onClick={Searching}
                  className="btn-warning " 
                  style={{
                      border:'0px',
                      height:'40px',
                      width: '40vh',
                      margin: 'auto',
                      fontWeight:'bold',
                      color:'white',
                      background:'#FF5723' }}>
                      بحث 
                  </button>

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

                {
                

               
                curentPost.map( (index  , key) => {
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
                    textAlign:'center',}}>{index.date_create}</td>
                    <td>
                      <Button style={{ 
                        margin:10,
                        textAlign:'center'
                       }} >تعديل</Button>
                      <Button 
                        onClick={ e => HandelDelete( e , index.id_cvm)}
                      style={{ 
                        margin:10,
                        textAlign:'center'
                       }} >حذف</Button>
                        <Button
                        onClick={ e => ViewSpecifcModel (e , index.id_cvm)}
                        style={{ 
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









// filter((val) => {
//   if(searchByname === "" && searchBynumber === "" && dateFrom === "" && dateTo === "") 
//   {
//     return val
//   }else if (val.id_cvm.includes(searchBynumber) && val.name.toLowerCase().includes(searchByname.toLowerCase()) && val.date_visits.includes(dateTo) && val.date_visits.includes(dateFrom)){
//     console.log("curentPost")
//     return val
//   }}).