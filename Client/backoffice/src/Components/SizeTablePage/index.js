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

import { useEffect,useState } from 'react'

import { LinkTo } from '../LinkStyleElements'  



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


  return (
    <MainContainer>
    
            <TitleContianer>
                <TitleContent>List Ukuran</TitleContent>
            </TitleContianer>

            <TableContainer>

            <LinkTo to={'/size_page/add_size'}>
                <NewDataButton> Tambah Data </NewDataButton>
                </LinkTo>
                        <table className='styled-table'>
                        <thead>
                            <tr>
                                <th style={{textAlign:'center'}}>Nama Ukuran </th>
                                <th style={{textAlign:'center'}}>Panjang (Cm)</th>
                                <th style={{textAlign:'center'}}>Lebar (Cm)</th>
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
                                    <td>{content.CreatedDate}</td>
                                    <td>

                                    <LinkTo to={`/size_page/edit_size/${content.id}`}>
                                        <ButtonEdit>Edit</ButtonEdit>
                                    </LinkTo>

                                    <ButtonDelete>Delete</ButtonDelete>
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