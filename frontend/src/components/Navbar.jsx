import {Link} from "react-router-dom";
import {Container,Flex,Button,HStack,Text} from '@chakra-ui/react';
import {PlusSquareIcon} from "@chakra-ui/icons";

const Navbar = () => {
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
        fontWeight="bold"
        textTransform={"uppercase"}
        text-align={"center"}
        bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200"        
        bgClip="text"
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      
      <HStack spacing={2} align-items={"center"}> {/*horizontal stack*/}
        <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={20} />
          </Button>
        </Link>
      </HStack>
    
      </Flex>
      
    </Container>
  )
}

export default Navbar
