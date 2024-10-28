import { Container, VStack ,Box,useColorModeValue,Heading,Input,Button} from '@chakra-ui/react';
import {React,useState} from 'react'

const Createpage=()=>{
const [newProduct,setNewProduct]=useState({
  name:"",
  price:"",
  image:"",
});
const handleAddProduct=()=>{
  console.log(newProduct);
}
  return (
    <Container maxW={"Container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        
        <Box w={"full"} bg={useColorModeValue("white","gray.800")}>
          <VStack spacing={4}>
            <Input 
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
            />
            <Input 
              placeholder='Price'
              name='price'
              type="number"
              value={newProduct.price}
              onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
            />
            <Input 
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w='full'>
              Add product
            </Button>
          </VStack>
        </Box>

      </VStack>
    </Container>
  )
};

export default Createpage
