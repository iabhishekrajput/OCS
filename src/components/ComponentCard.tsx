import { Text, Heading, Link, theme, Flex } from "@chakra-ui/react";
import React from "react";

const Status = ({ status }: { status: "success" | "failed" | "warning" }) => {
  switch (status) {
    case "failed":
      return (
        <Text marginX={4} fontSize="md" color="red">
          Failed
        </Text>
      );

    case "success":
      return (
        <Text marginX={4} fontSize="md" color="green">
          Success
        </Text>
      );

    case "warning":
      return (
        <Text marginX={4} fontSize="md" color="gold">
          Warning
        </Text>
      );
  }
};

export const ComponentCard = ({
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
        <Status status={status} />
      </Flex>
    </Link>
  );
};
