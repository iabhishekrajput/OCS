import * as React from "react";
import { Text } from "@chakra-ui/react";
import { StatusType } from "../../types";

const Status = ({ status }: { status: StatusType }) => {
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

export default Status;
