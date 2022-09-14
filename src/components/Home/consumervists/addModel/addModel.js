  import React ,{useState , useEffect} from "react";
  import Sidebar from "../../helper/addon/sidebar";
  import Topbar from "../../helper/addon/topbar";

  import { Button } from "react-bootstrap";
  import logo from "../../../../assets/logo.png";
import axios from "axios";

  function AddModel() {
  const [customername , setCustomername] = useState('');
  const [activitybe , setActiviy] = useState('');
  const [datevist , setDatevist] = useState('');
  const [city , setCity] = useState('');
  const [phone , setPhone] = useState('')
  const [generator , setGeneretor] = useState('');
  const [position , setPosition] = useState('');
  const [delvname , setDelvname] = useState('')



  const [gasusage , setGasusage] = useState([]);
  const [gastybe, setGastybe] = useState([]);
  const [tanktybe , setTanktybe] = useState([]);

  const [tanksize , setTanksize] = useState([]);
  const [tankpositions , setTankposition] = useState('');
  const [countcy , setCountcu] = useState('');
  const [space , setSpace] = useState('');


  
  const [alldata , setAlldata] = useState([])

    
    // const getAllUsers = async (e) => {
    //   const res = await axios.get('http://192.168.88.17/app/api/customer_all_name.php')
    //     setAlldata(res.data)
    // }

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get( "http://192.168.88.17/app/api/customer_all_name.php");
        setAlldata(res.data);
      };
      fetchData();
    }, []);

    const getuserdata = (e) => {
      console.log(e.target.value);
    }


    return (
      <div>
        <Sidebar></Sidebar>
        <div class="full_container" dir="rtl">
          <div class="inner_container">
            <div id="content">
              <Topbar />
              <form
                class="row"
                style={{
                  marginTop: 100,
                  width: "80%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <div class="col">
                  <labels for="customerName"> نوع النشاط</labels>
                  <input
                    type="text"
                    id="customerName"
                    onChange={ e => setActiviy(e.target.value)}
                    class="form-control"
                    placeholder="نوع النشاط"
                    aria-label="First name"
                    required
                  />
                  <labels for="customerName"> رقم الهاتف</labels>
                  <input
                    type="number"
                    id="customerName"
                    onChange={(e) => setPhone(e.target.value)}
                    class="form-control"
                    placeholder="رقم الهاتف"
                    aria-label="First name"
                    required
                  />
                  <labels for="customerName"> اسم المندوب</labels>
                  <input
                    type="text"
                    onChange={(e) => setDelvname(e.target.value)}
                    id="customerName"
                    class="form-control"
                    placeholder="اسم المندوب"
                    required
                    aria-label="First name"
                  />
                </div>

                <div class="col">
                  <labels for="customerName"> اسم الزبون</labels>
                  <input type="text" name="city" class="form-control" onChange={(e) => setCustomername(e.target.value)} id="customerName" placeholder="اسم الزبون"  
                  list="custoname" required / >
                    <datalist id="custoname" >
                  
                    { alldata.map( (val) => {
                        return( <option key={val.id_customer} value={val.name}  />)
                        
                      }) }
                    </datalist>
                  <labels for="customerName"> قوة المولد</labels>
                  <input
                    type="text"
                    id="customerName"
                    onChange={(e) => setGeneretor(e.target.value)}
                    required
                    class="form-control"
                    placeholder="قوة المولد"
                    aria-label="First name"
                  />
                    <labels for="customerName"> تاريخ الزيارة </labels>
                  <input
                    type="date"
                    id="customerName"
                    onChange={(e) => setDatevist(e.target.value)}
                    required
                    class="form-control"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <labels for="customerName"> المدينة </labels>
                  <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    required
                    id="customerName"
                    class="form-control"
                    placeholder="المدينة"
                    aria-label="First name"
                  />
                  <labels for="customerName"> احداثيات الموقع </labels>
                  <input
                    type="text"
                    id="customerName"
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    class="form-control"
                    placeholder="احداثيات الموقع"
                    aria-label="First name"
                  />
          
                </div>
                <p style={{ textAlign: "center" }}>
                  _________________________________________________________________________________________________
                </p>

                <div className="row">
                  <div className="col">
                    <div class="container ">
                      <p>الية استعمال الوقود </p>
                      <div class="form-check ">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckChecked"
                        >
                          معدات صناعية
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={(e) => setPosition(e.target.value)}
                          value="معدات صناعية"
                          id="flexCheckChecked"
                        />
                      </div>
                      <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          مولد
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <div class="form-check ">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckChecked"
                        >
                          اليات ثقيلة
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="container ">
                      <p>نوع الوقود </p>

                      <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          ديزل
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <div class="form-check ">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckChecked"
                        >
                          بنزين
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div class="container ">
                      <p>نوع خزان الوقود </p>

                      <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          بلاستيكي
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckChecked"
                        >
                          حديدي
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>
                  _________________________________________________________________________________________________
                </p>

                <div className="row">
                  
                      <p> سعة الخزان</p>
                        <div className="col" >
                          <input type='number' class="form-control" placeholder="ادخل سعة الخزان"  />
                        </div>

                        <div className="col" >
                        <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          فوق الارض
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        </div>
                        </div>


                        <div className="col" >
                        <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          تحت الارض
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        </div>
                        </div>
                
                      </div>



                      <div className="row" style={{
                        marginTop:20

                      }}>
                  
                    <div className="col" >
                      <input style={{width:300}}  type='number' class="form-control" placeholder="عدد اسطوانات الإطفاء"  />
                    </div>

                    <div className="col" >
                    <input style={{width:300}} type='number'class="form-control" placeholder="بعد الخزان عن المولد"  />

                    </div>


                
                  </div>
                <button
                  class="btn btn-danger"
                  onClick={null}
                  style={{ marginTop: 50 }}
                >
                  اضافة نموذج جديد
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default AddModel;
