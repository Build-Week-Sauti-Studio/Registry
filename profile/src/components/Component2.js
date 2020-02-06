import React from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";

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






const Signup = () =>{

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    


    return (


      <div className="Comp2Class">Create Your Account to Experience Sauti Studio
      
      
      
    <MyForm className="user">

<Submitter  onSubmit={handleSubmit(onSubmit)}> 

<div className="pudding2">
<Puts name="example" placeholder="Username" ref={register({ required: true })} />
{errors.exampleRequired && <span>This field is required*</span>}

<Puts name="exampleRequired" placeholder="Email" ref={register({ required: true })} />
{errors.exampleRequired && <span>This field is required*</span>}

<Puts name="exampleRequired" placeholder="Password" ref={register({ required: true })} />
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
    
    
    export default Signup;