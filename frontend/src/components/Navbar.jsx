import {Link} from "react-router-dom";
import {Container,Flex,Button,HStack,Text} from '@chakra-ui/react';
import { useColorMode} from "@chakra-ui/react";



import {PlusSquareIcon} from "@chakra-ui/icons";
import {IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';

const Navbar = () => {
  const{colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex 
      h={16}
      align-items="center"
      justifyContent="space-between"
      flexDir={{
        base:"column",
        sm:"row"
      }}
      >
      <Text
        fontSize={{base:"22",sm:"18"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        text-align={"center"}
        bgGradient={"linear(to-r,cyan.400,blue.500)"}    
        bgClip="text"
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      
      <HStack spacing={2} align-items={"center"}> 
        <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={20} />
          </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode==="light" ? <IoMoon/> : <LuSun size="20"/>}
        </Button>
      </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
