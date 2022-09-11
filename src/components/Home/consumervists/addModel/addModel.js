import React from "react";
import Sidebar from "../../helper/addon/sidebar";
import Topbar from "../../helper/addon/topbar";

import { Button } from "react-bootstrap";
import logo from "../../../../assets/logo.png";

function addModel() {
  return (
    <div>
      <Sidebar></Sidebar>
      <div class="full_container" dir="rtl">
        <div class="inner_container">
          <div id="content">
            <Topbar />





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
