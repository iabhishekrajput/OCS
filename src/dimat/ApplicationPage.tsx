import * as React from "react";
import { HStack } from "@chakra-ui/layout";
import { ApplicationCard } from "../components/ApplicationCard";

function ApplicationPage() {
  return (
    <HStack spacing={8}>
      <ApplicationCard status="failed" title="MIDAS" />
      <ApplicationCard status="warning" title="LDR" />
      <ApplicationCard status="success" title="REDS" />
    </HStack>
  );
}

export default ApplicationPage;
