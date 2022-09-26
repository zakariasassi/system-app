import React from "react";
import Sidebar from "../../helper/addon/sidebar";
import logo from "../../../../assets/logo.png";

import { Button } from "react-bootstrap";
import Topbar from "../../helper/addon/topbar";
function Models() {
  return (
    <div >
      <Sidebar></Sidebar>
      <div class="full_container">
        <div class="inner_container">
          <div id="content">
              <Topbar />

            <div dir="rtl" className="row" style={{
                  
                  padding:20
                }}>
                 <div className="col">
                <label for="searchbyname" >بحث عن طريق الاسم</label>
                 <input id="searchbyname" className="input-group"  placeholder="بحث عن طريق الاسم"/>
                 </div>
                 <div className="col">
                <label for="searchbyname" >بحث عن طريق الرقم</label>
                 <input id="searchbyname" className="input-group"  placeholder="بحث عن طريق الرقم"/>
                 </div>
                 <div className="col">
                 <label for="from" > من  </label>
                 <input id="from" type="date" className="input-group" />
                 </div>
                 <div className="col">
                 
                 <label for="to" > إلي  </label>
                 <input id="to" type="date" className="input-group" />
                 </div>
                 <button className="btn-primary "    style={{
                      border:'0px',
                      height:'26px',
                      marginTop:20,
                      
                      display:'block',
                      width: 40,
                      
                    }}  >بحث </button>
                </div>

            <table class="table" dir="rtl">
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
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-danger">لم يعتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-success">معتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-success">معتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-danger">لم يعتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-danger">لم يعتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>43759823</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-success">معتمد</span>
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

export default Models;
