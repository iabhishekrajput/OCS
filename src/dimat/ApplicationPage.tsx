import * as React from "react";
import { HStack } from "@chakra-ui/layout";
import { Flex, Heading, Divider } from "@chakra-ui/react";

import { ApplicationCard } from "../app/components/ApplicationCard";
import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";

function ApplicationPage({
  breadcrumbData,
  setBreadcrumbData,
}: {
  breadcrumbData: { id: string; url: string; title: string }[];
  setBreadcrumbData: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        url: string;
        title: string;
      }[]
    >
  >;
}) {
  React.useEffect(() => {
    setBreadcrumbData((prevState) => [...prevState.slice(0, 1)]);
  }, [setBreadcrumbData]);

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Applications
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <HStack spacing={8}>
        <ApplicationCard
          id="midas"
          status="failed"
          title="MIDAS"
          url="/components?app=midas"
        />
        <ApplicationCard
          id="ldr"
          status="warning"
          title="LDR"
          url="/components?app=ldr"
        />
        <ApplicationCard
          id="reds"
          status="success"
          title="REDS"
          url="/components?app=reds"
        />
      </HStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
}

export default ApplicationPage;
