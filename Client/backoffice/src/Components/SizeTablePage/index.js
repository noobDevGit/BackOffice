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

import moment from "moment";

import { useEffect,useState } from 'react'

import { LinkTo } from '../LinkStyleElements'  

import { toast} from 'react-toastify';



import '../AllTableCss.css'

const SizeTablePage = () => {

    const [AllUkuran,setAllUkuran] =useState ([])

    useEffect(() => {

        axios
        .get(`http://localhost:5000/api/get/ukuran`)
        .then((result)=>{

        setAllUkuran(result.data)


        })
        

    },[AllUkuran]) 


    const deleteSize = (id)=>{

        if (window.confirm("Are you sure you want to delete this data ?")) {

        axios
        .delete(`http://localhost:5000/api/delete/ukuran/${id}`)
        .then((result)=>{

        toast.success(result.data)


        }).catch((err)=>toast.error(err.response.data))
            
        }


    }


  return (
    <MainContainer>
    
            <TitleContianer>
                <TitleContent>Size List</TitleContent>
            </TitleContianer>

            <TableContainer>

            <LinkTo to={'/size_page/add_size'}>
                <NewDataButton> Add Data </NewDataButton>
                </LinkTo>
                        <table className='styled-table'>
                        <thead>
                            <tr>
                                <th style={{textAlign:'center'}}>Size </th>
                                <th style={{textAlign:'center'}}>Height (Cm)</th>
                                <th style={{textAlign:'center'}}>Width (Cm)</th>
                                <th style={{textAlign:'center'}}>Created By</th>
                                <th style={{textAlign:'center'}}>Created Date</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {AllUkuran.map((content)=>(

                                <tr key={content.id}>
                                    <td>{content.NamaUkuran}</td>
                                    <td>{content.Width}</td>
                                    <td>{content.Height}</td>
                                    <td>{content.Nama}</td>
                                    <td>{moment(content.CreatedDate).format('dddd MMMM YYYY, h:mm:ss a')}</td>
                                    <td>

                                    <LinkTo to={`/size_page/edit_size/${content.id}`}>
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

export default SizeTablePage