import React , {useState} from 'react'
import axios from 'axios'
// import '../../constants/engine.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

   const [username , setUsername] = useState('');
   const [password , setPassword] = useState('');


   const login = (e) => {
      // console.log({username , password})
      // const data = JSON.stringify({
      //    username: username,
      //    password: password
      // })
      // console.log(data)
      e.preventDefault();
      axios.post('http://192.168.88.17/app/api/login.php', {
         username: username,
         password: password
      
      })
      .then((response) => { 

         if(response.data.success === 1){
            console.log(response.data.username)
            window.localStorage.setItem('isLogIn' , true)

         }else{
            const notify = () => toast(response.data.msg);
            notify();
 
         }
      }).catch((e) => console.log(e))
       
   }

  return (
    <div class="full_container" dir='rtl' style={{backgroundColor:'#0C1D4F'}}> 
    <div class="container" >
    {/* <img src={"https://www.sharara.com.ly/images/sharara-logo.png"} style={{height:200 , width:'auto' , display:'block' , margin:'auto' }} /> */}

       <div class="center verticle_center full_height">

          <div class="login_section">
             <div class="logo_login">
                <div class="center">
                   <h1 style={{color:'white'}} >شركة الشرارة الذهبية للخدمات النفطية</h1>
                </div>
             </div>
             <div class="login_form">
                <form>
                   <fieldset>
                      <div class="field">
                         <label for="user" class="label_field">البريد الإلكتروني</label>
                         <input id="user" type="text" name="username" placeholder="Username" value={username}
                            onChange={ e=> setUsername(e.target.value)}
                          />
                      </div>
                      <div class="field">
                         <label class="label_field">كلمة المرور</label>
                         <input type="password" name="password" placeholder="Password"  value={password}
                          onChange={e=> setPassword(e.target.value)}
                         />

                      </div>
                      <ToastContainer />

                      <div class="field margin_0">
                         <button  onClick={login} class="main_bt" style={{float:'right'}}> تسجيل دخول</button>
                      </div>
                   </fieldset>
                </form>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}


export default Login