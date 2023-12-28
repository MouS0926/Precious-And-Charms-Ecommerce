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
  Td,
  TableCaption,Button,
  TableContainer,Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function UserOrder() {
  const Allorders =useSelector((store)=>store.authReducer.ActiveUser.orderPlaced);
  console.log(Allorders);

  return (
    <>
     <div>
   <Navbar2/>
   </div>


   <Div>
   <Heading as='h3' size='lg'>
   Orders
  </Heading>
   <TableContainer  width="100%" display="flex" justifyContent="center">
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Order Id</Th>
        <Th>Order Date</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>

{
  Allorders && Allorders.map((el)=>(
  <Tr key={el.orderId}>
        <Td>{el.orderId}</Td>
        <Td>{el.orderdate} </Td>
        <Td>
        
        <Link to={`/userorders/${el.orderId}`}>
        <Button colorScheme='teal' size='md'>
            View
          </Button>
        </Link>
          
  </Td>
      </Tr>
  ))
  
  // "No product ordered yet"
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