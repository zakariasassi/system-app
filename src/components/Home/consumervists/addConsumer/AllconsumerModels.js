import { useState } from 'react'
import { useEffect } from 'react'
import Topbar from '../../helper/addon/topbar'
import Sidebar from '../../helper/addon/sidebar'

import axios from 'axios'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'
import { baseUrl } from '../../../../constants/engine';
import { ConsumerContext } from './consumerContext'
import { Button } from "react-bootstrap";



const iduser = window.localStorage.getItem('userID')
const token = window.localStorage.getItem('token')

function AllconsumerModels(props) {
  // const {id } = useContext(ConsumerContext)

  const {state} = useLocation();
  const navigate = useNavigate();
  const [allmodels, setallModels] = useState([]);

console.log( state.data.name)

console.log( state.data.id)
  const Searching = async () => {
    const resFilterd = await axios.post(baseUrl + "cvm_view_all_search.php", {
      name: "",
      id_customer: state.data.id,
      id_cvm: "",
      date_from: "",
      date_to: "",
      ID_USER: iduser,
      TOKEN: token,
     
    })
    setallModels(resFilterd.data)
    console.log(resFilterd)

    // if( allmodels.length > 0 ) {
    //   curentPost = allmodels.slice(firstPostIndex , lastPostIndex) ;
    //   console.log(curentPost)
    // }else{
    //   curentPost = allmodels;
    // }

  }


  // const ViewSpecifcModel = (e, id) => {
  //   e.preventDefault();
  //   navigate("/viewspmodel", { state: { id: id } });
  // };
  useEffect(() => {
    Searching()
  }, [])

  const back = (e) => {
    e.preventDefault();
    navigate('/addconumer')
  }


  const HandelDelete = async (e, id) => {
    e.preventDefault();
    let iduser = window.localStorage.getItem('userID')
    await axios.post(baseUrl + "cvm_delete.php",
      {
        id_cvm: id, 
        ID_USER: iduser,
        TOKEN :token ,
      }).then((res) => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    Searching()
  }

  // --------------------------------------------------------------------


  return (
    <>
        <Sidebar></Sidebar>

        <div className="full_container">
          <div className="inner_container">
            <div id="content">
              <Topbar />
        



          <div class="table_section padding_infor_info">
            <div class="table-responsive-sm">
              <table class="table table-striped" dir='rtl'>
                <thead>
                  <tr>
                    <th> رقم النموذج</th>
                    <th>اسم الزبون</th>
                    <th>تاريخ الزيارة</th>
                    <th>تاريخ الاضافة </th>
                    <th>اجراء </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    allmodels.map((index, key) => {
                     
                       if(index.success === 0) {
                          return(
                            <tr>
                            <td colspan="7" >
                            <div class="alert alert-warning" role="alert" style={{
                            textAlign:'center',

                        }}> { index.msg}</div>

                            </td>
                          </tr>
                          )
                       }else{
                        return(
                          <tr key={key}>
                          <td>{index.id_cvm}</td>
                          <td> {index.name}</td>
                          <td>{index.date_visits}</td>
                          <td>{index.date_create}</td>
                          <td>
                            <Button style={{
                              margin: 10,
                              textAlign: "center",
                            }}>تعديل</Button>


                            <Button onClick={e => HandelDelete(e, index.id_cvm)}>حذف</Button>
                            <Button style={{
                              margin: 10,
                              textAlign: "center",
                            }}>عرض</Button>
                          </td>
                        </tr>
                        )
                       }
                      
                    }
                    
                    )
                  }

                </tbody>
              </table>
            </div>
          </div>
          </div> 
           </div>
           </div>
</>
  
  )
    
      }


export default AllconsumerModels