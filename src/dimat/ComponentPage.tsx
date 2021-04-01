import * as React from "react";
import { VStack } from "@chakra-ui/layout";
import { ComponentCard } from "../components/ComponentCard";

export const ComponentPage = () => {
  return (
    <VStack spacing={8}>
      <ComponentCard status="failed" title="ADLIB" />
      <ComponentCard status="warning" title="xPlore" />
      <ComponentCard status="success" title="OpenAnnotate" />
      <ComponentCard status="failed" title="Web Application" />
      <ComponentCard status="warning" title="Web Service" />
      <ComponentCard status="success" title="Watermarking Service" />
      <ComponentCard status="failed" title="DA" />
    </VStack>
  );
};
