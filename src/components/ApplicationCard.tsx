import { Box, Text, Heading, Link, theme } from "@chakra-ui/react";
import React from "react";

const Status = ({ status }: { status: "success" | "failed" | "warning" }) => {
  switch (status) {
    case "failed":
      return (
        <Text fontSize="md" color="red">
          Failed
        </Text>
      );

    case "success":
      return (
        <Text fontSize="md" color="green">
          Success
        </Text>
      );

    case "warning":
      return (
        <Text fontSize="md" color="gold">
          Warning
        </Text>
      );
  }
};

export const ApplicationCard = ({
  title,
  status,
}: {
  title: string;
  status: "success" | "failed" | "warning";
}) => {
  return (
    <Link
      _hover={{
        shadow: "2xl",
        backgroundColor: theme.colors.whiteAlpha[50],
      }}
    >
      <Box p={8} shadow="lg" borderWidth="1px" minW="25vw">
        <Heading fontSize="2xl" m={4}>
          {title}
        </Heading>
        <Status status={status} />
      </Box>
    </Link>
  );
};
