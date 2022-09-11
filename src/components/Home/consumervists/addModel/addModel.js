import React from "react";
import Sidebar from "../../helper/addon/sidebar";
import { Button } from "react-bootstrap";
import logo from "../../../../assets/logo.png";

function addModel() {
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





            <form
              class="row"
              style={{
                marginTop: 100,
                width: "80%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <div class="col">
                <labels for="customerName"> نوع النشاط</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <labels for="customerName"> رقم الهاتف</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <labels for="customerName"> اسم المندوب</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              
              <div class="col">
                <labels for="customerName"> اسم الزبون</labels>
                <select class="form-select" aria-label="Default select example">
                  <option selected>اسم الزبون</option>
                  <option value="شركة الشرارة">شركة الشرارة</option>
                </select>
                <labels for="customerName"> قوة المولد</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <labels for="customerName"> اسم المندوب</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                
              </div>
              <div class="col">
    
                <labels for="customerName"> قوة المولد</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <labels for="customerName"> اسم المندوب</labels>
                <input
                  type="text"
                  id="customerName"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <p style={{ textAlign: "center" }}>
                _________________________________________________________________________________________________
              </p>

              <div className="row">
            

              <div className="col">

              <div class="container ">
                    <p>الية استعمال الوقود </p>
                    <div class="form-check ">
                      <label class="form-check-label pl-3" for="flexCheckChecked">
                         معدات صناعية
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        required
                        id="flexCheckChecked"
                      />
                    </div>
                    <div class="form-check">
                      <label class="form-check-label pl-3" for="flexCheckDefault">
                        مولد
                      </label>
                      <input
                        class="form-check-input"
                        required
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check ">
                      <label class="form-check-label pl-3" for="flexCheckChecked">
                        اليات ثقيلة
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        required
                        id="flexCheckChecked"
                      />
                    </div>
           
                  </div>
             
             
           
              </div>


           
              <div className="col">
                  <div class="container ">
                    <p>نوع  الوقود </p>

                    <div class="form-check">
                      <label class="form-check-label pl-3" for="flexCheckDefault">
                        ديزل
                      </label>
                      <input
                        class="form-check-input"
                        required
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check ">
                      <label class="form-check-label pl-3" for="flexCheckChecked">
                        بنزين
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        required
                        id="flexCheckChecked"
                      />
                    </div>
                  </div>
                </div>



                <div className="col">
                  <div class="container ">
                    <p>نوع خزان الوقود </p>

                    <div class="form-check">
                      <label class="form-check-label pl-3" for="flexCheckDefault">
                        بلاستيكي
                      </label>
                      <input
                        class="form-check-input"
                        required
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check">
                      <label class="form-check-label pl-3" for="flexCheckChecked">
                        حديدي
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        required
                        id="flexCheckChecked"
                      />
                    </div>
                  </div>
                </div>
            
            </div>
            <p style={{ textAlign: "center" }}>
                _________________________________________________________________________________________________
              </p>

              
              <button
                class="btn btn-danger"
                onClick={null}
                style={{ marginTop: 50 }}
              >
                {" "}
                اضافة زبون
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addModel;
