import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

import { NavBar } from "./NavBar";

export const Layout = ({ children }: { children?: any }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <NavBar />
        <Grid textAlign="center" minH="84vh" p={3}>
          {children}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
