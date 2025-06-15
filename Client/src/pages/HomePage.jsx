import Navbar from "@/components/ui-component/Navbar";
import Footer from "@/components/ui-component/Footer"
import {
  Box,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Heading,
  Container,
  Accordion
} from "@chakra-ui/react";
import { FiSend, FiUser, FiBookOpen } from "react-icons/fi";
import { Span } from "@chakra-ui/react"; 

const Home = () => {

 const items = [
  {
    value: "a",
    title: "How can I request a book online?",
    text: "You can request a book by logging into your account, searching the book title, and clicking on the 'Request' button."
  },
  {
    value: "b",
    title: "What is the borrowing limit for students?",
    text: "Students can borrow up to 3 books at a time for a period of 14 days."
  },
  {
    value: "c",
    title: "What happens if I return a book late?",
    text: "A fine of ₹5 per day will be charged for each overdue book."
  },
  {
    value: "d",
    title: "Can I renew a book online?",
    text: "Yes, if the book is not reserved by another user, you can renew it once from your account."
  },
  {
    value: "e",
    title: "How do I find available books in the library?",
    text: "Use the search bar on the home page to check availability by title, author, or ISBN."
  },
  {
    value: "f",
    title: "Who can access the library?",
    text: "The library is accessible to all registered students, faculty, and staff members."
  }
];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box
        height="100vh"
        backgroundImage="url('home-images/home-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
      >
        <Stack spacing={4}>
          <Text fontSize={["3xl", "4xl", "6xl"]} fontWeight="bold">
            Welcome to the Library
          </Text>
          <Text fontSize={["md", "lg"]}>
            Explore a world of knowledge, books, and wisdom.
          </Text>
        </Stack>
      </Box>

      {/* Features Section */}
      <Box py={12} px={4}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={10}
          color="teal.600"
          fontWeight="bold"
        >
          Features
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {[
            {
              icon: FiSend,
              title: "Online Request",
              desc: "Students can request books online anytime from anywhere.",
            },
            {
              icon: FiUser,
              title: "Student Info",
              desc: "Manage student profiles, book history, and reading stats.",
            },
            {
              icon: FiBookOpen,
              title: "Library Services",
              desc: "Explore available books, reserve seats, and get notifications.",
            },
          ].map((card, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              rounded="lg"
              shadow="md"
              textAlign="center"
              minH="280px"
              _hover={{
                shadow: "lg",
                transform: "translateY(-4px)",
                transition: "0.3s",
              }}
            >
              <Stack spacing={4} align="center">
                <Icon as={card.icon} w={10} h={10} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold">
                  {card.title}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {card.desc}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Questions Section (Original Accordion untouched) */}
      <Box pt={20}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={10}
          color="teal.600"
          fontWeight="bold"
        >
          FAQs 
        </Heading>

        <Container px={["20px", "40px", "210px"]} py={"40px"}>
          <Accordion.Root collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
              <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger>
                  <Span flex="1">{item.title}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
