import * as React from "react";
import { HStack } from "@chakra-ui/layout";
import { Flex, Heading, Divider } from "@chakra-ui/react";

import { ApplicationCard } from "../app/components/ApplicationCard";
import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";
import { StatusType } from "../types";
//get below data from axios
import { applications } from "../constants";

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
  const [applicationStatus, setApplicationStatus] = React.useState<
    {
      id: string;
      title: string;
      url: string;
      status: StatusType;
    }[]
  >([]);

  React.useEffect(() => {
    setBreadcrumbData((prevState) => [...prevState.slice(0, 1)]);
    setApplicationStatus(applications);
    // eslint-disable-next-line
  }, []);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Applications
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <HStack spacing={8} flex={1} justifyContent="center">
        {applicationStatus.map((item) => (
          <ApplicationCard
            key={item.id}
            status={item.status}
            title={item.title}
            url={item.url}
          />
        ))}
      </HStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
}

export default ApplicationPage;
