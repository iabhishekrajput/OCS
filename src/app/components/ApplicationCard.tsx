import { Box, CircularProgress, Heading, Link, theme } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { StatusType } from "../../types";
import Status from "./Status";

export const ApplicationCard = ({
  title,
  status,
  url,
}: {
  title: string;
  status?: StatusType;
  url: string;
}) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      _hover={{
        shadow: "2xl",
        backgroundColor: theme.colors.whiteAlpha[50],
      }}
    >
      <Box p={8} shadow="lg" borderWidth="1px" minW="25vw">
        <Heading fontSize="2xl" m={4}>
          {title}
        </Heading>
        {status ? (
          <Status status={status} />
        ) : (
          <CircularProgress
            size="24px"
            color={theme.colors.blackAlpha[700]}
            isIndeterminate
          />
        )}
      </Box>
    </Link>
  );
};
