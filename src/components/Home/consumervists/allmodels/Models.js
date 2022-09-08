import React from 'react'
import Sidebar from '../../helper/addon/sidebar'
import logo from '../../../../assets/logo.png'

import {Button} from 'react-bootstrap'
function Models() {
  return (
<div>
            <Sidebar></Sidebar>
            <div class="full_container">
         <div class="inner_container">
   
            <div id="content">
            <div class="topbar">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <div class="full">
                        <button type="button" id="sidebarCollapse" class="sidebar_toggle"><i class="fa fa-bars"></i></button>
                        <div class="logo_section">
                           <a href="index.html"><img class="img-responsive" src={logo} alt="#" /></a>
                        </div>
                        <div class="right_topbar">
                           <div class="icon_info">
                              <ul>
                                 <li><a href="#"><i class="fa fa-bell-o"></i><span class="badge">2</span></a></li>
                                 <li><a href="#"><i class="fa fa-question-circle"></i></a></li>
                                 <li><a href="#"><i class="fa fa-envelope-o"></i><span class="badge">3</span></a></li>
                              </ul>
                              <ul class="user_profile_dd">
                                 <li>
                                    <a class="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src="images/layout_img/user_img.jpg" alt="#" /><span class="name_user">John David</span></a>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="profile.html">My Profile</a>
                                       <a class="dropdown-item" href="settings.html">Settings</a>
                                       <a class="dropdown-item" href="help.html">Help</a>
                                       <a class="dropdown-item" href="login.php"><span>Log Out</span> <i class="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
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
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-danger">لم يعتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
    <tr>
      <th scope="row">1</th>
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-success">معتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
    <tr>
      <th scope="row">1</th>
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-success">معتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
    <tr>
      <th scope="row">1</th>
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-danger">لم يعتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
    <tr>
      <th scope="row">1</th>
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-danger">لم يعتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
    <tr>
      <th scope="row">1</th>
      <td>43759823</td>
      <td>العالمية للطيران</td>
      <td><span class="badge text-bg-success">معتمد</span></td>
      <td>31/10/1996</td>
      <td>31/10</td>


    </tr>
  </tbody>
</table>
      
</div>
</div>
</div>

        </div>
  )
}

export default Models
