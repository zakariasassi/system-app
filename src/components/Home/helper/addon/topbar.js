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
           <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="full">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    className="sidebar_toggle"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <div className="logo_section">
                    <a href="index.html">
                      <img className="img-responsive" src={logo} alt="#" />
                    </a>
                  </div>
                  <div className="right_topbar">
                    <div className="icon_info">
                      <ul>
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-bell-o"></i>
                            <span className="badge">2</span>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-question-circle"></i>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge">3</span>
                          </a>
                        </li> */}
                      </ul>
                      <ul className="user_profile_dd">
                        <li>
                          <a className="dropdown-toggle" data-toggle="dropdown">
                     
                            <span className="name_user">{name}</span>
                          </a>
                          <div className="dropdown-menu">
                            
                            <a className="dropdown-item">
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
