import { RepeatIcon } from "@chakra-ui/icons";
import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
  theme,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { StatusText } from "./StatusText";

const ServerCard = ({
  serverTitle,
  serverName,
  componentName,
  applicationName,
}: {
  serverTitle: string;
  serverName: string;
  componentName: string;
  applicationName: string;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      shadow="lg"
      borderWidth="1px"
      w="50vw"
      minW="120px"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        shadow: "lg",
        backgroundColor:
          colorMode === "dark"
            ? theme.colors.whiteAlpha[50]
            : theme.colors.blackAlpha[50],
      }}
    >
      <Accordion allowToggle flex={1}>
        <AccordionItem flex={1} border="none">
          <h2 style={{ flex: 1 }}>
            <AccordionButton flex={1} justifyContent="space-between" py={6}>
              <Box textAlign="left">{serverTitle}</Box>
              <Flex flexDir="row" alignItems="center">
                <StatusText status={"success"} />
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} flex={1} textAlign="left">
            <Text fontSize="md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sapiente voluptates delectus aperiam soluta sunt, quia quam!
              Perferendis quod aliquid obcaecati repudiandae iusto animi,
              voluptate molestias, possimus porro dolorem perspiciatis!
            </Text>
            <Box>
              <Button
                variant="link"
                alignItems="center"
                //isDisabled={isLoading}
                _hover={{ color: theme.colors.current }}
                _focus={{}}
                // onClick={async () => {
                //   remove();
                //   await refetch();
                // }}
              >
                <RepeatIcon />
                <Text m={2}>Reload</Text>
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default ServerCard;
