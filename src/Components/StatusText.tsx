import * as React from "react";
import { Icon } from "@chakra-ui/react";
import { StatusType } from "../Types";
import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoIosWarning,
} from "react-icons/io";

export const StatusText = ({ status }: { status: StatusType }) => {
  switch (status) {
    case "error":
      return (
        <Icon mx={4} fontSize="24px" color="red" as={IoIosCloseCircle}></Icon>
      );

    case "success":
      return (
        <Icon
          mx={4}
          fontSize="24px"
          color="green"
          as={IoIosCheckmarkCircle}
        ></Icon>
      );

    case "warning":
      return (
        <Icon mx={4} fontSize="24px" color="goldenrod" as={IoIosWarning}></Icon>
      );
  }
};
