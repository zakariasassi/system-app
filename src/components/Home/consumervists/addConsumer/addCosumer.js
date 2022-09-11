import React , {useState} from 'react'
import Sidebar from "../../helper/addon/sidebar";
import { users } from "../../../../tests/users";
import logo from "../../../../assets/logo.png";
import axios from "axios"






function AddCosumer() {


  const [Cname , setCname] = useState('');
  const [Cphone , setCphone] = useState('');
  const [Clocation , setClocation] = useState('');


  const addNewCustomer = (e) => {
    e.preventDefault();
    alert(Cphone)
    axios.post("http://192.168.88.17/app/api/login.php", {
       name:Cname,
       phone:Cphone,
       addres:Clocation,
    }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })


  }
 




  return (
    
    <div>
      <Sidebar></Sidebar>
      <div class="full_container" dir="rtl">
        <div class="inner_container">
          <div id="content">
            <div class="topbar">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="full">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    class="sidebar_toggle"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                  <div class="logo_section">
                    <a href="index.html">
                      <img class="img-responsive" src={logo} alt="#" />
                    </a>
                  </div>
                  <div class="right_topbar">
                    <div class="icon_info">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-bell-o"></i>
                            <span class="badge">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-question-circle"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge">3</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="user_profile_dd">
                        <li>
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            <img
                              class="img-responsive rounded-circle"
                              src="images/layout_img/user_img.jpg"
                              alt="#"
                            />
                            <span class="name_user">John David</span>
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="profile.html">
                              My Profile
                            </a>
                            <a class="dropdown-item" href="settings.html">
                              Settings
                            </a>
                            <a class="dropdown-item" href="help.html">
                              Help
                            </a>
                            <a class="dropdown-item" href="login.php">
                              <span>Log Out</span>{" "}
                              <i class="fa fa-sign-out"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div style={{
              backgroundColor : 'white',
              width:'90%',
              boxShadow:10,
              margin:'auto'
            }}>
            <h1 style={{ textAlign: "center", marginTop: 30 }}>
              اضافة زبون الي المنظومة
            </h1>
            <form
              class="row"
              style={{
                marginBottom:60,
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
                  onChange={e=> setCname(e.target.value)}
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="col">
                <labels for="customerNumber"> رقم الزبون</labels>
                <input
                  type="text"
                  onChange={e=> setCphone(e.target.value)}
                  id="customerNumber"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div class="col">
                <labels for="customerNumber"> العنوان </labels>
                <input
                  type="text"
                  onChange={e=> setClocation(e.target.value)}
                  id="customerLocation"
                  class="form-control"
                  placeholder="العنوان"
                />
              </div>
              <button
                style={{ marginTop: 30 }}
                class="btn btn-danger"
                onClick={addNewCustomer}
              >
                {" "}
                اضافة زبون
              </button>
            </form>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> رقم النموذج</th>
                  <th scope="col">اسم الزبون</th>
                  <th scope="col">الاعتماد</th>
                  <th scope="col">تاريخ الاصادر</th>
                  <th scope="col">تاريخ اخر تعديل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>val.</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-danger">لم يعتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCosumer;
