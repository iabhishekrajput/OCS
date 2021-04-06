import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ColorModeSwitcher } from "../../Components/ColorModeSwitcher";

export const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      zIndex={1}
      position="sticky"
      top={0}
      bg={colorMode === "light" ? "#EBEBEB" : "#2C313D"}
      mb={8}
      shadow="xl"
      borderBottom="1px solid lightgray"
      opacity={0.9}
    >
      <Flex align="center" flex={1} margin="auto" my={3} mx="4vw">
        <Box mr="auto">
          <Flex
            direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
            minW={240}
          >
            <Heading size="lg">One Click Source</Heading>
            <Text fontSize="xs">by Content Management</Text>
          </Flex>
        </Box>
        <Box ml="auto">
          <Flex direction="row" alignItems="center">
            <HStack>
              <Button
                to="/"
                as={Link}
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                marginLeft="2"
                aria-label="Home"
              >
                Home
              </Button>
            </HStack>
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
