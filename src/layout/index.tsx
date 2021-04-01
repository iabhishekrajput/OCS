import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
// import ApplicationPage from "../dimat/ApplicationPage";
import { NavBar } from "./NavBar";
import { ComponentPage } from "../dimat/ComponentPage";
import BreadcrumbLayout from "./BreadcrumbLayout";

export const Layout = () => {
  const initialState = [
    { id: "home", url: "/", title: "Home" },
    { id: "midas", url: "/components?app=midas", title: "MIDAS" },
  ];

  const [breadcrumbData, _] = React.useState<
    { id: string; url: string; title: string }[]
  >(initialState);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <NavBar />
        <Grid textAlign="center" minH="84vh" p={3}>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Heading fontSize="2xl" my={4}>
              Components
            </Heading>
            <BreadcrumbLayout breadcrumbData={breadcrumbData} />
            <Divider my={8} width="80vw" />
            {/* <ApplicationPage /> */}
            <ComponentPage />
            <Divider my={8} width="80vw" />
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
