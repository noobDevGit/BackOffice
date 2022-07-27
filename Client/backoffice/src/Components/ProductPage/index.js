import React from 'react'
import { MainContainer,
    TitleContianer,
    TitleContent,
    FormContainer,
    MainForm,
    Label,
    Input,
    Button } from '../AllFormElements'

const ProductPage = () => {
  return (
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

          <Label>Height (in Cm) :</Label>
          <br/><br/>
          <Input 
           
           />
          <br/><br/>
          <input type="checkbox" id="topping" name="topping" value="Paneer" />Paneer
        <br/><br/>

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