import React from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";

const MyForm = styled.div `
width:100%;
`;

const Submitter = styled.form `
width:30%;
background-color:slategray;
display:flex;
justify-content:center;
flex-direction:column;
`;

const Puts = styled.input `
padding:2%;
margin:5%;

background-color:white;

`;





const Login = () =>{

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }


  return (


    <div className="Comp1Class">Login here.

   
      <MyForm className="user">
  
      <Submitter  onSubmit={handleSubmit(onSubmit)}> 
  
      <div className="pudding">
      <Puts name="example" placeholder="Username" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required*</span>}
  
      <Puts name="exampleRequired" placeholder="Password" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required*</span>}
  
      <input type="submit" />
      </div>
      </Submitter>
      </MyForm>

    </div>
  )
}

export default Login;