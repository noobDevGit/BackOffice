import React from 'react'
import { MainContainer,
        TitleContianer,
        TitleContent,
        TableContainer,
        ButtonEdit,
        ButtonDelete,
        NewDataButton
       } from '../AllTableElements'

import axios from 'axios'

import moment from 'moment'

import { useEffect,useState } from 'react'

import { LinkTo } from '../LinkStyleElements'  

import { toast} from 'react-toastify';



import '../AllTableCss.css'

const TypeTablePage = () => {

    const [AllUkuran,setAllUkuran] =useState ([])
    const [StopUseEffect,setStopUseEffect] = useState(false)

    useEffect(() => {

        axios
        .get(`http://localhost:5000/api/get/type`)
        .then((result)=>{

        setAllUkuran(result.data)
        setStopUseEffect(false)

        })
        

    },[StopUseEffect]) 


    const deleteSize = (id)=>{

        if (window.confirm("Are you sure you want to delete this data ?")) {

        axios
        .delete(`http://localhost:5000/api/delete/type/${id}`)
        .then((result)=>{

        toast.success(result.data)
        setStopUseEffect(true)

        }).catch((err)=>toast.error(err.response.data))
            
        }


    }


  return (
    <MainContainer>
    
            <TitleContianer>
                <TitleContent>Type List</TitleContent>
            </TitleContianer>

            <TableContainer>

            <LinkTo to={'/type_page/add_type'}>
                <NewDataButton> Add Data </NewDataButton>
                </LinkTo>
                        <table className='styled-table'>
                        <thead>
                            <tr>
                                <th style={{textAlign:'center'}}>Type </th>
                                <th style={{textAlign:'center'}}>Created By</th>
                                <th style={{textAlign:'center'}}>Created Date</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {AllUkuran.map((content)=>(

                                <tr key={content.id}>
                                    <td>{content.NamaJenis}</td>
                                    <td>{content.Nama}</td>
                                    <td>{moment(content.CreatedDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>

                                    <LinkTo to={`/type_page/edit_type/${content.id}`}>
                                        <ButtonEdit>Edit</ButtonEdit>
                                    </LinkTo>

                                    <ButtonDelete onClick={()=>deleteSize(content.id)}>Delete</ButtonDelete>
                                    </td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>

            </TableContainer>

    </MainContainer>
    )
}

export default TypeTablePage