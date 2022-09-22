import React from 'react'
import logo from '../../../../assets/logo.png'
import { useNavigate  , Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Topbar() {
    const navigate = useNavigate();
    const name = window.localStorage.getItem('username')
    const logOutUser = (e) => {
          
            localStorage.removeItem('username')
            localStorage.removeItem('userID')
            localStorage.removeItem('isLogIn')
            navigate('/login')    
    }
  return (
    <div>
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
                        {/* <li>
                          <a href="#">
                            <i class="fa fa-bell-o"></i>
                            <span class="badge">2</span>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i class="fa fa-question-circle"></i>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge">3</span>
                          </a>
                        </li> */}
                      </ul>
                      <ul class="user_profile_dd">
                        <li>
                          <a class="dropdown-toggle" data-toggle="dropdown">
                     
                            <span class="name_user">{name}</span>
                          </a>
                          <div class="dropdown-menu">
                            
                            <a class="dropdown-item">
                              <span onClick={logOutUser}> Log Out  </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
    </div>
  )
}

export default Topbar
