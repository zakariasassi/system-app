import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../../assets/logo.png'

function sidebar() {
   const name = window.localStorage.getItem('username')
  return (
    <div>
            <nav id="sidebar">
               <div className="sidebar_blog_1">
                  <div className="sidebar-header">
                     <div className="logo_section">
                        <Link to="#"><img className="logo_icon img-responsive" src={logo} alt="#" /></Link>
                     </div>
                  </div>
                  <div className="sidebar_user_info">
                     <div className="icon_setting"></div>
                     <div className="user_profle_side">
                        <div className="user_img"><img className="img-responsive" src="/images/layout_img/user-image.png" alt="#" /></div>
                        <div className="user_info">
                           <h6>{name} </h6>
                           <p><span className="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar_blog_2">
                  <ul className="list-unstyled components">
                     <li className="active">
                        <Link to="/allmodels" data-toggle="collapse" aria-expanded="false" ><i className="fa fa-dashboard yellow_color"></i> <span  style={{fontSize:18 , color:'#FF9801' , fontWeight:'bold'}}>الإدارة الفنية</span></Link>
                        <ul className=" list-unstyled" id="dashboard">
                           <li>
                           <Link to="/allmodels"> <span style={{fontSize:18 , fontWeight:'bold'}} > النماذج </span></Link>
                           </li>
                           <li>
                               <Link to="/addconumer"><span  style={{fontSize:18 , fontWeight:'bold'}}>اضافة زبون</span></Link>
                           </li>
                           <li>
                               <Link to="/addmodel"><span  style={{fontSize:18 , fontWeight:'bold'}}>اضافة نموذج</span></Link>
                           </li>
                        </ul>
                     </li>
                    
                     {/* <li><a to="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></a></li>
                     <li><a to="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></a></li>
                     <li><a to="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></a></li> */}
                  </ul>
               </div>










               <div className="sidebar_blog_2">
                  <ul className="list-unstyled components">
                     <li className="active">
                        <Link to="/allmodels" data-toggle="collapse" aria-expanded="false" ><i className="fa fa-dashboard yellow_color"></i> <span  style={{fontSize:18 , color:'#FF9801' , fontWeight:'bold'}}>ّIT Depratment </span></Link>
                        <ul className=" list-unstyled" id="dashboard">
                           <li>
                           <Link to="/main"> <span style={{fontSize:18 , fontWeight:'bold'}} > الرئيسية </span></Link>
                           </li>
                           <li>
                               <Link to="/addnewuser"><span  style={{fontSize:18 , fontWeight:'bold'}}>ادارة المستخدمين </span></Link>
                           </li>
                    
                        </ul>
                     </li>
                    
                     {/* <li><a to="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></a></li>
                     <li><a to="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></a></li>
                     <li><a to="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></a></li> */}
                  </ul>
               </div>










            </nav>
    </div>
  )
}

export default sidebar
         