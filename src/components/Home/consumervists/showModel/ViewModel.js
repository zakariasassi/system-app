import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import axios from "axios";
import "./dimentions.css";
import { baseUrl } from "../../../../constants/engine";
import  logo from '../../../../assets/logo.png'
function ViewModel() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allmodels, setALlModels] = useState([]);
  const Navigate = useNavigate();
  const name = window.localStorage.getItem('username')
  const logOutUser = (e) => {
          e.preventDefault();
          localStorage.removeItem('username')
          localStorage.removeItem('userID')
          localStorage.removeItem('isLogIn')
          Navigate("/login")    
  }
  const getModel = async () => {
    const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php", {
      id_cvm: location.state.id,
      name: "",
      date_from: "",
      date_to: "",
    });
    setALlModels(resFilterd.data);
    // if( allmodels.length > 0 ) {
    //   curentPost = allmodels.slice(firstPostIndex , lastPostIndex) ;
    //   console.log(curentPost)
    // }else{
    //   curentPost = allmodels;
    // }
  };
  const back = (e) => {
    e.preventDefault();
    navigate("/allmodels");
  };

  useEffect(() => {
    getModel();
  }, []);

  const componentRef = useRef();
  if (allmodels.length > 0) {
    return (
      <>
  <div>
           <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="full">
         
                  <div className="logo_section">
                    <a href="index.html">
                      <img className="img-responsive" src={logo} alt="#" />
                    </a>
                  </div>
                  <div className="right_topbar">
                    <div className="icon_info">
                      <ul>
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-bell-o"></i>
                            <span className="badge">2</span>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-question-circle"></i>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge">3</span>
                          </a>
                        </li> */}
                      </ul>
                      <ul className="user_profile_dd">
                        <li>
                          <a className="dropdown-toggle" data-toggle="dropdown">
                     
                            <span className="name_user">{name}</span>
                          </a>
                          <div className="dropdown-menu">
                            
                            <a className="dropdown-item">
                              <span onClick={logOutUser}> Log Out  </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
    </div>
          <div   style={{
            marginTop:90
          }} dir="rtl" ref={componentRef} className="container">
            <div dir="rtl">
              <div
                className="row"
                style={{
                  marginTop: "40px",
                }}
              >
                <div className="col">
                  <label htmlFor="cutomername" style={{ fontWeight: "bold" }}>
                    {" "}
                    اسم الزبون
                  </label>
                  <h6 id="cutomername "> </h6>
                </div>
                <div className="col">
                  <label htmlFor="activitytybe" style={{ fontWeight: "bold" }}>
                    {" "}
                    نوع النشاط{" "}
                  </label>
                  <h6 id="activitytybe "></h6>
                </div>
                <div className="col">
                  <label htmlFor="deleveryname" style={{ fontWeight: "bold" }}>
                    {" "}
                    تاريخ الزيارة{" "}
                  </label>
                  <h6 id="deleveryname "> </h6>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="phonenumber" style={{ fontWeight: "bold" }}>
                    {" "}
                    رقم الهاتف{" "}
                  </label>
                  <h6 id="phonenumber "> </h6>
                </div>
                <div className="col">
                  <label htmlFor="city" style={{ fontWeight: "bold" }}>
                    {" "}
                    المدينة{" "}
                  </label>
                  <h6 id="city "> </h6>
                </div>
                <div className="col">
                  <label
                    htmlFor="latitudeandlongitude "
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    احداثيات الموقع{" "}
                  </label>
                  <h6 id="latitudeandlongitude "> </h6>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="poergertor" style={{ fontWeight: "bold" }}>
                    قوة المولد{" "}
                  </label>
                  <h6 id="poergertor "> </h6>
                </div>
              </div>
              <h6
                style={{
                  padding: 10,
                  border: "1px solid #0E0D0D",
                }}
              >
                {" "}
                اليات استعمال الوقود
              </h6>
              <div className="row">
                <p style={{ fontWeight: "bold", color: "black" }}>نوع الوقود</p>
                <div className="col">
                  <h6 id="phonenumber ">بنزين</h6>
                </div>
                <div className="col">
                  <h6 id="poergertor "> ديزل </h6>
                </div>
                <div className="col">
                  <h6 id="poergertor "> كيريسين </h6>
                </div>
              </div>
              <div className="row">
                <p style={{ fontWeight: "bold", color: "black" }}>
                  نوع خزان الوقود
                </p>
                <div className="col">
                  <h6 id="phonenumber ">حديدي</h6>
                </div>
                <div className="col">
                  <h6 id="poergertor "> بلاستيكي </h6>
                </div>
              </div>

              <div className="row">
                <p style={{ fontWeight: "bold", color: "black" }}>
                  موقع وسعة الخزان{" "}
                </p>
                <div className="col">
                  <h6 id="phonenumber "> </h6>
                </div>
              </div>

              <div className="row">
                <p style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  اعتماد الزبون{" "}
                </p>
                <div className="col">
                  <h6 id="phonenumber "> </h6>
                </div>
              </div>

              <div className="row">
                <p style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  ملاحـــــظات{" "}
                </p>
                <div className="col">
                  <h6 id="phonenumber "> </h6>
                </div>
              </div>

              <div>
                ------------------------------------------------------------------------------------------
              </div>

              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      {" "}
                      <label>
                        {" "}
                        الاسم
                      </label> <input placeholder="ادخل الاسم" />{" "}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="row">
                    <div className="col">
                      {" "}
                      <label>
                        {" "}
                        الاسم
                      </label> <input placeholder="ادخل الاسم" />{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{
                  marginTop: 0,
                }}
              >
                <div className="col">
                  <div className="row">
                    <div className="col">
                      {" "}
                      <label>
                        {" "}
                        الاسم
                      </label> <input placeholder="ادخل الاسم" />{" "}
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="row">
                    <div className="col">
                      {" "}
                      <label>
                        {" "}
                        الاسم
                      </label> <input placeholder="ادخل الاسم" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            dir="rtl"
            className="row"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          >
               <ReactToPrint
                trigger={() => (
                  <button className="btn btn-primary btn-sm "> طباعة</button>
                )}
                content={() => componentRef.current}
              />
                   <button
                className="btn  btn-danger btn-sm "
                onClick={(e) => back(e)}
              >
                {" "}
                رجوع
              </button>
          </div>
      
      </>
    );
  } else {
    return <h1>لايوجد </h1>;
  }
}

export default ViewModel;
