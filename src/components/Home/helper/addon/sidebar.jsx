import React from 'react'
import {Link} from 'react-router-dom'

function sidebar() {
  return (
    <div>
            <nav id="sidebar">
               <div class="sidebar_blog_1">
                  <div class="sidebar-header">
                     <div class="logo_section">
                        <a href="index.html"><img class="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
                     </div>
                  </div>
                  <div class="sidebar_user_info">
                     <div class="icon_setting"></div>
                     <div class="user_profle_side">
                        <div class="user_img"><img class="img-responsive" src="images/layout_img/user_img.jpg" alt="#" /></div>
                        <div class="user_info">
                           <h6>Zakaria Sassi</h6>
                           <p><span class="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sidebar_blog_2">
                  <h4>General</h4>
                  <ul class="list-unstyled components">
                     <li class="active">
                        <a href="#dashboard" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-dashboard yellow_color"></i> <span>الإدارة الفنية</span></a>
                        <ul class="collapse list-unstyled" id="dashboard">
                           <li>
                           <Link to="/allmodels"><a> <span> النماذج </span></a></Link>
                           </li>
                           <li>
                               <Link to="/addmodel"><a> <span>اضافة نموذج</span></a></Link>
                           </li>
                        </ul>
                     </li>
                    
                     {/* <li><a href="map.html"><i class="fa fa-map purple_color2"></i> <span>Map</span></a></li>
                     <li><a href="charts.html"><i class="fa fa-bar-chart-o green_color"></i> <span>Charts</span></a></li>
                     <li><a href="settings.html"><i class="fa fa-cog yellow_color"></i> <span>Settings</span></a></li> */}
                  </ul>
               </div>
            </nav>
    </div>
  )
}

export default sidebar
         