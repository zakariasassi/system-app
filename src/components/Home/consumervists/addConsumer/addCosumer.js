import React, { useState, useEffect } from "react";
import Sidebar from "../../helper/addon/sidebar";
// import { users } from "../../../../tests/users";
// import logo from "../../../../assets/logo.png";
// import { AuthContext } from '../../../loginScreen/AuthContext';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Topbar from "../../helper/addon/topbar";
import { baseUrl } from "../../../../constants/engine";



function AddCosumer() {
  const [allData, setallData] = useState([]);
  const [Cname, setCname] = useState("");
  const [Cphone, setCphone] = useState("");
  const [Clocation, setClocation] = useState("");
  const [searching, setsearching] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get(  baseUrl + "customer_all.php");
      console.log(res)
      if (res){
        if(res.data.success === 0 ){
          setallData([]);
          console.log('error');
  
        }else{
          setallData(res.data);
        }
      }else{
        console.log("Bad gatawy");
      }
 
    };
    fetchData();
  }, []);


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
                backgroundColor: "white",
                width: "90%",
                boxShadow: 10,
                margin: "auto",
              }}
            >
              <h1 style={{ textAlign: "center", marginTop: 30 }}>
                اضافة زبون الي المنظومة
              </h1>
              <form
                className="row"
                style={{
                  marginBottom: 60,
                  marginTop: 30,
                  width: "80%",
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
                  style={{ marginTop: 30 }}
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
                <label htmlFor="searchbyname" >بحث عن طريق الاسم</label>
                 <input id="searchbyname" className="input-group"  placeholder="بحث عن طريق الاسم"/>
                 </div>
                 <div className="col">
                 <label htmlFor="from" > من  </label>
                 <input id="from" type="date" className="input-group" />
                 </div>
                 <div className="col">
                 
                 <label htmlFor="to" > إلي  </label>
                 <input id="to" type="date" className="input-group" />
                 </div>

                </div>

                <div className="row" style={{
                      width:500,
                      textAlign:'center !important'
                }}>
                    <button className="btn-primary " style={{
                      border:'0px',
                    
                      height:'26px',
                      
                    }}  >بحث </button>
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
                {allData.map((data) => {
                    return (
                      <tr key={data.id_customer}>
                        <th scope="row">{data.id_customer}</th>
                        <td>{data.name}</td>
                        <td>{data.phone} </td>
                        <td>
                          {data.active ? (
                            <span className="badge text-bg-info">معتمد </span>
                          ) : (
                            <span className="badge text-bg-danger"> غير معتمد</span>
                          )}
                        </td>
                        <td>{data.address}</td>
                        <td>
                          <button type="button" className="btn btn-warning">
                            عرض الزيارات{" "}
                          </button>
                        </td>
                        <td>
                          {data.active ? (
                            <button type="button" className="btn btn-danger">
                              الغاء تفعيل
                            </button>
                          ) : (
                            <button type="button" className="btn btn-info">
                              تفعيل
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCosumer;
