import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../helper/addon/sidebar";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import {ExportToExcel} from './ExportXls'
import { baseUrl } from "../../../../constants/engine";
let iduser = window.localStorage.getItem("userID");
let token = window.localStorage.getItem("token");
function Models() {
  const fileName = "myfile"; 
  const usersdata = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },

  ]
  const Navigate = useNavigate();

  const [allmodels, setALlModels] = useState([]);
  const [curentpage, setCurentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = curentpage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const [searchByname, setSeachByname] = useState("");
  const [searchBynumber, setSeachBynumber] = useState("");
  const [dateFrom, setDatefrom] = useState("");
  const [dateTo, setDateto] = useState("");

  let curentPost = allmodels.slice(firstPostIndex, lastPostIndex);

  const getModelsData = async () => {


    const res = await axios.post(baseUrl + "cvm_view_all.php" , {
        ID_USER:iduser,
        TOKEN:token      

    });

    console.log(res);
    if (res) {
      setALlModels(res.data);
    } else {
      console.log("no data is avilabel");
    }


  };

  useEffect(() => {
      console.log(iduser + token)
    getModelsData();
    
  }, []);

  const ViewSpecifcModel = (e, id) => {
    e.preventDefault();

    Navigate("/viewspmodel", { state: { id: id } });
  };

  // This Function accepting tow argument first one  for event of html tag and other for id of the model
  // this func make api request and send the id to backend
  // we get id user form local storage because the application save the login user data into local storage
  // after everything going ok we this function call another function name getmodeldata
  // the reason of calling the function to make refresh to our into the data object that we stored it
  // into allmodel state

  const Searching = async (e) => {
    e.preventDefault();

    if (searchByname === "") {
      console.log(" no data ");

    } else {
      const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php", {
        id_cvm: searchBynumber,
        name: searchByname,
        date_from: dateFrom,
        date_to: dateTo,
        ID_USER : iduser,
        TOKEN : token
      });

      setALlModels(resFilterd.data);

      if (allmodels.length > 0) {
        curentPost = allmodels.slice(firstPostIndex, lastPostIndex);

        console.log(curentPost);
      } else {
        curentPost = allmodels;
      }
    }
  };

  // --------------------------------------------------------------------

  // This Function accepting tow argument first one  for event of html tag and other for id of the model
  // this func make api request and send the id to backend
  // we get id user form local storage because the application save the login user data into local storage
  // after everything going ok we this function call another function name getmodeldata
  // the reason of calling the function to make refresh to our into the data object that we stored it
  // into allmodel state

  const HandelDelete = async (e, id) => {
    // prevent button form auto submitting
    e.preventDefault();

    //This Line of code get user id from local storage .


    //post request withe axios package from npm
    await axios
      .post(
        baseUrl + "cvm_delete.php",

        {
          ID_USER : iduser,
          TOKEN : token,
          id_cvm: id,
          id_user: iduser,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    getModelsData();
  };
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // --------------------------------------------------------------------
    const tableRef = useRef();
  return (
    <>
        
      <div>
        <Sidebar></Sidebar>
        <div className="full_container">
          <div className="inner_container">
            <div id="content">
              <Topbar />

   
                <br></br>
              <div dir="rtl" class="col-md-12">
                <div class="white_shd full margin_bottom_30">
                  
            
                  <div class="table_section padding_infor_info">
                  <div
                dir="rtl"
                className="row"
           
              >
                <h1
                  style={{
                    textAlign: "center",
                
                    marginBottom: 30,
                    color: "#FF5723",
                  }}
                >
                   عرض النماذج
                </h1>
                <div className="col-md-2">
                  <label style={{ color: "white" }} htmlFor="searchbyname">
                    بحث عن طريق الاسم
                  </label>
                  <input
                    id="searchbyname"
                    className="form-control"
                    placeholder="بحث عن طريق الاسم"
                    onChange={(e) => setSeachByname(e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  <label style={{ color: "white" }} htmlFor="searchbyname">
                    بحث عن طريق الرقم
                  </label>
                  <input
                    id="searchbyname"
                    className="form-control"
                    onChange={(e) => setSeachBynumber(e.target.value)}
                    placeholder="بحث عن طريق الرقم"
                  />
                </div>
                <div className="col-md-2">
                  <label style={{ color: "white" }} htmlFor="from">
                    {" "}
                    من{" "}
                  </label>
                  <input
                    id="from"
                    onChange={(e) => setDatefrom(e.target.value)}
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-md-2">
                  <label style={{ color: "white" }} htmlFor="to">
                    {" "}
                    إلي{" "}
                  </label>
                  <input
                    id="to"
                    type="date"
                    onChange={(e) => setDateto(e.target.value)}
                    className="form-control"
                  />
                           
                </div>
                
                <button
                    onClick={(e) => Searching(e)}
                    className=""
                    style={{
                      border: "0px",
                      height: "40px",
                      width: "20vh",
                      margin: "auto",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "0px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      background: "#FF5723",
                    }}
                  >
                    بحث
                  </button>
              
              </div>

                    <br></br>
                    <DownloadTableExcel
                    filename= {today}
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button style={{margin:10}} type="button" class="btn btn-success"> عرض تقرير الصفحة الحالية </button>

                </DownloadTableExcel>
                <ExportToExcel apiData={allmodels} fileName={fileName} />
                    <div class="table-responsive-sm">
                      <table  ref={tableRef} class="table table-striped  table-hover"  style={{
                        fontSize: 20
                      }}>
                        <thead>
                          <tr >
                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                          
                              رقم النموذج
                            </th>
                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              اسم الزبون
                            </th>
                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              تاريخ الزيارة
                            </th>
                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              تاريخ الاضافة{" "}
                            </th>

                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                      
                              الاحداثيات
                            </th>

                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              اجراء{" "}
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          {curentPost.map((index, key) => {

                              if(index.success === 0 ) {
                                return(

                                    <tr>
                                      <td colspan="7" >
                                      <div class="alert alert-warning" role="alert" style={{
                                      textAlign:'center',

                                  }}> { index.msg}</div>

                                      </td>
                                    </tr>
                                
                                
                                )
                              }else{
                                return (
                         <tr   key={key}>
                        <td
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {index.id_cvm}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          {index.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {index.date_visits}
                        </td>

                        <td
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {index.date_create}
                        </td>

                        <td
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <a href={index.coordinates_location}>
                            موقع الزيارة
                          </a>
                        </td>

                        <td>
                          {/* <Button
                          style={{
                            margin: 10,
                            textAlign: "center",
                          }}
                        >
                          تعديل
                        </Button> */}

                          {/* <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    حذف
                    </button>
            */}

                          <Button
                            onClick={(e) => ViewSpecifcModel(e, index.id_cvm)}
                            style={{
                              margin: 10,
                              textAlign: "center",
                            }}
                          >
                            عرض
                          </Button>

                          <Button
                            className="btn btn-danger"
                            onClick={(e) => HandelDelete(e, index.id_cvm)}
                            style={{
                              margin: 10,
                              textAlign: "center",
                            }}
                          >
                            حذف
                          </Button>
                        </td>
                      </tr>
                    );
                          }
                  }
                  )
                }
                        </tbody>
                      </table>

              <Pagination
                totalposts={allmodels.length}
                posterpage={postPerPage}
                setCurentpage={setCurentpage}
              />
                    </div>
                  </div>
                </div>
              </div>

    

            </div>
          </div>
        </div>

        {/* <div style={{
        zIndex:999
      }} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button"  class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div> */}
      </div>
    </>
  );
                  
}

export default Models;
