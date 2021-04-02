import * as React from "react";
import { Flex, Heading, Divider, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router";

import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";
import { ComponentCard } from "../app/components/ComponentCard";
import { breadcrumbConstants } from "../constants";
import { toParam } from "../utils";

const ComponentPage = ({
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
}) => {
  const history = useHistory();

  const appName = toParam(history.location.search).app;

  React.useEffect(() => {
    appName &&
      (appName === "midas" || appName === "ldr" || appName === "reds") &&
      setBreadcrumbData((prevState) => [
        ...prevState.slice(0, 1),
        breadcrumbConstants[appName],
      ]);
  }, [appName, setBreadcrumbData]);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Components
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <VStack spacing={8}>
        <ComponentCard
          id="adlib"
          status="failed"
          title="ADLIB"
          url={`/servers?app=${appName}&component=adlib`}
        />
        <ComponentCard
          id="xplore"
          status="warning"
          title="xPlore"
          url={`/servers?app=${appName}&component=xplore`}
        />
        <ComponentCard
          id="openannotate"
          status="success"
          title="OpenAnnotate"
          url={`/servers?app=${appName}&component=openannotate`}
        />
        <ComponentCard
          id="webapplication"
          status="failed"
          title="Web Application"
          url={`/servers?app=${appName}&component=webapplication`}
        />
        <ComponentCard
          id="webservice"
          status="warning"
          title="Web Service"
          url={`/servers?app=${appName}&component=webservice`}
        />
        <ComponentCard
          id="watermarkingservice"
          status="success"
          title="Watermarking Service"
          url={`/servers?app=${appName}&component=watermarkingservice`}
        />
        <ComponentCard
          id="da"
          status="failed"
          title="DA"
          url={`/servers?app=${appName}&component=da`}
        />
      </VStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
};

export default ComponentPage;
