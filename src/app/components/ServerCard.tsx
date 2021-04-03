import {
  Text,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { StatusType } from "../../types";
import Status from "./Status";

export const ServerCard = ({
  title,
  status,
}: {
  title: string;
  status: StatusType;
}) => {
  return (
    <Flex
      flexDir="row"
      shadow="lg"
      borderWidth="1px"
      w="50vw"
      alignItems="center"
      justifyContent="space-between"
    >
      <Accordion allowToggle flex={1}>
        <AccordionItem flex={1} p={2} borderTop="none">
          <h2 style={{ flex: 1 }}>
            <AccordionButton flex={1} justifyContent="space-between">
              <Box textAlign="left">{title}</Box>
              <Flex flexDir="row" alignItems="center">
                <Status status={status} />
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
