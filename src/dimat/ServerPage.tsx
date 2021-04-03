import * as React from "react";
import { Flex, Heading, Divider, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router";

import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";
import { breadcrumbConstants } from "../constants";
import { toParam } from "../utils";
import { ServerCard } from "../app/components/ServerCard";

const ServerPage = ({
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
  const componentName = toParam(history.location.search).component;

  React.useEffect(() => {
    let components = new Map();
    if (appName === "midas" || appName === "ldr" || appName === "reds") {
      components = new Map(
        Object.entries(breadcrumbConstants[appName].components)
      );
    }
    appName &&
      (appName === "midas" || appName === "ldr" || appName === "reds") &&
      components.has(componentName) &&
      setBreadcrumbData((prevState) => [
        ...prevState.slice(0, 1),
        breadcrumbConstants[appName],
        components.get(componentName),
      ]);
  }, [appName, componentName, setBreadcrumbData]);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Servers
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <VStack spacing={8}>
        <ServerCard title="Random Server 1" status="success" />
        <ServerCard title="Random Server 2" status="success" />
        <ServerCard title="Random Server 3" status="success" />
        <ServerCard title="Random Server 4" status="success" />
        <ServerCard title="Random Server 5" status="success" />
        <ServerCard title="Random Server 6" status="success" />
        <ServerCard title="Random Server 7" status="success" />
        <ServerCard title="Random Server 8" status="success" />
        <ServerCard title="Random Server 9" status="success" />
        <ServerCard title="Random Server 10" status="success" />
      </VStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
};

export default ServerPage;
