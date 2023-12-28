import React, { useState } from 'react'
import Navbar from './AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Address, UserObjectNew } from '../constrain'
import { Container, HStack, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { Avatar, Spinner,Button,ButtonGroup, Image} from '@chakra-ui/react'
import {useEffect } from "react"
import { SingleUserFetch } from '../Redux/AdminReducer/action'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'
import { BsCalendar2DateFill } from "react-icons/bs";


export const SingleOrderdetails = () => {
    const { orderId } = useParams();
    const {id}=useParams()
  const[user,setUser]=useState({})
   
 
    const isload = useSelector((state) => state.data.singleuserLoad);
    let orderdetails =[]
    if(user && user.orderPlaced)
    {
        //console.log(user);

         orderdetails=user.orderPlaced.find((el)=>el.orderId==orderId)
        //  console.log(orderdetails);
    }

  
    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get(`https://monkeyapi-2-0.onrender.com/users/${id}`)
        .then((res)=>{
            // console.log(res);
            setUser(res.data)
           
        })
        .catch((err)=>{
            console.log(err);
        })
    },[id])
   
    console.log(orderdetails);
   
  
   
    
    
 

    return (
      <div>
        <Navbar />

{

   



        <Container maxW={"90%"} style={{ margin: "0 auto" }}>


{/* map orderdetails here */}




          <br />
          <Card>
            <CardBody>
         {
          orderdetails ?

          <>
          <Heading as='h3' size='lg'>
          Order ID: <span style={{color:"#504e4e"}}>{orderdetails.orderId}</span> 
        </Heading>
        <Heading as='h4' size='md' style={{ display: 'flex', alignItems: 'center' }}>
        <BsCalendar2DateFill />  <span  style={{ color: '#525151'}}> {orderdetails.orderdate}</span>
  </Heading>
        

          <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Price</Th>
                <Th>Category</Th>
              </Tr>
            </Thead>
            <Tbody>

{
 orderdetails && orderdetails.orders?.map((el)=>(
    <Tr >
    <Td>
    <Image
    boxSize='100px'
    objectFit='cover'
    src={el.avatar}
    alt='product Image'
  />
      
      </Td>
    <Td> {el.name}</Td>
    <Td>{el.price}</Td>
    <Td>{el.category}</Td>
  </Tr>
  ))
}
              
            
              
            </Tbody>
         
          </Table>
        </TableContainer>
        </>
        :
        ""

         }     

              

            </CardBody>
          </Card>
<br />






<br />

       











    </Container>
    }
      </div>
    );
  };