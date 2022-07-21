import React from 'react'
import { MainContainer,
         TitleContianer,
         TitleContent,
         FormContainer,
         MainForm,
         Label,
         Input,
         Button } from '../AllFormElements'

import { toast} from 'react-toastify';

import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios'

import { useEffect,useState } from 'react'     
    

const TypePage = () => {

  //get param
  const {id} = useParams();

  //current data const
  const [CurType, setType] = useState('')
 
  

  //navigate
  const navigate = useNavigate()

  useEffect(() => {

    axios
    .get(`http://localhost:5000/api/get/ukuran/${id}`)
    .then((result)=>{


       setNamaUkuran(result.data[0].NamaUkuran)
       setPanjang(result.data[0].Height)
       setLebar(result.data[0].Width)

       setCursize(result.data[0].NamaUkuran)
       setCurHeight(result.data[0].Height)
       setCurWidth(result.data[0].Width)

    });

}, [id]) 

  //useState Instance
  const [TypeName, setTypeName] = useState('')


const handleSubmit = (e) =>{

  e.preventDefault()
    

    if (!TypeName) {

      toast.error("Field cannot be empty")
      

    }else{

      if(!id){

        axios.
        post('http://localhost:5000/api/post/ukuran',{NamaUkuran,Panjang,Lebar}).
        then((res)=>{

          if(res.data.num === 1){

             setNamaUkuran('')
             setPanjang('')
             setLebar('')

             toast.success(res.data.message)

             
             setTimeout(()=>{
              navigate('/size_page');
            },500);

          }else{

            toast.error(res.data.message)
          
          }


        }).catch((err)=>toast.error(err.response.data))


      }else{

        if(NamaUkuran.toUpperCase() === CurSize.toUpperCase() && Panjang === CurHeight && Lebar === CurWidth){
        
          toast.info('No Changes Made')

           setCursize('')
           setCurWidth('')
           setCurHeight('')

          setTimeout(()=>{
            navigate('/size_page');
          },500);

        }else

        axios.
        put(`http://localhost:5000/api/put/ukuran/${id}`,{NamaUkuran,Panjang,Lebar,CurSize}).
        then((res)=>{

          if (res.data.num === 1) {

            toast.success(res.data.message)
            setCursize('')
            setCurWidth('')
            setCurHeight('')

            setTimeout(()=>{
              navigate('/size_page');
            },500);

          }else{

            toast.error(res.data.message)
          }

        })

        

      }
  

    }
    

}

  return (
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Master Size</TitleContent>
      </TitleContianer>

      <FormContainer>
        <MainForm 
         onSubmit={handleSubmit}
         >
          <Label>Size Name :</Label>
          <br/><br/>
          <Input
            value={NamaUkuran}
            onChange={(e)=>setNamaUkuran(e.target.value)}
            name='ukuran'
            required
          />
          <br/><br/>

          <Label>Height (in Cm) :</Label>
          <br/><br/>
          <Input 
           type={'number'} 
           value={Panjang}
           onChange={(e)=>setPanjang(e.target.value)}
           name='panjang'
           required
           />
          <br/><br/>

          <Label>width (in Cm) :</Label>
          <br/><br/>
          <Input 
           type={'number'}
           value={Lebar}
           onChange={(e)=>setLebar(e.target.value)}
           name='lebar'
           required
           />
          <br/><br/><br/>

          <Button type='submit'/>

        </MainForm>
      </FormContainer>

     
    </MainContainer>
  )
}

export default TypePage