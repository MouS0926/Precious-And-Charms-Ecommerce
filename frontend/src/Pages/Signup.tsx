import React, { useState,useEffect, Dispatch } from 'react';
import { styled } from 'styled-components';
import B1 from "../Images/B2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { RootauthState, UserObject } from '../constrain';
import {useDispatch,useSelector} from "react-redux"
import { getUsers, SignUp } from '../Redux/AuthReducer/action';
import {  useToast } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';

const Signup = () => {
  const toast = useToast();
 const [user,setUser] = useState<UserObject>({ name:"",
email: "",password: "",addToCart:[],
orderPlaced:[],address:[]

});
const navigate=useNavigate();
const dispatch: Dispatch<any> =useDispatch();
const AllUser =useSelector((store:any)=>store.authReducer.Users)
// console.log(AllUser)
useEffect(() => {

dispatch(getUsers())
// getUsers(dispatch)

},[])
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
const newUser = {...user,[name]:value};
setUser(newUser);
  }
  
const handleSubmit =()=>{
    // console.log("Submit",user)
    if(user.email === "" || user.password === "" ){
      // alert("Please enter valid data");
      toast({
        title: 'valid email',
        description: 'give valid data.',
        status: 'warning', 
        duration: 2000,  
        isClosable: true, 
      });


    }else if (Array.isArray(AllUser)) {

    
let userPrasent = AllUser.find((el:UserObject)=>{
  return el.email==user.email;
})
// console.log(userPrasent,"user")
     if(userPrasent){
      // alert("You already have a account with this email address")
      toast({
        title: 'already registered email',
        description: 'You already have a account with this email address.',
        status: 'error', 
        duration: 2000,  
        isClosable: true, 
      });
      setUser({ name:"",
    email: "",password: "",addToCart:[],
    orderPlaced:[],address:[]
    
    })
     }else{
      dispatch(SignUp(user))
      // alert("your registration is successful")
      setUser({ name:"",
    email: "",password: "",addToCart:[],
    orderPlaced:[],address:[]
    
    })
      toast({
        title: 'Signup Success',
        description: 'your registration is successful.',
        status: 'success', 
        duration: 2000,  
        isClosable: true, 
      });
      navigate("/login");
     }
    }
    
  }
  return (<>  
 
    <Div>
    <div className='form'>
    <Link to="/"><h1>PRECIOUS-&-CHARMS</h1></Link>
      
      <div>
        <h2>SIGNUP PAGE</h2>
       
        <input type="text" name="name" placeholder='Full Name...' value={user.name}onChange={handleChange} />
        <br />
        <input type="email" name="email" value={user.email}placeholder='Email' onChange={handleChange} />
        <br />
        
        <input type="password" name="password" value={user.password}placeholder='Password' onChange={handleChange} />
        <br />
       
       
        <input type="submit" value="SIGNUP" onClick={handleSubmit}/>
        <br />
        <br />
        <span><Link to="/login">Login</Link></span>
      </div>
      </div>
    </Div>
    </>
  );
}

export default Signup;


const Div = styled.div`
padding-top:80px;
 background-image: url(${B1});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin-top:0; 
  border:1px solid black;
  color: black;
  text-align: center;

.form{
   width:40%;
   margin:0 auto;
   padding: 10px;
    background-color: #ffffff8c;
    border: 1px solid #d3d3d3;
}
input{
   border: 1px solid #a1a1a1;
}

  h1{
  
   margin-bottom:20px;
   font-size:30px;
   font-weight:bold;
  }
  h2{
   margin-top:20px;
   margin-bottom:20px;
   font-size:20px;
   font-weight:bold;
  }
 
   h2 {
      margin-left:10px;
   }
   input[type="email"],[type="password"],[type="text"]{
   width:80%;
   height :40px;
  
margin:auto;
margin-bottom:20px;
   box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
  }
  input[type="email"],[type="password"],[type="text"]::placeholder {
   padding-left:20px;
  color: #2d2c2c; /* Placeholder text color */
  font-style: italic; /* Placeholder text style */
}
   /* border:1px solid white; */

  input[type="submit"]{
   width: 80%;
  height: 40px;
  font-weight: bold;
  background-color: #333533;
  color: #dcd7d7;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  }
  input[type="submit"]:hover{
   border:2px solid black;
  }
  span {
   margin:20px;
   cursor: pointer;
   color:black;
   text-decoration: none;
   Link{
      color:black;
      border:none;
   }
  }
  span:hover{
   background-color:white;
  }
  /* :hover{
   box-shadow: rgba(255, 253, 253, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   } */



   @media screen and (min-device-width: 320px) and (max-device-width: 767px) { 
    /* STYLES HERE */
    .form{
      width:100%;
    }
    }
`