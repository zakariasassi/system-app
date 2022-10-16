import React, { useEffect, useState } from "react";
import Sidebar from "../../helper/addon/sidebar";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../constants/engine";

function Models() {
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
    const res = await axios.get(baseUrl + "cvm_view_all.php");

    console.log(res);

    if (res) {
      setALlModels(res.data);
    } else {
      console.log("no data is avilabel");
    }
  };

  useEffect(() => {
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

    if (!searchBynumber && !setSeachByname && !dateFrom && !dateTo) {
      console.log(" no data ");
    } else {
      const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php", {
        id_cvm: searchBynumber,

        name: searchByname,

        date_from: dateFrom,

        date_to: dateTo,
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

    let iduser = window.localStorage.getItem("userID");

    //post request withe axios package from npm
    await axios
      .post(
        baseUrl + "cvm_delete.php",

        {
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

  // --------------------------------------------------------------------

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="full_container">
        <div className="inner_container">
          <div id="content">
            <Topbar />

            <div
              dir="rtl"
              className="row"
              style={{
                marginTop: 30,
                padding: 50,
                backgroundColor: "#15283D",
                width: "100%",
                boxShadow: 10,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginTop: 30,
                  marginBottom: 30,
                  color: "#FF5723",
                }}
              >
                عرض النماذج
              </h1>
              <div className="col">
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
              <div className="col">
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
              <div className="col">
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
              <div className="col">
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
            </div>
            <div
              style={{
                marginTop: 10,
                height: 60,
                width: "auto",
              }}
            >
              <div
                style={{
                  width: "20%",
                  margin: "auto",
                }}
              >
                <button
                  onClick={(e) => Searching(e)}
                  className="btn-warning "
                  style={{
                    border: "0px",
                    height: "40px",
                    width: "40vh",
                    margin: "auto",
                    fontWeight: "bold",
                    color: "white",
                    background: "#FF5723",
                  }}
                >
                  بحث
                </button>
              </div>
            </div>

            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
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
                    {" "}
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
                  return (
                    <tr key={key}>
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
                          {index.coordinates_location}
                        </a>
                      </td>

                      <td>
                        <Button
                          style={{
                            margin: 10,
                            textAlign: "center",
                          }}
                        >
                          تعديل
                        </Button>

                        <Button
                          onClick={(e) => HandelDelete(e, index.id_cvm)}
                          style={{
                            margin: 10,
                            textAlign: "center",
                          }}
                        >
                          حذف
                        </Button>

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
                      </td>
                    </tr>
                  );
                })}
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
  );
}

export default Models;
