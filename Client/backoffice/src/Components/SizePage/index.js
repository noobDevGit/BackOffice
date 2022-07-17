import React from 'react'
import { MainContainer,
         TitleContianer,
         TitleContent,
         FormContainer,
         MainForm,
         Label,
         Input,
         Button } from './SizeElements'

import { toast} from 'react-toastify';

import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios'

import { useEffect,useState } from 'react'     
    

const SizePage = () => {

  //
  const navigate = useNavigate()

  //useState Instance
  const [NamaUkuran, setNamaUkuran] = useState('')
  const [Panjang, setPanjang] = useState('')
  const [Lebar, setLebar] = useState('')

const handleSubmit = (e) =>{

  e.preventDefault()
    

    if (!NamaUkuran || !Panjang || !Lebar) {

      toast.error("Seluruh kolom harus terisi")
      

    }else{

      axios.
        post('http://localhost:5000/api/post/ukuran',{NamaUkuran,Panjang,Lebar}).
        then((res)=>{

          if(res.data.num === 1){

             setNamaUkuran('')
             setPanjang('')
             setLebar('')

             toast.success(res.data.message)

             
          setTimeout(()=>{
            navigate('/');
          },500);

          }else{

            toast.error(res.data.message)
          
          }


        }).catch((err)=>toast.error(err.response.data))

      
      
      
    }
    

}

  return (
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Master Ukuran</TitleContent>
      </TitleContianer>

      <FormContainer>
        <MainForm 
         onSubmit={handleSubmit}
         >
          <Label>Nama Ukuran :</Label>
          <br/><br/>
          <Input
            value={NamaUkuran}
            onChange={(e)=>setNamaUkuran(e.target.value)}
            name='ukuran'
          />
          <br/><br/>

          <Label>Panjang (Dalam Cm) :</Label>
          <br/><br/>
          <Input 
           type={'number'} 
           value={Panjang}
           onChange={(e)=>setPanjang(e.target.value)}
           name='panjang'
           />
          <br/><br/>

          <Label>Lebar (Dalam Cm) :</Label>
          <br/><br/>
          <Input 
           type={'number'}
           value={Lebar}
           onChange={(e)=>setLebar(e.target.value)}
           name='lebar'
           />
          <br/><br/><br/>

          <Button type='submit'/>

        </MainForm>
      </FormContainer>

     
    </MainContainer>
  )
}

export default SizePage