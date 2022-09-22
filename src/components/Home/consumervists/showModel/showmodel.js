import React,{useState} from 'react'
import './showmodel.css'
import logo from '../../../../assets/logo.png'
function Showmodel(props) {
   
  
  return (
    <div className='box'>
   

      <div className='container'>
        <div className='top'>
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
                  <label for="cutomername"> اسم الزبون</label>
                  <h6 id='cutomername '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="activitytybe"> نوع النشاط </label>
                  <h6 id='activitytybe '>zakaria sassi </h6>
              </div> 
              <div className='col'>
                  <label for="deleveryname"> نوع النشاط </label>
                  <h6 id='deleveryname '>zakaria sassi </h6>
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                  <label for="phonenumber"> رقم الهاتف </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col'>
                  <label for="city"> المدينة  </label>
                  <h6 id='city '> city </h6>
              </div> 
              <div className='col'>
                  <label for="latitudeandlongitude "> احداثيات الموقع  </label>
                  <h6 id='latitudeandlongitude '>zakaria sassi </h6>
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                  <label for="phonenumber"> رقم الهاتف </label>
                  <h6 id='phonenumber '>zakaria sassi </h6>
              </div>  
              <div className='col-8'>
                  <label for="poergertor">قوة المولد  </label>
                  <h6 id='poergertor '> power </h6>
              </div> 
       
            </div>
            
      </div>

        
    </div>
  )
}

export default Showmodel