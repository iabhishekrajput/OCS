import * as React from "react";
import {
  Flex,
  Heading,
  Divider,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import { useHistory } from "react-router";

import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";
import { ComponentCard } from "../app/components/ComponentCard";
import { toParam } from "../utils";
import axios from "axios";
import { StatusType } from "../types";

const ComponentPage = ({
  breadcrumbData,
  setBreadcrumbData,
}: {
  breadcrumbData: { id: string; url: string; title: string }[];
  setBreadcrumbData: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        url: string;
        title: string;
      }[]
    >
  >;
}) => {
  const [components, setComponents] = React.useState<
    {
      id: number;
      componentName: string;
      componentTitle: string;
      url: string;
      status?: StatusType;
    }[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const appName = toParam(history.location.search).app;

  React.useEffect(() => {
    const loadComponents = async () => {
      setLoading(true);

      await axios
        .get(`http://localhost:8080/components?app=${appName}`)
        .then((response) => response.data)
        .then(
          (
            data: {
              id: number;
              componentName: string;
              componentTitle: string;
            }[]
          ) => {
            const idata = data
              .map((item) => ({
                ...item,
                url: `/servers?app=${appName}&component=${item.componentName}`,
              }))
              .sort((a, b) => {
                if (
                  a.componentName.toLowerCase() < b.componentName.toLowerCase()
                )
                  return -1;
                if (
                  a.componentName.toLowerCase() > b.componentName.toLowerCase()
                )
                  return 1;
                return 0;
              });

            setComponents(idata);
          }
        );

      setLoading(false);
    };

    axios
      .get(`http://localhost:8080/application?name=${appName}`)
      .then((response) => response.data)
      .then(
        (data: {
          id: number;
          applicationName: string;
          applicationTitle: "";
        }) => {
          setBreadcrumbData((prevState) => [
            ...prevState.slice(0, 1),
            {
              id: data.id,
              url: `/components?app=${data.applicationName}`,
              title: data.applicationTitle,
            },
          ]);
        }
      );

    loadComponents();
  }, [appName, setBreadcrumbData]);

  React.useEffect(() => {
    components.forEach((item) => {
      axios
        .get(`http://localhost:8080/status/component/${item.componentName}`)
        .then((response) => response.data)
        .then((data: { componentName: string; status: StatusType }) => {
          const component = components.find(
            (item) => item.componentName === data.componentName
          );

          setComponents((prevState) =>
            component
              ? [
                  ...prevState.filter(
                    (allItem) => allItem.componentName !== data.componentName
                  ),
                  { ...component, status: data.status },
                ].sort((a, b) => {
                  if (
                    a.componentName.toLowerCase() <
                    b.componentName.toLowerCase()
                  )
                    return -1;
                  if (
                    a.componentName.toLowerCase() >
                    b.componentName.toLowerCase()
                  )
                    return 1;
                  return 0;
                })
              : prevState
          );
        });
    });
    // eslint-disable-next-line
  }, [components.length]);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Components
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <VStack spacing={8}>
        {loading ? (
          <Flex justifyContent="center" alignItems="center">
            <CircularProgress isIndeterminate />
          </Flex>
        ) : (
          components.map((item) => (
            <ComponentCard
              key={item.id}
              status={item.status}
              title={item.componentTitle}
              url={item.url}
            />
          ))
        )}
      </VStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
};

export default ComponentPage;
