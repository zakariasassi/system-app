import React, { useState, useEffect , useContext } from "react";
import Sidebar from "../../helper/addon/sidebar";
// import { users } from "../../../../tests/users";
// import logo from "../../../../assets/logo.png";
// import { AuthContext } from '../../../loginScreen/AuthContext';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Topbar from "../../helper/addon/topbar";
import { baseUrl } from "../../../../constants/engine";
import Pagination from "../allmodels/Pagination";
import { Button } from "react-bootstrap";
import { ConsumerContext } from "./consumerContext";
import { useNavigate } from "react-router-dom";

const iduser = window.localStorage.getItem('userID')
const token = window.localStorage.getItem('token')

function AddCosumer() {

  const Navigate = useNavigate();
    const [curentpage , setCurentpage] = useState(1);
  const [ postPerPage , setPostPerPage] = useState(10)
  const [allData, setallData] = useState([]);
  const [Cname, setCname] = useState("");
  const [Cphone, setCphone] = useState("");
  const [Clocation, setClocation] = useState("");
  const [searching, setsearching] = useState("");
  const lastPostIndex = curentpage * postPerPage ; 
  const firstPostIndex = lastPostIndex - postPerPage;
  




   const fetchData = async () => {
  
    const res = await axios.post(  baseUrl +   "customer_all.php" , {
      ID_USER : iduser,
      TOKEN:token ,
    });
    console.log(res)
    if (res){
      if(res.data.success === 0 ){
        setallData([]);
        console.log('error');

      }else{
        setallData(res.data);
      }
    }else{
      console.log("Bad gettawy");
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  let curentPost = allData.slice(firstPostIndex , lastPostIndex)


  const showCustomerModels = ( e,name) =>  { 
    e.preventDefault();
    Navigate('/scm',{state:{name: name}});

  }




  const addNewCustomer = (e) => {
    e.preventDefault();
    if (!Cname && !Cphone && !Clocation ) {
      const errorInput = () => toast("يرجي ادخال جميع الحقول");
      errorInput();
    }
    //  else if(!Cname.match(/^[a-zA-Z]+[\u0621-\u064A\s0-9] +$/)  ){
    //   const errorInput = () => toast("يرجي ادخال اسم الزبون بطريقة صحيحة");
    //   errorInput();
    // }
    else if (Cphone <= 6 ){
      const errorInput = () => toast("يرجي ادخال رقم الهاتف بطريقة صحيحة ");
      errorInput();
    }
    // else if 
    // (!Clocation.match(/^[a-zA-Z]+$/ )) {
    //   const errorInput = () => toast("يرجي ادخال موقع الزبون بطريقة صحيحة");
    //   errorInput();
    // }
    else {
      axios
        .post( baseUrl  + "customer_insert.php", {
          name: Cname,
          ID_USER : iduser,
          TOKEN:token ,
          phone: Cphone,
          address: Clocation,
        })
        .then((res) => {
            if(res){
              if(res.data.success === 0) {
                    const errorInput = () => toast(res.data.msg);
                    errorInput();
              }
            }else{
              console.log("no response")
            }
        })
        .catch((e) => {
          console.log(e);
        });
    }


  
  };

  const [searchBynumber  , setsearchBynumber]  = useState("");  
  const [searchByname , setsearchByname] = useState("");


  const [isActive , setisActive]  = useState(true);

  const Searching = async  () => {
    const resFilterd = await axios.post(baseUrl + "customer_search.php" , {
      phone : searchBynumber ,
      name : searchByname ,
      ID_USER : iduser,
      TOKEN:token ,
     
    })
    setallData(resFilterd.data)
        if( allData.length > 0 ) {
          curentPost = allData.slice(firstPostIndex , lastPostIndex) ;
          console.log(curentPost)
        }else{
          curentPost = allData;
        }
   
  } 

  const Activison = async (event ,  id,active) => {
    event.preventDefault();
    const res = await axios.post(baseUrl + "customer_change_active.php" , {
      id_customer : id ,
      ID_USER : iduser,
      TOKEN:token ,
      active : active ,
    })

    fetchData()

    console.log(res.data )
 
  }

  if(curentPost.length > 0 ) {
  
    return (
      <div>
  
        <Sidebar></Sidebar>
  
        <div className="full_container" dir="rtl">
        <ToastContainer />
  
          <div className="inner_container">
            <div id="content">
              <Topbar />
  
              <div
                style={{
                  marginTop: 30,
                  padding:50,
                  backgroundColor: "#15283D",
                  width: "100%",
                  boxShadow: 10,
                }}
              >
                <h1 style={{ textAlign: "center", marginTop: 30 , color:'#FFFFFF' }}> اضافة زبون الي المنظومة</h1>
                <form
                  className="row"
                  style={{
                    marginBottom: 60,
                    marginTop: 30,
                    width: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <div className="col">
                    <label htmlFor="customerName"> اسم الزبون</label>
                    <input
                      type="text"
                      id="customerName"
                      name="name"
                      required
                      onChange={(e) => setCname(e.target.value)}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="customerNumber"> رقم الزبون</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      onChange={(e) => setCphone(e.target.value)}
                      id="customerNumber"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="customerNumber"> العنوان </label>
                    <input
                      type="text"
                      id="customerLocation"
                      name="address"
                      className="form-control"
                      placeholder="العنوان"
                      required
                      onChange={(e) => setClocation(e.target.value)}
                    />
                  </div>
                  <button
                    style={{ marginTop: 30 , color:'white' , border:'0px' , width:100, backgroundColor:'#FF5723' }}
                    className="btn btn-danger"
                    
                    onClick={addNewCustomer}
                  >
                    اضافة زبون
                  </button>
                </form>
              </div>
  
                  <div className="row" style={{
                    
                    padding:20
                  }}>
                   <div className="col">
                   <input id="searchbyname" className="form-control"  placeholder="بحث عن طريق الاسم"/>
                   </div>
                   <div className="col">
                   <button onClick={Searching} className="btn-primary "style={{ borderRadius:'15%', background:"#15283D", border:'0px',height:'33px',width : '90px'}}>
                      بحث 
                    </button>
  
                   </div>
             
  
                  </div>
  
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">اسم الزبون</th>
                    <th scope="col">رقم الهاتف</th>
                    <th scope="col">الاعتماد </th>
                    <th scope="col"> العنوان </th>
                    <th scope="col">عمليات </th>
                    <th scope="col">التفعيل </th>
                  </tr>
                </thead>
                <tbody>
                  {curentPost.map((data) => {
                      return (
                        <tr key={data.id_customer}>
                          <th scope="row">{data.id_customer}</th>
                          <td>{data.name}</td>
                          <td>{data.phone} </td>
                          <td>
                            {data.active === "1" ? (
                              <span className="badge text-bg-info">فعال </span>
                            ) : (
                              <span className="badge text-bg-danger"> غير فعال </span>
                            )}
                          </td>
                          <td>{data.address}</td>
                          <td>
                            <button type="button" onClick={ (e) => showCustomerModels( e , data.name)} className="btn btn-warning">
                              عرض الزيارات
                            </button>
                           {/* <ConsumerContext.Provider value={data.id_customer}  /> */}
  
                          </td>
                          <td>
                            {
                            
                            data.active === "1" 
                            ?
                            (
                              // <label className="switch">
                              //   <input type="checkbox" checked value={"1"}   onChange={ e => Activison( data.id_customer, "1" )}/>
                              //   <span className="slider round"></span>
                              // </label>
                                <button  className="btn btn-danger" onClick={ e => Activison(e , data.id_customer , "0" )} >الغاء تفعيل</button>
                               )
                               :  
                               (
                            //   <label className="switch">
                            //   <input type="checkbox" value={"0"}   onChange={ e => Activison(data.id_customer, "0" )}/>
                            //   <span className="slider round"></span>
                            // </label>
                            <button  className="btn btn-success" onClick={ e => Activison(e ,  data.id_customer ,  "1" )}> تفعيل</button>
  
                               )
                            
                            }
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <Pagination totalposts={setallData.length} posterpage={postPerPage} setCurentpage={setCurentpage}  />
  
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div>
  
        <Sidebar></Sidebar>
  
        <div className="full_container" dir="rtl">
        <ToastContainer />
  
          <div className="inner_container">
            <div id="content">
              <Topbar />
  
              <div
                style={{
                  marginTop: 30,
                  padding:50,
                  backgroundColor: "#15283D",
                  width: "100%",
                  boxShadow: 10,
                }}
              >
                <h1 style={{ textAlign: "center", marginTop: 30 , color:'#FFFFFF' }}> اضافة زبون الي المنظومة</h1>
                <form
                  className="row"
                  style={{
                    marginBottom: 60,
                    marginTop: 30,
                    width: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <div className="col">
                    <label htmlFor="customerName"> اسم الزبون</label>
                    <input
                      type="text"
                      id="customerName"
                      name="name"
                      required
                      onChange={(e) => setCname(e.target.value)}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="customerNumber"> رقم الزبون</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      onChange={(e) => setCphone(e.target.value)}
                      id="customerNumber"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="customerNumber"> العنوان </label>
                    <input
                      type="text"
                      id="customerLocation"
                      name="address"
                      className="form-control"
                      placeholder="العنوان"
                      required
                      onChange={(e) => setClocation(e.target.value)}
                    />
                  </div>
                  <button
                    style={{ marginTop: 30 , color:'white' , border:'0px' , width:100, backgroundColor:'#FF5723' }}
                    className="btn btn-danger"
                    
                    onClick={addNewCustomer}
                  >
                    اضافة زبون
                  </button>
                </form>
              </div>
  
                  <div className="row" style={{
                    
                    padding:20
                  }}>
                   <div className="col">
                   <input id="searchbyname" className="form-control"  placeholder="بحث عن طريق الاسم"/>
                   </div>
                   <div className="col">
                   <button onClick={Searching} className="btn-primary "style={{ borderRadius:'15%', background:"#15283D", border:'0px',height:'33px',width : '90px'}}>
                      بحث 
                    </button>
  
                   </div>
             
  
                  </div>
  
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">اسم الزبون</th>
                    <th scope="col">رقم الهاتف</th>
                    <th scope="col">الاعتماد </th>
                    <th scope="col"> العنوان </th>
                    <th scope="col">عمليات </th>
                    <th scope="col">التفعيل </th>
                  </tr>
                </thead>
          
              
              </table>
              <Pagination totalposts={setallData.length} posterpage={postPerPage} setCurentpage={setCurentpage}  />
  
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default AddCosumer;
