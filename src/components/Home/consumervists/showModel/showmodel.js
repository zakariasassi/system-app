import React,{useState , useContext} from 'react'
import './showmodel.css'
import logo from '../../../../assets/logo.png'
import { ModelContext } from './modelContext'

function Showmodel(props) {
  const {open , setOpen} = useContext(ModelContext)

  const closeScreen = _ => setOpen (false) ;
  
  return (
    <div className='box'>
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
                  <img  src={logo}  style={{
                    height:'80px',
                    float:'left'
                  }}/>
                </div>

              </div>
        </div>
            <div className='row' style={{
              marginTop:'40px'
            }}>
              <div className='col'>
                  <label for="cutomername" style={{fontWeight:'bold'}}> اسم الزبون</label>
                  <h6 id='cutomername '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="activitytybe" style={{fontWeight:'bold'}}> نوع النشاط </label>
                  <h6 id='activitytybe '>zakaria sassi </h6>
              </div> 
              <div className='col'>
                  <label for="deleveryname" style={{fontWeight:'bold'}}> نوع النشاط </label>
                  <h6 id='deleveryname '>zakaria sassi </h6>
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                  <label for="phonenumber" style={{fontWeight:'bold'}}> رقم الهاتف </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="city" style={{fontWeight:'bold'}}> المدينة  </label>
                  <h6 id='city '> city </h6>
              </div> 
              <div className='col'>
                  <label for="latitudeandlongitude " style={{fontWeight:'bold'}}> احداثيات الموقع  </label>
                  <h6 id='latitudeandlongitude '>zakaria sassi </h6>
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                  <label for="phonenumber" style={{fontWeight:'bold'}}> رقم الهاتف </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col-8'>
                  <label for="poergertor" style={{fontWeight:'bold'}}>قوة المولد  </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
       
            </div>
            <h6> اليات استعمال الوقود</h6>
            <div className='row'>
              <p style={{fontWeight:'bold' , color:'black'}}>نوع الوقود</p>
              <div className='col'>
                  <label for="phonenumber" > بنزين  </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="poergertor">ديزل   </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
              <div className='col'>
                  <label for="poergertor"> كيريسين</label>
                  <h6 id='poergertor '> power </h6>
              </div> 
            </div>
            <div className='row'>
              <p>نوع خزان الوقود</p>
              <div className='col'>
                  <label for="phonenumber"> بلاستيكي  </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="poergertor">بلاستيكي   </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
 
            </div>

            <div className='row'>
              <p>موقع وسعة الخزان  </p>
              <div className='col'>
                  <h6 id='phonenumber '>50 لتر (فوق الارض و تحت الارض)  </h6>
              </div>  
 
            </div>
      </div>

        
    </div>
  )
}

export default Showmodel