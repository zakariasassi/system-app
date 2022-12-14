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
let iduser = window.localStorage.getItem("userID");
let token = window.localStorage.getItem("token");

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


  const [tanksize , setTanksize] = useState([]);
  const [countcy , setCountcy] = useState("");
  const [space , setSpace] = useState("");
  const [viewModel , setViewModel] = useState({})


  const [allfueldat , setAllfueldata] = useState([]);
  const [alldata , setAlldata] = useState([])

  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.post( baseUrl + "customer_all_name.php" , {ID_USER:iduser,
          TOKEN:token    });
        setAlldata(res.data);
      };
      const fetchfueldata = async () => {
        const fuelres = await axios.post( baseUrl + "fuel_data_all.php" , {ID_USER:iduser,
          TOKEN:token    });
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
        setUp("?????? ?????? ??????????")
      }else{
        setUp(" ")
      }
    }
    const handleTankPosationDown = (e) => {
      if( e.target.checked){
        setDown("?????? ?????? ??????????")
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


    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };

    function addnewModel  (e) {
      e.preventDefault();
      //input validation 
      const userid =  window.localStorage.getItem('userID') ;

      if(!datevist || !id_coustom  || !delvname || !activitybe || !phone || !city || !position || !generator || !tanksize ||  
      !countcy || !space  ){
            const errorInput = () => toast("???????? ?????????? ???? ????????????????  ");
            errorInput(); 
            document.getElementsByClassName('alldata').style.color = "red"


      } else if( datevist === "" || id_coustom === ""   || delvname === ""  ||  activitybe  === ""  ||  phone  === ""  ||  city === ""   ){
            const errorInput = () => toast("???????? ?????????? ???? ???????????????? ?????????? ");
            errorInput();
            // document.getElementsByClassName('alldata').style.color = "red"
          // var elements = document.getElementsByClassName('alldata');
          //   for (var i = 0; i < elements.length; i++) {
          //       elements[i].style.color="blue";
          //   }

      }
      else if ( !notes){
        setNotes("????????????")
      }else if ((up === " " && down === " ")){
        const errorInput = () => toast("????????  ???????????? ???????? ???????????? ");
        document.getElementById('lup').style.color = "red"
        document.getElementById('ldown').style.color = "red"

        errorInput();
      // }else if ( (gasusagearray.length === 0 )   && (tanktypes.length === 0) ){
      //   const errorInput = () => toast(" ???????? ?????????? ????????????  ????????????");
      //   errorInput();
      // }else if ( gastypes.length === 0  ) {
      //   const errorInput = () => toast(" ???????? ?????????? ????????????  ????????????");
      //   errorInput();
      // }
       } else{

        // var data = new FormData();
        // data.append('DATE_VISITS', datevist);
        // data.append('ID_CUSTOMER', id_coustom);
        // data.append('DELEGATE_NAME', delvname);
        // data.append('ACTIVITY_TYPE', activitybe);
        // data.append('PHONE', phone);
        // data.append('ADDRESS', city);
        // data.append('COORDINATES_LOCATION', position);
        // data.append('GENERATOR_POWER', generator);
        // data.append('TANK_CAPACITY', tanksize);
        // data.append('TANK_LOCATION', up + down);
        // data.append('COUNT_EXTINGUISHING_CYLINDERS', countcy);
        // data.append('DISTANCE_ALTERNATOR_TANK', space);
        // data.append('NOTE', notes);
        // data.append('ID_USER', userid);
        // data.append('USAGE_STATES', gasusagearray);
        // data.append('FUEL_KINDS', gastypes);
        // data.append('TANK_KINDS', tanktypes);
        // data.append('CVM_FILE', selectedFile);


        

        var mydata = {
          DATE_VISITS: datevist, 
          ID_CUSTOMER: id_coustom , 
          DELEGATE_NAME: delvname , 
          ACTIVITY_TYPE:activitybe ,
          PHONE:phone,
          ADDRESS: city ,
          COORDINATES_LOCATION: position , 
          GENERATOR_POWER :generator, 
          TANK_CAPACITY:tanksize , 
          TANK_LOCATION: up + " " + down, 
          COUNT_EXTINGUISHING_CYLINDERS: countcy , 
          DISTANCE_ALTERNATOR_TANK:space , 
          NOTE:notes , 
          ID_USER:userid,
          USAGE_STATES:gasusagearray,
          FUEL_KINDS:gastypes,
          TANK_KINDS:tanktypes,
        }

        // baseUrl + 'cvm_insert.php' , { ...data }

        // console.log([...data])
        // console.log(selectedFile)
        // let obj = alldata.find(data => data.name === customername);
        // console.log(obj)
        // console.log(up)
        // console.log(down)


        axios.post( baseUrl + "cvm_insert.php " , {
        DATE_VISITS: datevist, 
        ID_CUSTOMER: id_coustom , 
        DELEGATE_NAME: delvname , 
        ACTIVITY_TYPE:activitybe ,
        PHONE:phone,
        ADDRESS: city ,
        COORDINATES_LOCATION: position , 
        GENERATOR_POWER :generator, 
        TANK_CAPACITY:tanksize , 
        TANK_LOCATION: up + down, 
        COUNT_EXTINGUISHING_CYLINDERS: countcy , 
        DISTANCE_ALTERNATOR_TANK:space , 
        NOTE:notes, 
        ID_USER:userid,
        USAGE_STATES:gasusagearray,
        FUEL_KINDS:gastypes,
        TANK_KINDS:tanktypes,
        TOKEN : token

        // CVM_FILE : selectedFile
     
        } ).then((res) => {
        console.log(res)
        if(res.data.success === 0 ) {
          const errorInput = () => toast(res.data.msg);
          errorInput(); 
        }else{
        setOpen(true)
        setViewModel(res.data)
        console.log(viewModel)
        const errorInput = () => toast("?????? ?????????????? ??????????");
        errorInput(); 
        }
        // console.log(data)
  
      }).catch((err) => {
          console.log(err)
      }) 
    //  setViewModel(mydata)
    }
  }     
    return (
      <>

        <Sidebar></Sidebar>
        <div className="full_container"  dir="rtl">
          <ToastContainer/>
          <div className="inner_container" dir="rtl" >
          <Topbar />
            <div className="content" dir="rtl"  style={{
              width:'80%'
            }} >
            <ModelContext.Provider value={{ setOpen , viewModel} } >
              {open && <Showmodel/>}
              </ModelContext.Provider>
              <form
                className="row"
                dir="rtl"
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
               }}>?????????? ?????????? ???????? </h1>

                <div className="col" >
                  <label className="alldata"  htmlFor="customerName"> ?????? ????????????</label>
                  <input
                    type="text"
                    id="customerName"
                    onChange={ e => setActiviy(e.target.value)}
                    className="form-control"
                    placeholder="?????? ????????????"
                    aria-label="First name"
                    required
                  />
                  <label className="alldata"  htmlFor="customerName"> ?????? ????????????</label>
                  <input
                    type="number"
                    id="customerName"
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="?????? ????????????"
                    value={phone}
                    aria-label="First name"
                    required
                  />
                  <label htmlFor="customerName"> ?????? ??????????????</label>
                  <input
                    type="text"
                    onChange={(e) => setDelvname(e.target.value)}
                    id="customerName"
                    className="form-control"
                    placeholder="?????? ??????????????"
                    required
                    aria-label="First name"
                  />
                </div>
                {/* onChange={(e) => setCustomername(e.target.value)}  */}
                <div className="col">
                  <label className="alldata"  htmlFor="customerName"> ?????? ????????????</label>
                  <input type="text" name="city" className="form-control" 
                    onChange={ handeldata }
                   id="customerName" placeholder="?????? ????????????"  
                  list="custoname"  required />


                    <datalist name="datalist"  id="custoname"  >
                    { alldata.map( (val , keys) => {
                        return(
                           <option key={keys}  value={val.name}   />
                           
                           )
                        
                      }) }
                    </datalist>



                  <label className="alldata"  htmlFor="customerName"> ?????? ????????????</label>
                  <input
                    type="number"
                    id="customerName"
                    onChange={(e) => setGeneretor(e.target.value)}
                    required
                    className="form-control"
                    placeholder="?????? ????????????"
                    aria-label="First name"
                  />
                    <label   className="alldata"  htmlFor="customerName"> ?????????? ?????????????? </label>
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
                  <label className="alldata"  htmlFor="customerName"> ?????????????? </label>
                  <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    required
                    id="customerName"
                    className="form-control"
                    placeholder="??????????????"
                    aria-label="First name"
                  />
                  <label htmlFor="customerName"> ???????????????? ???????????? </label>
                  <input
                    type="text"
                    id="customerName"
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="form-control"
                    placeholder="???????????????? ????????????"
                    aria-label="First name"
                  />
                </div>
                <p style={{ textAlign: "center" }}>
                  _________________________________________________________________________________________________
                </p>
                <div className="row">
                  <div className="col">
                    <div className="container ">
                      <p>???????? ?????????????? ???????????? </p>
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
                            className="form-check-label pl-3 alldata"
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
                      <p>?????? ???????????? </p>

                        {allfueldat[1]?.map(index => {
                          return(

                      <div className="form-check ">
                      <label
                        className="form-check-label pl-3 alldata"
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
                      <p>?????? ???????? ???????????? </p>
                      {allfueldat[2]?.map(index => {
                          return(

                      <div className="form-check ">
                      <label
                        className="form-check-label pl-3 alldata"
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
                      <p> ?????? ????????????</p>
                        <div className="col" >
                          <input type='number' className="form-control" onChange={(e) => setTanksize( e.target.value)} placeholder="???????? ?????? ????????????"  />
                        </div>

                        <div className="col" >
                        <div className="form-check">
                        <label
                          className="form-check-label pl-3"
                          id="lup"
                          htmlFor="flexChec"
                        >
                          ?????? ??????????
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
                          ?????? ??????????
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
                      <input style={{width:300}}  onChange={(e) => setCountcy(e.target.value)}  type='number' className="form-control" placeholder="?????? ???????????????? ??????????????"  />
                    </div>

                    <div className="col" >
                    <input style={{width:300}}  onChange={(e) => setSpace(e.target.value)}type='number'className="form-control" placeholder="?????? ???????????? ???? ????????????"  />
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
                          
                          ??????????????
                          </label>
                        <textarea style={{width:300}} type="text" id="flexCheckDefault" onChange={ (e) => setNotes(e.target.value) } className="form-control" placeholder="??????????????"  />
                        </div>
                  </div>

                  <div className="row" style={{marginTop:20}}>
                    <input type="file" className="input-group"  name="file" onChange={e => changeHandler(e)} />
         
			<div></div>
                  </div>
                <button
                  className="btn btn-danger"
                  onClick={ addnewModel}
                  style={{ marginTop: 50 }}
                >
                  ?????????? ?????????? ????????
                </button>
              </form>
            </div>
          </div>
        </div>
      
      </>
    );
  }

  export default AddModel;
