import {useState }from 'react'
import { useEffect } from 'react'
import Topbar from  '../../helper/addon/topbar'
import Sidebar from  '../../helper/addon/sidebar'

import axios from 'axios'
import {useLocation, useMatch , useNavigate} from 'react-router-dom'
import { baseUrl } from '../../../../constants/engine';
import { ConsumerContext } from './consumerContext'
import { Button } from "react-bootstrap";
function AllconsumerModels(props) {
    // const {id } = useContext(ConsumerContext)
    
    const location = useLocation();
    const navigate = useNavigate();
    const [allmodels, setallModels] = useState([]);
  const Searching = async  () => {
    const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php" , {
      id_cvm : "" ,
      name : location.state.name ,
      date_from : "" ,
      date_to : "",
    })
    setallModels(resFilterd.data)
        // if( allmodels.length > 0 ) {
        //   curentPost = allmodels.slice(firstPostIndex , lastPostIndex) ;
        //   console.log(curentPost)
        // }else{
        //   curentPost = allmodels;
        // }
   
  } 


    useEffect(() =>  { 
        Searching()
        // if( location){
        //     console.log(location.state.id)
        // }else{
        //     console.log("no id ")
 
        // }
    } , [])

    const back = (e) =>{ 
        e.preventDefault(); 
        navigate('/addconumer')
    }


    const HandelDelete = async(e ,id) => {
      // prevent button form auto submitting
     e.preventDefault();
  
  
      //This Line of code get user id from local storage .
    
       let iduser = window.localStorage.getItem('userID') 
  
      //post request withe axios package from npm 
       await axios.post(baseUrl  + "cvm_delete.php", 
  
        {
          id_cvm:id , id_user :iduser 
  
        }).then((res) => { 
  
          console.log(res)}).catch( e => {
  
            console.log(e)
  
          })
  
          Searching()
  
      }
  
  // --------------------------------------------------------------------
       
  if(allmodels.length > 0) {
    return (
      <>
      <div>
      <Sidebar></Sidebar>

      <div className="full_container">
        <div className="inner_container">
          <div id="content">
      <Topbar />
      </div>
    <table  style={{
      marginTop:100
    }} className="table" dir="rtl">
    <thead>
      <tr>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}> رقم النموذج</th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>اسم الزبون</th>
        <th scope="col"style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>تاريخ الزيارة</th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>تاريخ الاضافة </th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }} >اجراء </th>

      </tr>
    </thead>
    <tbody> 

      {

          
      
      allmodels.map( (index  , key) => {
        return (
          <tr key={key}>
          <td style={{ 
          textAlign:'center',
        }}>{index.id_cvm}</td>
          <td style={{ 
          textAlign:'center',
     

        }}> {index.name}</td>
     
          <td style={{ 
          textAlign:'center',
     

        }}>{index.date_visits}</td>
          <td style={{ 
          textAlign:'center',
     

        }}>{index.date_create}</td>
          <td>
            <Button style={{ 
              margin:10,
              textAlign:'center'
             }} >تعديل</Button>
            <Button 
            onChange={ e => HandelDelete(e , index.id_cvm)}
            style={{ 
              margin:10,
              textAlign:'center'
             }} >حذف</Button>
             <Button style={{ 
              margin:10,
              textAlign:'center'
             }} >عرض</Button>


          </td>

        </tr>
        )
      } 
      
      
      )}

  


    </tbody>

    <Button  onClick={ e =>  back(e)}>
        رجوع
    </Button>
  </table>
     
      </div>
      </div>
      </div>
</>

    )
  }else {
    return (
      <>
      <div>
      <Sidebar></Sidebar>

      <div className="full_container">
        <div className="inner_container">
          <div id="content">
      <Topbar />
      </div>
    <table  style={{
      marginTop:100
    }} className="table" dir="rtl">
    <thead>
      <tr>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}> رقم النموذج</th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>اسم الزبون</th>
        <th scope="col"style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>تاريخ الزيارة</th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }}>تاريخ الاضافة </th>
        <th scope="col" style={{ 
          textAlign:'center',
          fontWeight:'bold'

        }} >اجراء </th>

      </tr>
    </thead>
    <tbody> 

      {

          
 
          <tr >
          <td style={{ 
          textAlign:'center',
        }}> no </td>
          <td style={{ 
          textAlign:'center',
     

        }}> no</td>
     
          <td style={{ 
          textAlign:'center',
     

        }}> no</td>
          <td style={{ 
          textAlign:'center',
     

        }}> no </td>
          <td>
            <Button style={{ 
              margin:10,
              textAlign:'center'
             }} >تعديل</Button>
            <Button 
            style={{ 
              margin:10,
              textAlign:'center'
             }} >حذف</Button>
             <Button style={{ 
              margin:10,
              textAlign:'center'
             }} >عرض</Button>


          </td>

        </tr>
        
      } 
      
      
      

  


    </tbody>

    <Button  onClick={ e =>  back(e)}>
        رجوع
    </Button>
  </table>
     
      </div>
      </div>
      </div>
</>

    )
  }
}

export default AllconsumerModels