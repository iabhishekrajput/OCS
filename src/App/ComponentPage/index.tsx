import * as React from "react";
import {
  CircularProgress,
  Divider,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import BreadcrumbLayout from "../../Layout/BreadcrumbLayout";
import { fetchApplications, fetchComponents } from "../../FetchData";
import { ComponentCard } from "../../Components/ComponentCard";
import { setComponentsBreadcrumb } from "../../Store/Breadcrumb/actions";

const ComponentPage = () => {
  const { application: applicationName } = useParams<{ application: string }>();

  const { data, isLoading } = useQuery(["components", applicationName], () =>
    fetchComponents(applicationName)
  );

  const { data: applications } = useQuery("applications", fetchApplications);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const application =
      applications &&
      applications.find((item) => item.name === applicationName);

    application && dispatch(setComponentsBreadcrumb(application));
  }, [applications, applicationName, dispatch]);

  return (
    <Flex direction="column" alignItems="center" minH="80vh">
      <Heading fontSize="2xl" my={4}>
        Components
      </Heading>
      <BreadcrumbLayout />
      <Divider my={8} width="80vw" />
      <VStack spacing={8}>
        {!isLoading && data ? (
          data.map((item) => (
            <ComponentCard
              key={item.id}
              applicationName={applicationName}
              componentName={item.name}
              componentTitle={item.title}
            />
          ))
        ) : (
          <Flex justifyContent="center" alignItems="center">
            <CircularProgress isIndeterminate />
          </Flex>
        )}
      </VStack>
    </Flex>
  );
};

export default ComponentPage;
