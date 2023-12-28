import React from 'react'
import { styled } from 'styled-components';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,Image,
  TableCaption,Button,
  TableContainer,Heading
} from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import { BsCalendar2DateFill } from 'react-icons/bs';

export default function SingleOrder() {
    const {orderId}=useParams()
  const Allorders =useSelector((store)=>store.authReducer.ActiveUser.orderPlaced);


  const singleOrder = Allorders.find((order) => order.orderId === orderId);


// console.log("Allorders",Allorders);
//   console.log(singleOrder);


  return (
    <>
     <div>
   <Navbar2/>
   </div>


   <Div>
   <Heading as='h3' size='lg'>
          Order ID: <span style={{color:"#5f5f5f"}}>{singleOrder.orderId}</span> 
        </Heading>
        <Heading as='h4' size='md' style={{ display: 'flex', alignItems: 'center' }}>
        <BsCalendar2DateFill />  <span  style={{ color: '#525151'}}> {singleOrder.orderdate}</span>
  </Heading>
  <br />
   <TableContainer  width="100%" display="flex" justifyContent="center">
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Product Name</Th>
        <Th>Single Product Price</Th>
        <Th>Category</Th>
        <Th>brand</Th>
      </Tr>
    </Thead>
    <Tbody>

{singleOrder.orders && singleOrder.orders ?
  singleOrder.orders && singleOrder.orders.map((el)=>(
  <Tr key={el.id}>
    <Td>
    <Image
    boxSize='100px'
    objectFit='cover'
    src={el.avatar}
    alt='Dan Abramov'
  />

    </Td>
        <Td>{el.name}</Td>
        <Td>{el.price} </Td>
        <Td>{el.category}</Td>
        <Td>{el.brand}</Td>
        
      </Tr>
  ))
  :
  "No order ordered yet"
}

      

     
    </Tbody>
   
  </Table>
</TableContainer>



  
   </Div>
   <Footer/>
    </>
  )
}

const Div = styled.div`
width:90%;
 
  margin: 0 auto;

  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top :100px;
  margin-bottom: 10px;
 
  
`;