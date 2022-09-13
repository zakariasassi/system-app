import React, { useState, useEffect } from "react";
import Sidebar from "../../helper/addon/sidebar";
// import { users } from "../../../../tests/users";
// import logo from "../../../../assets/logo.png";
// import { AuthContext } from '../../../loginScreen/AuthContext';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Topbar from "../../helper/addon/topbar";




function AddCosumer() {
  const [allData, setallData] = useState([]);
  const [Cname, setCname] = useState("");
  const [Cphone, setCphone] = useState("");
  const [Clocation, setClocation] = useState("");
  const [searching, setsearching] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get( "http://192.168.88.17/app/api/customer_all.php");
      setallData(res.data);
    };
    fetchData();
  }, []);
  console.log(allData);
  const addNewCustomer = (e) => {
    e.preventDefault();
    if (Cname === " " && Cphone === " " && Clocation === " ") {
      const errorInput = () => toast("يرجي تعبئة جميع الحقول");
      errorInput();
    } else {
      axios
        .post("http://192.168.88.17/app/api/customer_insert.php", {
          name: Cname,
          phone: Cphone,
          address: Clocation,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Sidebar></Sidebar>

      <div class="full_container" dir="rtl">
        <div class="inner_container">
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
                class="row"
                style={{
                  marginBottom: 60,
                  marginTop: 30,
                  width: "80%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <div class="col">
                  <labels for="customerName"> اسم الزبون</labels>
                  <input
                    type="text"
                    id="customerName"
                    name="name"
                    required
                    onChange={(e) => setCname(e.target.value)}
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
                <div class="col">
                  <labels for="customerNumber"> رقم الزبون</labels>
                  <input
                    type="text"
                    name="phone"
                    required
                    onChange={(e) => setCphone(e.target.value)}
                    id="customerNumber"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col">
                  <labels for="customerNumber"> العنوان </labels>
                  <input
                    type="text"
                    id="customerLocation"
                    name="address"
                    class="form-control"
                    placeholder="العنوان"
                    required
                    onChange={(e) => setClocation(e.target.value)}
                  />
                </div>
                <button
                  style={{ marginTop: 30 }}
                  class="btn btn-danger"
                  onClick={addNewCustomer}
                >
                  اضافة زبون
                </button>
              </form>
            </div>

            <input
              type="text"
              className="input"
              placeholder="بحث عن طريق الاسم"
              onChange={(e) => setsearching(e.target.value)}
            />

            <table class="table">
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
                            <span class="badge text-bg-info">معتمد </span>
                          ) : (
                            <span class="badge text-bg-danger"> غير معتمد</span>
                          )}
                        </td>
                        <td>{data.address}</td>
                        <td>
                          <button type="button" class="btn btn-warning">
                            عرض الزيارات{" "}
                          </button>
                        </td>
                        <td>
                          {data.active ? (
                            <button type="button" class="btn btn-danger">
                              الغاء تفعيل
                            </button>
                          ) : (
                            <button type="button" class="btn btn-info">
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
      <ToastContainer />
    </div>
  );
}

export default AddCosumer;
