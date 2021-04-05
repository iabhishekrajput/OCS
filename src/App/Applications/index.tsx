import * as React from "react";
import { HStack } from "@chakra-ui/layout";
import { CircularProgress, Divider, Flex, Heading } from "@chakra-ui/react";
import { ApplicationCard } from "../../Components/ApplicationCard";
import BreadcrumbLayout from "../../Layout/BreadcrumbLayout";
import { useQuery } from "react-query";
import { fetchApplications } from "../../FetchData";

function ApplicationPage() {
  const { data, isLoading } = useQuery("applications", fetchApplications);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Applications
      </Heading>
      <BreadcrumbLayout />
      <Divider my={8} width="80vw" />
      <HStack spacing={8} flex={1} justifyContent="center">
        {!isLoading && data ? (
          data.map((item) => (
            <ApplicationCard
              key={item.id}
              name={item.name}
              title={item.title}
            />
          ))
        ) : (
          <Flex justifyContent="center" alignItems="center">
            <CircularProgress isIndeterminate />
          </Flex>
        )}
      </HStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
}

export default ApplicationPage;
