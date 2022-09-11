import React , {useState , useContext} from 'react'
import Sidebar from "../../helper/addon/sidebar";
import { users } from "../../../../tests/users";
import logo from "../../../../assets/logo.png";
import { AuthContext } from '../../../loginScreen/AuthContext';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Topbar from '../../helper/addon/topbar';






function AddCosumer() {

  const [Cname , setCname] = useState('');
  const [Cphone , setCphone] = useState('');
  const [Clocation , setClocation] = useState('');


  const addNewCustomer = (e) => {
    e.preventDefault();
    if(Cname === " " && Cphone === " " && Clocation === " "){
      const errorInput = () => toast("يرجي تعبئة جميع الحقول");
      errorInput();
      
    }else{
      alert(Cname)
      axios.post("http://192.168.88.17/app/api/customer_insert.php", {
        name:Cname,
        phone:Cphone,
        address:Clocation,
     }).then((res) => {
       console.log(res)
     }).catch((e) => {
       console.log(e)
     })
    }


  }
 




  return (
    
    <div>
      <Sidebar></Sidebar>
 

      <div class="full_container" dir="rtl">
        <div class="inner_container">
          <div id="content">
            <Topbar/>

            <div style={{
              backgroundColor : 'white',
              width:'90%',
              boxShadow:10,
              margin:'auto'
            }}>
            <h1 style={{ textAlign: "center", marginTop: 30 }}>
              اضافة زبون الي المنظومة
             
            </h1>
            <form
              class="row"
              style={{
                marginBottom:60,
                marginTop: 30,
                width: "80%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <div class="col">
                <labels for="customerName"> اسم الزبون</labels>
                <input
                  type="text"
                  id="customerName"
                  name='name'
                  required
                  onChange={e=> setCname(e.target.value)}
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="col">
                <labels for="customerNumber"> رقم الزبون</labels>
                <input
                  type="text"
                  name='phone'
                  required
                  onChange={e=> setCphone(e.target.value)}
                  id="customerNumber"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div class="col">
                <labels for="customerNumber"> العنوان </labels>
                <input
                  type="text"
                  id="customerLocation"
                  name='address'
                  class="form-control"
                  placeholder="العنوان"
                  required
                  onChange={e=> setClocation(e.target.value)}
                />
              </div>
              <button
                style={{ marginTop: 30 }}
                class="btn btn-danger"
                onClick={addNewCustomer}
              >
             
                اضافة زبون
              </button>
            </form>
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
                  <td>val.</td>
                  <td>العالمية للطيران</td>
                  <td>
                    <span class="badge text-bg-danger">لم يعتمد</span>
                  </td>
                  <td>31/10/1996</td>
                  <td>31/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddCosumer;
