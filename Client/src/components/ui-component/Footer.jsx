import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.500" py={4} textAlign="center">
      <Text fontSize="sm">
        © {new Date().getFullYear()} SmartLib. Made with ❤️ by Saurabh Kumar.
      </Text>
    </Box>
  );
};

export default Footer;
