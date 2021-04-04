import * as React from "react";
import { HStack } from "@chakra-ui/layout";
import { Flex, Heading, Divider, CircularProgress } from "@chakra-ui/react";

import { ApplicationCard } from "../app/components/ApplicationCard";
import BreadcrumbLayout from "../app/layout/BreadcrumbLayout";
import { StatusType } from "../types";
import axios from "axios";

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
  const [applications, setApplications] = React.useState<
    {
      id: number;
      applicationName: string;
      applicationTitle: string;
      url: string;
      status?: StatusType;
    }[]
  >([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setBreadcrumbData((prevState) => [...prevState.slice(0, 1)]);

    const fetchApplications = async () => {
      setLoading(true);

      await axios
        .get("http://localhost:8080/applications")
        .then((response) => response.data)
        .then(
          (
            data: {
              id: number;
              applicationName: string;
              applicationTitle: string;
            }[]
          ) => {
            const idata = data
              .map((item) => ({
                ...item,
                url: `/components?app=${item.applicationName}`,
              }))
              .sort((a, b) => {
                if (
                  a.applicationName.toLowerCase() <
                  b.applicationName.toLowerCase()
                )
                  return -1;
                if (
                  a.applicationName.toLowerCase() >
                  b.applicationName.toLowerCase()
                )
                  return 1;
                return 0;
              });
            setApplications(idata);
          }
        );

      setLoading(false);
    };

    fetchApplications();

    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const fetchApplicationStatus = async () => {
      applications.forEach(async (item) => {
        await axios
          .get(
            `http://localhost:8080/status/application/${item.applicationName}`
          )
          .then((response) => response.data)
          .then((data: { applicationName: string; status: StatusType }) => {
            const application = applications.find(
              (item) => item.applicationName === data.applicationName
            );
            setApplications((prevState) =>
              application
                ? [
                    ...prevState.filter(
                      (item) => item.applicationName !== data.applicationName
                    ),
                    { ...application, status: data.status },
                  ].sort((a, b) => {
                    if (
                      a.applicationName.toLowerCase() <
                      b.applicationName.toLowerCase()
                    )
                      return -1;
                    if (
                      a.applicationName.toLowerCase() >
                      b.applicationName.toLowerCase()
                    )
                      return 1;
                    return 0;
                  })
                : prevState
            );
          });
      });
    };

    fetchApplicationStatus();

    // eslint-disable-next-line
  }, [applications.length]);

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="2xl" my={4}>
        Applications
      </Heading>
      <BreadcrumbLayout breadcrumbData={breadcrumbData} />
      <Divider my={8} width="80vw" />
      <HStack spacing={8} flex={1} justifyContent="center">
        {loading ? (
          <Flex justifyContent="center" alignItems="center">
            <CircularProgress isIndeterminate />
          </Flex>
        ) : (
          applications.map((item) => (
            <ApplicationCard
              key={item.id}
              status={item.status}
              title={item.applicationTitle}
              url={item.url}
            />
          ))
        )}
      </HStack>
      <Divider my={8} width="80vw" />
    </Flex>
  );
}

export default ApplicationPage;
