import React from 'react'
import { MainContainer,
        TitleContianer,
        TitleContent,
        TableContainer,
        ButtonEdit,
        ButtonDelete
       } from './SizeTableElements'

import './Table.css'

const SizeTablePage = () => {
  return (
    <MainContainer>
    
            <TitleContianer>
                <TitleContent>List Ukuran</TitleContent>
            </TitleContianer>

            <TableContainer>
                        <table className='styled-table'>
                        <thead>
                            <tr>
                                <th style={{textAlign:'center'}}>Nama Ukuran</th>
                                <th style={{textAlign:'center'}}>Panjang</th>
                                <th style={{textAlign:'center'}}>Lebar</th>
                                <th style={{textAlign:'center'}}>Created By</th>
                                <th style={{textAlign:'center'}}>Created Date</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                    <tr>

                                        <td>Test</td>
                                        <td>123</td>
                                        <td>fdsf</td>
                                        <td>rvdfd</td>
                                        <td>ewqew</td>
                                        <td>
                                              <ButtonEdit>Edit</ButtonEdit>
                                              <ButtonDelete>Delete</ButtonDelete>
                                        </td>
                                    </tr>
                            

                        </tbody>
                    </table>


            </TableContainer>

    </MainContainer>
    )
}

export default SizeTablePage