  import React ,{useState , useEffect , useContext} from "react";
  import Sidebar from "../../helper/addon/sidebar";
  import Topbar from "../../helper/addon/topbar";
import Showmodel from "../showModel/showmodel";
  import { Button } from "react-bootstrap";
  import logo from "../../../../assets/logo.png";
import axios from "axios";    
import { baseUrl } from "../../../../constants/engine";

import { ModelContext } from "../showModel/modelContext";

var gasusagearray = [];
var gastypes = [];
var tanktypes = [];

function AddModel() {


  const [open , setOpen] = useState(false)
  const { isopen , setIsopen } = useContext(ModelContext)
  const modelContext = useContext(ModelContext)




  const [customername , setCustomername] = useState('');
  const [activitybe , setActiviy] = useState('');
  const [datevist , setDatevist] = useState('');
  const [city , setCity] = useState('');
  const [phone , setPhone] = useState('')
  const [generator , setGeneretor] = useState('');
  const [position , setPosition] = useState('');
  const [delvname , setDelvname] = useState('')
  const [notes , setNotes] = useState('');

  const [up , setUp] = useState('')
  const [down , setDown] = useState('');

  const [id_coustom , setIdCustomer] = useState('');


  //using state ---------
  const [gasusage , setGasusage] = useState([]);
  const [gastybe, setGastybe] = useState([]);
  const [tanktybe , setTanktybe] = useState([]);
  //-------------



	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
  const handleSubmission = () => {
	};

  const [tanksize , setTanksize] = useState([]);
  const [tankposition , setTankposition] = useState('');
  const [countcy , setCountcy] = useState('');
  const [space , setSpace] = useState('');

  //const [isopen , setIsopen] = useState(false)
  const [uper , setUper] = useState('');
  const [downer , setDowner] = useState('');

  const [allfueldat , setAllfueldata] = useState([]);
  const [alldata , setAlldata] = useState([])

  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get( baseUrl + "customer_all_name.php");
        setAlldata(res.data);
      };
      const fetchfueldata = async () => {
        const fuelres = await axios.get( baseUrl + "fuel_data_all.php");
        setAllfueldata(fuelres.data)
     

        console.log(fuelres.data[0]);
      };
      fetchData();
      fetchfueldata();  
    },[]);


 


        
         
    const handelUsingstate = (e) => {
      const checked = e.target.checked;
      if (checked === true){
        gasusagearray.push(e.target.value)
      }else{
        gasusagearray = gasusagearray.filter(item => item !== e.target.value)
      }
      console.log(gasusagearray)
  } 


  

    const handelGasgTypestate = (e) => {
      const checked = e.target.checked;
      if (checked === true){
        gastypes.push(e.target.value)
      }else{
        gastypes = gastypes.filter(item => item !== e.target.value)
      }
      console.log(gastypes)
      
    } 

    const handelTankTypestate = (e) => {
      const checked = e.target.checked;
      if (checked === true){
        tanktypes.push(e.target.value)
      }else{
        tanktypes = tanktypes.filter(item => item !== e.target.value)
      }
      console.log(tanktypes)
      
    } 








    const handelOpenpop = () => {
        setOpen(true)
    }


    const handleTankPosationUP = (e) => {
      if(e.target.checked){
        setUp("فوق سطح الارض")
      }else{
        setUp(" ")
      }
      setTankposition(up + " + " + down)
    }
    const handleTankPosationDown = (e) => {
      if( e.target.checked){
        setDown("تحت سطح الارض")
      }else{
        setDown(" ")
      }
      setTankposition(up + " + " + down)
    }


    const handeldata =  (e) => {
      e.preventDefault();
        console.log(e.target.value)
        let obj = alldata.find(data => data.name === e.target.value)
        console.log(obj)
        if(obj){
          setIdCustomer(obj.id_customer)
          setPhone(obj.phone)
        }
        if(e.target.value === ""){
          setPhone("")
        }
    }


    function addnewModel  (e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('File', selectedFile);
      console.log(selectedFile)

      const userid =  window.localStorage.getItem('userID') ;
      // const data = {
      //   DATE_VISITS: '2022-09-02' , 
      //   ID_CUSTOMER: id_coustom    , 
      //   DELEGATE_NAME: delvname , 
      //   ACTIVITY_TYPE:activitybe ,
      //   ADDRESS: city ,
      //   COORDINATES_LOCATION: position , 
      //   GENERATOR_POWER :generator, 
      //   TANK_CAPACITY:tanksize , 
      //   TANK_LOCATION: up + down, 
      //   COUNT_EXTINGUISHING_CYLINDERS: countcy , 
      //   DISTANCE_ALTERNATOR_TANK:space , 
      //   NOTE:notes , 
      //   ID_USER:userid,
      // }
      let obj = alldata.find(data => data.name === customername);
      console.log(obj)
      console.log(up)
      console.log(down)
      console.log(gasusagearray)

      axios.post( baseUrl + 'cvm_insert.php' , {
        DATE_VISITS: datevist, 
        ID_CUSTOMER: id_coustom    , 
        DELEGATE_NAME: delvname , 
        ACTIVITY_TYPE:activitybe ,
        ADDRESS: city ,
        COORDINATES_LOCATION: position , 
        GENERATOR_POWER :generator, 
        TANK_CAPACITY:tanksize , 
        TANK_LOCATION: up + down, 
        COUNT_EXTINGUISHING_CYLINDERS: countcy , 
        DISTANCE_ALTERNATOR_TANK:space , 
        NOTE:notes , 
        ID_USER:userid,
        USAGE_STATE:gasusagearray,
        FUEL_KIND:gastypes,
        TANK_KIND:tanktypes
        // file : formData



        
       

    }).then((res) => {
      console.log(res.data)
      // console.log(data)

    }).catch((err) => {
        console.log(err)
    }) 
    handelOpenpop();

    }
    return (
      <div>
 
        <Sidebar></Sidebar>
        <div class="full_container" dir="rtl">
          <div class="inner_container">
          <Topbar />
            <div id="content">
            <ModelContext.Provider value={{open , setOpen}} >
              {open && <Showmodel/>}
              </ModelContext.Provider>
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
                    value={phone}
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
                {/* onChange={(e) => setCustomername(e.target.value)}  */}
                <div class="col">
                  <labels for="customerName"> اسم الزبون</labels>
                  <input type="text" name="city" class="form-control" 
                    onChange={ handeldata }
                   id="customerName" placeholder="اسم الزبون"  
                  list="custoname"  required />


                    <datalist name="datalist"  id="custoname"  >
                    { alldata.map( (val , keys) => {
                        return(
                           <option key={keys}  value={val.name}   />
                           
                           )
                        
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
                      {allfueldat[0]?.map(index => {
                        if(index.success === 0)
                        {
                          return (
                          <h6  style={{
                            color:'red',
                          }} > 
                            {index.msg}
                          </h6>)
                        }
                        else
                        {
                        return (
                          <div class="form-check">
                          <label
                            class="form-check-label pl-3"
                            for="flexCheckDefault"
                          >
                            {index.name_usage_state}
                          </label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            onChange={ e => handelUsingstate(e) }
                            value={index.id_usage_state}
                            id="flexCheckDefault"
                          />
                        </div>
                        );
                       }
                      })}

                    </div>
                  </div>
                  <div className="col">
                    <div class="container ">
                      <p>نوع الوقود </p>

                        {allfueldat[1]?.map(index => {
                          return(

                      <div class="form-check ">
                      <label
                        class="form-check-label pl-3"
                        for="flexCheckChecked"
                      >
                            {index.name_fuel_kind}
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onChange={e => handelGasgTypestate(e)}
                        value={ index.id_fuel_kind}
                        id="flexCheckChecked"
                      />
                    </div>
                          )
                        })}
                    </div>
                  </div>
                  <div className="col">
                    <div class="container ">
                      <p>نوع خزان الوقود </p>
                      {allfueldat[2]?.map(index => {
                          return(

                      <div class="form-check ">
                      <label
                        class="form-check-label pl-3"
                        for="flexCheckChecked"
                      >
                            {index.name_tank_kind}
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onChange={e => handelTankTypestate(e)}
                        value={ index.id_tank_kind}
                        id="flexCheckChecked"
                      />
                    </div>
                          )
                        })}
                    
                    </div>
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>
                  _________________________________________________________________________________________________
                </p>
                <div className="row">                
                      <p> سعة الخزان</p>
                        <div className="col" >
                          <input type='number' class="form-control" onChange={(e) => setTanksize( e.target.value)} placeholder="ادخل سعة الخزان"  />
                        </div>

                        <div className="col" >
                        <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexChec"
                        >
                          فوق الارض
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={ e => handleTankPosationUP(e)}
                          value="up"
                          id="flexChec"
                        />
                        </div>
                        </div>
                        <div className="col" >
                        <div class="form-check">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckk"
                        >
                          تحت الارض
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="down"
                          onChange={ e => handleTankPosationDown(e)}
                          id="flexCheckk"
                        />
                        </div>
                        </div>
                
                      </div>
                      <div className="row" style={{
                        marginTop:20
                      }}>
                    <div className="col" >
                      <input style={{width:300}}  onChange={(e) => setCountcy(e.target.value)}  type='number' class="form-control" placeholder="عدد اسطوانات الإطفاء"  />
                    </div>

                    <div className="col" >
                    <input style={{width:300}}  onChange={(e) => setSpace(e.target.value)}type='number'class="form-control" placeholder="بعد الخزان عن المولد"  />
                    </div>
                  </div>
                  <div className="row" style={{
                        marginTop:20
                      }}>
                        <div className="col">
                        <label
                          class="form-check-label pl-3"
                          for="flexCheckDefault"
                        >
                          
                          ملاحظات
                          </label>
                        <textarea style={{width:300}} type="text" id="flexCheckDefault" onChange={ (e) => setNotes(e.target.value) } className="form-control" placeholder="ملاحظات"  />
                        </div>
                  </div>

                  <div className="row" style={{marginTop:20}}>
                    <input type="file" className="input-group"  name="file" onChange={changeHandler} />
                              {isFilePicked ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                      lastModifiedDate:{' '}
                      {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div></div>
                  </div>
                <button
                  class="btn btn-danger"
                  onClick={ addnewModel}
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
