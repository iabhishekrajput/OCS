import {
  Flex,
  Heading,
  Divider,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ServerCard from "../../Components/ServerCard";
import {
  fetchApplications,
  fetchComponents,
  fetchServers,
} from "../../FetchData";
import BreadcrumbLayout from "../../Layout/BreadcrumbLayout";
import { setServersBreadcrumb } from "../../Store/Breadcrumb/actions";

const ServerPage = () => {
  const { application: applicationName, component: componentName } = useParams<{
    application: string;
    component: string;
  }>();

  const { data, isLoading } = useQuery(
    ["servers", componentName, applicationName],
    () => fetchServers(applicationName, componentName)
  );

  const { data: applications } = useQuery("applications", fetchApplications);
  const { data: components } = useQuery(["components", applicationName], () =>
    fetchComponents(applicationName)
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    const application =
      applications &&
      applications.find((item) => item.name === applicationName);
    const component =
      components && components.find((item) => item.name === componentName);

    application &&
      component &&
      dispatch(setServersBreadcrumb(application, component));
  }, [components, applications, componentName, applicationName, dispatch]);

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
            <ServerCard
              key={item.id}
              applicationName={applicationName}
              componentName={componentName}
              serverName={item.name}
              serverTitle={item.title}
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

export default ServerPage;
