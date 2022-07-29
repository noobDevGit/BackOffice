import React from 'react'
import { MainContainer,
    TitleContianer,
    TitleContent,
    FormContainer,
    MainForm,
    Label,
    Input,
    Button } from '../AllFormElements'

import {CheckboxContainer}from './ProductPageElements'    

import { useEffect,useState } from 'react'
import axios from 'axios'

const ProductPage = () => {

  
  const [AllUkuran,setAllUkuran] =useState ([])
  const [Type,setType] =useState ([])
  const [getType,setGetType]=useState('')
  const [IsLoading,SetLoading]=useState(true)
  
  
  const AddObjectKeyToState =(insert)=>{

   let temp = insert.map(newarr => ({...newarr, isActive: false, stock:''}))

   
   
    setAllUkuran(temp)

    SetLoading(false)

  }


  const HandleChecked = (e)=>{

  

    let arrTemp = [...AllUkuran]


   for (let index = 0; index < arrTemp.length; index++) {

          if (arrTemp[index].id==e.target.value) {

            arrTemp[index].isActive= e.target.checked

          }

   }

    
    setAllUkuran(arrTemp)

    

}

const fillStock =(e)=>{

  let arrTemp = [...AllUkuran]


  for (let index = 0; index < arrTemp.length; index++) {

         if (arrTemp[index].NamaUkuran==e.target.name) {

           arrTemp[index].stock= e.target.value

         }

  }

   
   setAllUkuran(arrTemp)

   


}



    useEffect(() => {

     

        axios
        .get(`http://localhost:5000/api/get/ukuran`)
        .then((result)=>{

        
        AddObjectKeyToState(result.data)



        })

        axios
        .get(`http://localhost:5000/api/get/type`)
        .then((result)=>{

        
        setType(result.data)



        })

        


    },[]) 

    const handleSubmit =(e)=>{


        e.preventDefault()

        let newArr = AllUkuran.filter((temp)=>{
          return temp.isActive == true;
        });

        
        
        


    }

    
   

  return IsLoading?<h1>Loading</h1>:
  (
    
    
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Add Product</TitleContent>
      </TitleContianer>

       
      <FormContainer>
        <MainForm 
          onSubmit={handleSubmit}
         >
          <Label>Product Name :</Label>
          <br/><br/>
          <Input
            
            
            
          />
          <br/><br/>

          

          <CheckboxContainer>
              <Label>Product Size and Stock:</Label>
              <br/><br/>
            {AllUkuran.map(UkuranContent => 
              (
                  <React.Fragment key={UkuranContent.id}>
                      <input type="checkbox" 
                            id={UkuranContent.id} 
                            onChange={HandleChecked}  
                            value={UkuranContent.id}/>

                      <label htmlFor={UkuranContent.id}> 
                      {UkuranContent.NamaUkuran}  </label>

                      <Input
                        disabled={UkuranContent.isActive ? false:true}
                        value ={UkuranContent.isActive ?UkuranContent.stock:''}
                        name={UkuranContent.NamaUkuran}
                        onChange={fillStock}
                        required={UkuranContent.isActive ? true:false}
                        />
                        <br/><br/>
                  </React.Fragment>
              ))}

          <Label>Product Type</Label>
          <br/><br/>
          {Type.map(TypeContent => 
              (
                  <React.Fragment key={TypeContent.id}>
                        <input type="radio" 
                          id={TypeContent.id} 
                          name='Type' 
                          onChange={(e)=>setGetType(e.target.value)}
                          value={TypeContent.id}/>
                        <label htmlFor={TypeContent.id}> 
                        {TypeContent.NamaJenis}  </label>
                        <br/><br/>
                  </React.Fragment>
              ))}
          </CheckboxContainer>

          <Label>width (in Cm) :</Label>
          <br/><br/>
          <Input 
         
           />
          <br/><br/><br/>

          <Button type='submit'/>

        </MainForm>
      </FormContainer>

     
    </MainContainer>
  )

  }

export default ProductPage