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
  const [FieldTest,setField] =useState ([])

  
  const getValue =(insert)=>{

   let temp = []

    for (let index = 0; index < insert.length; index++) {
     
    temp.push({'id':insert[index].id, 'state':false})
      
    }

    setField(temp)

  }


  const handleChange = (e)=>{

    console.log(e.target.value);

    let arrTemp = [...FieldTest]


   for (let index = 0; index < arrTemp.length; index++) {

          if (arrTemp[index].id==e.target.value) {

            arrTemp[index].state=e.target.checked

          }

   }

    //console.log(arrTemp);

    setField(arrTemp)

    console.log(FieldTest);

}



    useEffect(() => {

        axios
        .get(`http://localhost:5000/api/get/ukuran`)
        .then((result)=>{

        setAllUkuran(result.data)

        getValue(result.data)

        })

       

    },[AllUkuran]) 


    useEffect(() => {

      axios
      .get(`http://localhost:5000/api/get/ukuran`)
      .then((result)=>{


      getValue(result.data)

      })

     

  },[FieldTest]) 


    
  return (
    <MainContainer>
 
      <TitleContianer>
        <TitleContent>Add Product</TitleContent>
      </TitleContianer>

      
          <h1>
            {FieldTest[1].state.toString()}
          </h1>
        
      
      <FormContainer>
        <MainForm 
         >
          <Label>Product Name :</Label>
          <br/><br/>
          <Input
            
            
            
          />
          <br/><br/>

          <Label>Product Size</Label>
          <br/><br/>

          

          <CheckboxContainer>
          {AllUkuran.map((content,index,array)=>(
              <React.Fragment key={content.id}>
                <input id={content.id} type="checkbox" onChange={handleChange} name={content.NamaUkuran} value={content.id}/>
                <label >{content.NamaUkuran}</label>
                <Input value={FieldTest[index].state}/>
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