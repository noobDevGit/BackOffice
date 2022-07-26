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
  const [CurType, setCurType] = useState('')

   //useState Instance
   const [TypeName, setTypeName] = useState('')
 
  

  //navigate
  const navigate = useNavigate()

  useEffect(() => {

    axios
    .get(`http://localhost:5000/api/get/type/${id}`)
    .then((result)=>{


       setTypeName(result.data[0].NamaJenis)
      

       setCurType(result.data[0].NamaJenis)
  

    });

}, [id]) 

 


const handleSubmit = (e) =>{

  e.preventDefault()
    

    if (!TypeName) {

      toast.error("Field cannot be empty")
      

    }else{

      if(!id){

        axios.
        post('http://localhost:5000/api/post/type',{TypeName}).
        then((res)=>{

          if(res.data.num === 1){

             setCurType('')
             setTypeName('')
            

             toast.success(res.data.message)

             
             setTimeout(()=>{
              navigate('/type_page');
            },500);

          }else{

            toast.error(res.data.message)
          
          }


        }).catch((err)=>toast.error(err.response.data))


      }else{

        if(TypeName.toUpperCase() === CurType.toUpperCase()){
        
          toast.info('No Changes Made')

           setCurType('')
           setTypeName('')
           

          setTimeout(()=>{
            navigate('/type_page');
          },500);

        }else{

        axios.
        put(`http://localhost:5000/api/put/type/${id}`,{TypeName}).
        then((res)=>{

          if (res.data.num === 1) {

            toast.success(res.data.message)
            setCurType('')
            setTypeName('')
           

            setTimeout(()=>{
              navigate('/type_page');
            },500);

          }else{

            toast.error(res.data.message)
          }

        })

        

      }
  

    }
    
  }
}


  return (
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Master Type</TitleContent>
      </TitleContianer>

      <FormContainer>
        <MainForm 
         onSubmit={handleSubmit}
         >
          <Label>Type Name :</Label>
          <br/><br/>
          <Input
            value={TypeName}
            onChange={(e)=>setTypeName(e.target.value)}
            name='TypeName'
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