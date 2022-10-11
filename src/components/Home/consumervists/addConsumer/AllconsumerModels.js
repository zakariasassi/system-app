import React , {useContext , useState }from 'react'
import { useEffect } from 'react'
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
  return (
    <table className="table" dir="rtl">
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
            <Button style={{ 
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
      } )}

  


    </tbody>

    <Button  onClick={ e =>  back(e)}>
        رجوع
    </Button>
  </table>



  )
}

export default AllconsumerModels