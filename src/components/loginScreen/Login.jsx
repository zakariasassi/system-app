import React from 'react'
// import '../../constants/engine.js'


function Login() {
  return (
    <div class="full_container" dir='rtl'>
    <div class="container" >
    <img src={"https://www.sharara.com.ly/images/sharara-logo.png"} style={{height:200 , width:'auto' , display:'block' , margin:'auto' }} />

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
                         <label class="label_field">البريد الإلكتروني</label>
                         <input type="email" name="email" placeholder="E-mail" />
                      </div>
                      <div class="field">
                         <label class="label_field">كلمة المرور</label>
                         <input type="password" name="password" placeholder="Password" />
                      </div>

                      <div class="field margin_0">
                         <label class="label_field hidden">hidden label</label>
                         <button class="main_bt" style={{float:'right'}}>Sing In</button>
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
