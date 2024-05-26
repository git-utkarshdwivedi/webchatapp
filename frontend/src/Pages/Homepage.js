import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  extendTheme,
  TabIndicator,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const customTheme = extendTheme({
  colors: {
    // Your existing colors...
    myCustomScheme: {
      50: "#f5f5f5", // Lightest shade
      100: "#e0e0e0",
      // ...other shades up to 900
    },
  },
});

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={4}
        bg="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(4px) grayscale(0.2)"
        boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="md"
        borderWidth="1px"
      >
        <Text
          fontSize={"6xl"}
          fontFamily={"Work sans"}
          color={"GrayText"}
          fontWeight="bold"
        >
          Whispr
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(4px) grayscale(0.2)"
        boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
        w={"100%"}
        p={4}
        borderRadius={"md"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
