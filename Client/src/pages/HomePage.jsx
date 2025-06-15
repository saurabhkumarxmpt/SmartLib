import Navbar from "@/components/ui-component/Navbar";
import { Box, Text, Stack } from "@chakra-ui/react";
const Home=()=>{
    return(
        <>
        <Navbar/>
         <Box
      height="100vh"
      backgroundImage="url('home-images/home-bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
     >
      <Stack textAlign="center" spacing={4} px={4}>
        <Text fontSize="6xl" fontWeight="bold">
          Welcome to the Library
        </Text>
        <Text fontSize="lg">
          Explore a world of knowledge, books, and wisdom.
        </Text>
      </Stack>
    </Box>
        </>
    )
}

export default Home;