import React,{useState , useContext, useRef, useEffect} from 'react'
import './showmodel.css'
import logo from '../../../../assets/logo.png'
import { ModelContext } from './modelContext'
import ReactToPrint from 'react-to-print';



function Showmodel(props) {
  const {open , setOpen} = useContext(ModelContext)
  const mydata = useContext(ModelContext)

  const closeScreen = _ => setOpen (false) ;
  const componentRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    console.log(mydata.viewModel)
  },[])
  
  return (
   <>
 

    <div  className='box'>
      <div className='container' style={{
        paddingRight:40,
        paddingLeft:40
      }}>
        <div className='top'>
              <button onClick={closeScreen} >x</button>
              <div className='row' style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:'20px'
              }}>
                <div className='col' >
                <h4>نموذج الزيارات الميدانية لقطاع المستهلكين</h4>
                </div>
                <div className='col'>
                  <img  src={logo}  style={{ height:'80px', float:'left'}}/>
                </div>

              </div>
        </div>

        <div ref={componentRef} dir="rtl" >
            <div className='row' style={{
              marginTop:'40px'
            }}>
       
              
              <div className='col'>
                  <label htmlFor="cutomername" style={{fontWeight:'bold'}}> اسم الزبون</label>
                  <h6 id='cutomername '>{mydata.viewModel.DELEGATE_NAME} </h6>
              </div>  
              <div className='col'>
                  <label htmlFor="activitytybe" style={{fontWeight:'bold'}}> نوع النشاط </label>
                  <h6 id='activitytybe '>{mydata.viewModel.ACTIVITY_TYPE} </h6>
              </div> 
              <div className='col'>
                  <label htmlFor="deleveryname" style={{fontWeight:'bold'}}> تاريخ الزيارة  </label>
                  <h6 id='deleveryname '>{mydata.viewModel.DATE_VISITS}  </h6>
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                  <label htmlFor="phonenumber" style={{fontWeight:'bold'}}> رقم الهاتف </label>
                  <h6 id='phonenumber '> {mydata.viewModel.PHONE} </h6>
              </div>  
              <div className='col'>
                  <label htmlFor="city" style={{fontWeight:'bold'}}> المدينة  </label>
                  <h6 id='city '> {mydata.viewModel.CITY} </h6>
              </div> 
              <div className='col'>
                  <label htmlFor="latitudeandlongitude " style={{fontWeight:'bold'}}> احداثيات الموقع  </label>
                  <h6 id='latitudeandlongitude '> {mydata.viewModel.COORDINATES_LOCATION} </h6>
              </div> 
            </div>

            <div className='row'>
             
              <div className='col-8'>
                  <label htmlFor="poergertor" style={{fontWeight:'bold'}}>قوة المولد  </label>
                  <h6 id='poergertor '> {mydata.viewModel.GENERATOR_POWER} </h6>
              </div> 
       
            </div>
            <h6> اليات استعمال الوقود</h6>
            <div className='row'>
              <p style={{fontWeight:'bold' , color:'black'}}>نوع الوقود</p>
              <div className='col'>
                  <label htmlFor="phonenumber" > بنزين  </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label htmlFor="poergertor">ديزل   </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
              <div className='col'>
                  <label htmlFor="poergertor"> كيريسين</label>
                  <h6 id='poergertor '> power </h6>
              </div> 
            </div>
            <div className='row'>
              <p style={{fontWeight:'bold' , color:'black'}} >نوع خزان الوقود</p>
              <div className='col'>
                  <label htmlFor="phonenumber"> بلاستيكي  </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label htmlFor="poergertor">بلاستيكي   </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
 
            </div>

            <div className='row'>
              <p style={{fontWeight:'bold' , color:'black'}} >موقع وسعة الخزان  </p>
              <div className='col'>
                  <h6 id='phonenumber '>{mydata.viewModel.TANK_LOCATION + " " + mydata.viewModel.TANK_CAPACITY + " " + "leter"} </h6>
              </div>  
 
            </div>

            </div>

            <div className='row' style={{
              marginTop:20,
              marginBottom: 20
            }}>
          
              <div className='col'>
              <ReactToPrint
                trigger={() => <button className="btn btn-primary btn-sm "  ref={buttonRef}   > طباعة</button>
              }
                content={() => componentRef.current}
              />
              </div>  
                        
              <div className='col-10'>
                  <button  className="btn  btn-danger btn-sm " onClick={null}  > رجوع</button>
              </div>  
 
            </div>
      </div>

        
    </div>
   </>
  )
}

export default Showmodel