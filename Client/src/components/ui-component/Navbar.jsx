import React from "react";
import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="teal.500" px={4} py={3}>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify="space-between"
        align="center"
      >
        {/* Logo / Title */}
        <Text fontSize="xl" fontWeight="bold" color="white">
          Smartlib
        </Text>

        {/* Buttons */}
        <Stack direction={isMobile ? "column" : "row"} spacing={4} mt={isMobile ? 3 : 0}>
          <Button size='sm' colorScheme="whiteAlpha" variant="subtle" rounded="md">
            Login
          </Button>
          <Button size='sm' colorScheme="whiteAlpha" variant="subtle" rounded="md">
            Register
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
