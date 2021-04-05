import * as React from "react";
import { Text, useColorMode } from "@chakra-ui/react";
import { StatusType } from "../Types";

export const StatusText = ({
  status,
  message,
}: {
  status: StatusType;
  message: string;
}) => {
  const { colorMode } = useColorMode();

  const actualColor = colorMode === "dark" ? "light" : "dark";

  switch (status) {
    case "error":
      return (
        <Text marginX={4} fontSize="md" color={`${actualColor}red`}>
          {message}
        </Text>
      );

    case "success":
      return (
        <Text marginX={4} fontSize="md" color={`${actualColor}green`}>
          {message}
        </Text>
      );

    case "warning":
      return (
        <Text marginX={4} fontSize="md" color={`${actualColor}yellow`}>
          {message}
        </Text>
      );
  }
};
