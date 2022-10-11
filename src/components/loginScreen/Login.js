import React, { useState } from "react";
import { users } from "../../tests/users";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../constants/engine.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../constants/engine.js";





function Login() {




  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const userlogin = (e) => {
    e.preventDefault();
    if(!username  && username === "" && !password && password ==="" ) {
      const  errorhandler = () =>  toast("الرجاء تعبئة جميع الحقول")
      errorhandler()
    }else if(username.match((/^[a-zA-Z]+$/)) === false ) {
      const  errorhandler = () =>  toast ("الرجاء ادخال الاسم بطريقة صحيحة")
      errorhandler()
    }
    axios.post( baseUrl +  "login.php", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.username === username) {
          window.localStorage.setItem("isLogIn", true);
          window.localStorage.setItem("userID", response.data.id_user);
          window.localStorage.setItem("username", response.data.username);
          navigate("/allmodels");
        } else {
          const notify = () => toast(response.data.msg);
          notify();
        }
      }).catch((e) => console.log(e));
  };

  return (
    <div
      className="full_container"
      dir="rtl"
      style={{ backgroundColor: "#0C1D4F" }}
    >
      <div class="container">

        <div className="center verticle_center full_height">
          <div className="login_section">
            <div className="logo_login">
              <div className="center">
                <h1 style={{ color: "white" }}>
                  شركة الشرارة الذهبية للخدمات النفطية
                </h1>
              </div>
            </div>
            <div className="login_form">
              <form>
                <fieldset>
                  <div className="field">
                    <label htmlFor="user" className="label_field">
                      البريد الإلكتروني
                    </label>
                    <input
                      id="user"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label className="label_field">كلمة المرور</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <ToastContainer />

                  <div className="field margin_0">
                    <button
                      onClick={e=>userlogin(e)}
                      className="main_bt"
                      style={{ float: "right" }}
                    >
                      
                      تسجيل دخول
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
