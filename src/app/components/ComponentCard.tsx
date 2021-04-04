import { Heading, Link, theme, Flex, CircularProgress } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { StatusType } from "../../types";
import Status from "./Status";

export const ComponentCard = ({
  title,
  status,
  url,
}: {
  title: string;
  status?: StatusType;
  url: string;
}) => {
  console.log("App: ", title, ", Status: ", status);
  return (
    <Link
      as={RouterLink}
      to={url}
      _hover={{
        shadow: "2xl",
        backgroundColor: theme.colors.whiteAlpha[50],
      }}
    >
      <Flex
        flexDir="row"
        p={2}
        shadow="lg"
        borderWidth="1px"
        minW="50vw"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading fontSize="xl" m={4}>
          {title}
        </Heading>
        {status ? (
          <Status status={status} />
        ) : (
          <CircularProgress
            size="24px"
            mx={6}
            color={theme.colors.blackAlpha[700]}
            isIndeterminate
          />
        )}
      </Flex>
    </Link>
  );
};
