  import React ,{useState , useEffect , useContext} from "react";
  import Sidebar from "../../helper/addon/sidebar";
  import Topbar from "../../helper/addon/topbar";
import Showmodel from "../showModel/showmodel";
//import { Button } from "react-bootstrap";
//import logo from "../../../../assets/logo.png";
import axios from "axios";    
import { baseUrl } from "../../../../constants/engine";
import { ToastContainer, toast } from "react-toastify";

import { ModelContext } from "../showModel/modelContext";

var gasusagearray = [];
var gastypes = [];
var tanktypes = [];

function AddModel() {

  
  const [open , setOpen] = useState(false)



  const [customername , setCustomername] = useState("");
  const [activitybe , setActiviy] = useState("");
  const [datevist , setDatevist] = useState("");
  const [city , setCity] = useState("");
  const [phone , setPhone] = useState("")
  const [generator , setGeneretor] = useState("");
  const [position , setPosition] = useState("");
  const [delvname , setDelvname] = useState("")
  const [notes , setNotes] = useState("");

  const [up , setUp] = useState(" ")
  const [down , setDown] = useState(" ");

  const [id_coustom , setIdCustomer] = useState("");

  const [flag , setFlag] = useState("0");


  //using state ---------
  const [gasusage , setGasusage] = useState([]);
  const [gastybe, setGastybe] = useState([]);
  const [tanktybe , setTanktybe] = useState([]);
  //-------------



	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);


  const changeHandler = (event) => {
		// setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
    setSelectedFile(URL.createObjectURL(event.target.files[0]));

    

	};


  const [tanksize , setTanksize] = useState([]);
  const [countcy , setCountcy] = useState("");
  const [space , setSpace] = useState("");
  const [viewMode , setViewModel] = useState([])


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
        console.log(fuelres.data);
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

    const handleTankPosationUP = (e) => {
      if(e.target.checked){
        setUp("فوق سطح الارض")
      }else{
        setUp(" ")
      }
    }
    const handleTankPosationDown = (e) => {
      if( e.target.checked){
        setDown("تحت سطح الارض")
      }else{
        setDown(" ")
      }
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

      //input validation 


      const userid =  window.localStorage.getItem('userID') ;

      if(!datevist && !id_coustom  && !delvname && !activitybe && !phone && !city && !position && !generator && !tanksize && !up && !down 
        && !countcy && !space && !userid ){
            const errorInput = () => toast("يرجي ادخال كل البيانات صحيحة ");
            errorInput();

      }else if ( !notes){
        notes = "لايوجد"
      }else if ((up === " " && down === " ")){
        const errorInput = () => toast("يرجي  اختيار موقع الخزان ");
        document.getElementById('lup').style.color = "red"

        errorInput();
      }else if ( (gasusagearray.length === 0 )   && (tanktypes.length === 0) ){
        const errorInput = () => toast(" يرجي ادخال بيانات  الحالة");
        errorInput();
      }else if ( gastypes.length === 0  ) {
        const errorInput = () => toast(" يرجي ادخال بيانات  الحالة");
        errorInput();
      }
        else{

        const formData = new FormData();
        formData.append('DATE_VISITS', datevist);
        formData.append('ID_CUSTOMER', id_coustom);
        formData.append('DELEGATE_NAME', delvname);
        formData.append('ACTIVITY_TYPE', activitybe);
        formData.append('PHONE', phone);
        formData.append('ADDRESS', city);
        formData.append('COORDINATES_LOCATION', position);
        formData.append('GENERATOR_POWER', generator);
        formData.append('TANK_CAPACITY', tanksize);
        formData.append('TANK_LOCATION', up + down);
        formData.append('COUNT_EXTINGUISHING_CYLINDERS', countcy);
        formData.append('DISTANCE_ALTERNATOR_TANK', space);
        formData.append('NOTE', notes);
        formData.append('ID_USER', userid);
        formData.append('USAGE_STATES', gasusagearray);
        formData.append('FUEL_KINDS', gastypes);
        formData.append('TANK_KINDS', tanktypes);
        formData.append('CVM_FILE', selectedFile);


        // DATE_VISITS: datevist, 
        // ID_CUSTOMER: id_coustom , 
        // DELEGATE_NAME: delvname , 
        // ACTIVITY_TYPE:activitybe ,
        // PHONE:phone,
        // ADDRESS: city ,
        // COORDINATES_LOCATION: position , 
        // GENERATOR_POWER :generator, 
        // TANK_CAPACITY:tanksize , 
        // TANK_LOCATION: up + down, 
        // COUNT_EXTINGUISHING_CYLINDERS: countcy , 
        // DISTANCE_ALTERNATOR_TANK:space , 
        // NOTE:notes , 
        // ID_USER:userid,
        // USAGE_STATES:gasusagearray,
        // FUEL_KINDS:gastypes,
        // TANK_KINDS:tanktypes,
        // CVM_FILE : selectedFile
        console.log(formData)

        console.log(selectedFile)
        let obj = alldata.find(data => data.name === customername);
        console.log(obj)
        console.log(up)
        console.log(down)
        axios.post( baseUrl + 'cvm_insert.php' , {formData}).then((res) => {
        console.log(res.data)
        setFlag(  res.data.success.toString())
        setViewModel(res.data)
        // console.log(data)
  
      }).catch((err) => {
          console.log(err)
      }) 
      const handelOpenpop = () => {
        if(flag === 1){
          setOpen(true)
        }
      }
    }
  }





     
    return (
      <div>
 
        <Sidebar></Sidebar>
        <div className="full_container" dir="rtl">
          <ToastContainer/>
          <div className="inner_container">
          <Topbar />
            <div id="content">
            <ModelContext.Provider value={{open , setOpen}} >
              {open && <Showmodel/>}
              </ModelContext.Provider>
              <form
                className="row"
                style={{
                  marginTop: 100,
                  width: "80%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                               <h1 style={{
                                marginBottom :40,
                                color : "#FF5723",
                                fontWeight : "bold"
                               }}>اضافة نموذج جديد </h1>

                <div className="col">
                  <label htmlFor="customerName"> نوع النشاط</label>
                  <input
                    type="text"
                    id="customerName"
                    onChange={ e => setActiviy(e.target.value)}
                    className="form-control"
                    placeholder="نوع النشاط"
                    aria-label="First name"
                    required
                  />
                  <label htmlFor="customerName"> رقم الهاتف</label>
                  <input
                    type="number"
                    id="customerName"
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="رقم الهاتف"
                    value={phone}
                    aria-label="First name"
                    required
                  />
                  <label htmlFor="customerName"> اسم المندوب</label>
                  <input
                    type="text"
                    onChange={(e) => setDelvname(e.target.value)}
                    id="customerName"
                    className="form-control"
                    placeholder="اسم المندوب"
                    required
                    aria-label="First name"
                  />
                </div>
                {/* onChange={(e) => setCustomername(e.target.value)}  */}
                <div className="col">
                  <label htmlFor="customerName"> اسم الزبون</label>
                  <input type="text" name="city" className="form-control" 
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



                  <label htmlFor="customerName"> قوة المولد</label>
                  <input
                    type="number"
                    id="customerName"
                    onChange={(e) => setGeneretor(e.target.value)}
                    required
                    className="form-control"
                    placeholder="قوة المولد"
                    aria-label="First name"
                  />
                    <label htmlFor="customerName"> تاريخ الزيارة </label>
                  <input
                    type="date"
                    id="customerName"
                    onChange={(e) => setDatevist(e.target.value)}
                    required
                    className="form-control"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="customerName"> المدينة </label>
                  <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    required
                    id="customerName"
                    className="form-control"
                    placeholder="المدينة"
                    aria-label="First name"
                  />
                  <label htmlFor="customerName"> احداثيات الموقع </label>
                  <input
                    type="text"
                    id="customerName"
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="form-control"
                    placeholder="احداثيات الموقع"
                    aria-label="First name"
                  />
                </div>
                <p style={{ textAlign: "center" }}>
                  _________________________________________________________________________________________________
                </p>
                <div className="row">
                  <div className="col">
                    <div className="container ">
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
                          <div className="form-check">
                          <label
                            className="form-check-label pl-3"
                            htmlFor="flexCheckDefault"
                          >
                            {index.name_usage_state}
                          </label>
                          <input
                            className="form-check-input"
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
                    <div className="container ">
                      <p>نوع الوقود </p>

                        {allfueldat[1]?.map(index => {
                          return(

                      <div className="form-check ">
                      <label
                        className="form-check-label pl-3"
                        htmlFor="flexCheckChecked"
                      >
                            {index.name_fuel_kind}
                      </label>
                      <input
                        className="form-check-input"
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
                    <div className="container ">
                      <p>نوع خزان الوقود </p>
                      {allfueldat[2]?.map(index => {
                          return(

                      <div className="form-check ">
                      <label
                        className="form-check-label pl-3"
                        htmlFor="flexCheckChecked"
                      >
                            {index.name_tank_kind}
                      </label>
                      <input
                        className="form-check-input"
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
                          <input type='number' className="form-control" onChange={(e) => setTanksize( e.target.value)} placeholder="ادخل سعة الخزان"  />
                        </div>

                        <div className="col" >
                        <div className="form-check">
                        <label
                          className="form-check-label pl-3"
                          id="lup"
                          htmlFor="flexChec"
                        >
                          فوق الارض
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={ e => handleTankPosationUP(e)}
                          value="up"
                          id="flexChec"
                        />
                        </div>
                        </div>
                        <div className="col" >
                        <div className="form-check">
                        <label
                          className="form-check-label pl-3"
                          htmlFor="flexCheckk"
                          id="ldown"
                        >
                          تحت الارض
                        </label>
                        <input
                          className="form-check-input"
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
                      <input style={{width:300}}  onChange={(e) => setCountcy(e.target.value)}  type='number' className="form-control" placeholder="عدد اسطوانات الإطفاء"  />
                    </div>

                    <div className="col" >
                    <input style={{width:300}}  onChange={(e) => setSpace(e.target.value)}type='number'className="form-control" placeholder="بعد الخزان عن المولد"  />
                    </div>
                  </div>
                  <div className="row" style={{
                        marginTop:20
                      }}>
                        <div className="col">
                        <label
                          className="form-check-label pl-3"
                          htmlFor="flexCheckDefault"
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
             
                    <img src={selectedFile} ></img>

                  </div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div></div>
                  </div>
                <button
                  className="btn btn-danger"
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
