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
  const [IsLoading,SetLoading]=useState(true)
  
  
  const AddObjectKeyToState =(insert)=>{

   let temp = insert.map(newarr => ({...newarr, isActive: false, stock:''}))

   console.log(temp);
   
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

        


    },[]) 
   

  return IsLoading?<h1>Loading</h1>:
  (
    
    
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Add Product</TitleContent>
      </TitleContianer>

       
      <FormContainer>
        <MainForm 
         >
          <Label>Product Name :</Label>
          <br/><br/>
          <Input
            
            
            
          />
          <br/><br/>

          <Label>Product Size and Stock:</Label>
          <br/><br/>

          <CheckboxContainer>
            {AllUkuran.map(UkuranContent => 
              (

              <React.Fragment key={UkuranContent.id}>
              <input type="checkbox" id={UkuranContent.id} onChange={HandleChecked} name="vehicle1" value={UkuranContent.id}/>
              <label htmlFor={UkuranContent.id}> {UkuranContent.NamaUkuran}  </label>
              <Input
                disabled={UkuranContent.isActive ? false:true}
                value ={UkuranContent.isActive ?UkuranContent.stock:''}
                name={UkuranContent.NamaUkuran}
                onChange={fillStock}
                />
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