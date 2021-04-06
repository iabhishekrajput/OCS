import {
  Heading,
  Link,
  theme,
  Flex,
  CircularProgress,
  Box,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { StatusText } from "../Components/StatusText";
import { useQuery } from "react-query";
import { fetchComponentStatus } from "../FetchData";
import { RepeatIcon } from "@chakra-ui/icons";

export const ComponentCard = ({
  applicationName,
  componentName,
  componentTitle,
}: {
  applicationName: string;
  componentName: string;
  componentTitle: string;
}) => {
  const { data, isLoading, error, refetch, remove } = useQuery(
    ["component_status", applicationName, componentName],
    () => fetchComponentStatus(applicationName, componentName)
  );

  const { colorMode } = useColorMode();

  return (
    <Flex
      shadow="lg"
      borderWidth="1px"
      minW="50vw"
      flexDir="row"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        shadow: "2xl",
        backgroundColor:
          colorMode === "dark"
            ? theme.colors.whiteAlpha[50]
            : theme.colors.blackAlpha[50],
      }}
    >
      <Box flex={1}>
        <Link
          as={RouterLink}
          to={`/${applicationName}/${componentName}`}
          _hover={{}}
        >
          <Flex
            flex={1}
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Heading fontSize="xl" m={4}>
                {componentTitle}
              </Heading>
            </Box>
            <Box>
              {!isLoading ? (
                data ? (
                  <StatusText status={data?.status} />
                ) : error ? (
                  <StatusText status="warning" />
                ) : null
              ) : (
                <CircularProgress
                  size="24px"
                  mx={4}
                  color={theme.colors.blackAlpha[700]}
                  isIndeterminate
                />
              )}
            </Box>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Button
          m={2}
          variant="link"
          justifyContent="center"
          isDisabled={isLoading}
          _hover={{ color: theme.colors.current }}
          _focus={{}}
          onClick={async () => {
            remove();
            await refetch();
          }}
        >
          <RepeatIcon />
          <Text m={2}>Reload</Text>
        </Button>
      </Box>
    </Flex>
  );
};
