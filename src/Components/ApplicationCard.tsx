import * as React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  theme,
  useColorMode,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";

import { fetchApplicationStatus } from "../FetchData";
import { StatusText } from "./StatusText";
import { AxiosError } from "axios";
import { RepeatIcon } from "@chakra-ui/icons";

export const ApplicationCard = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
  const { colorMode } = useColorMode();
  const { data, status, error, refetch, remove } = useQuery(
    ["application_status", name],
    () => fetchApplicationStatus(name)
  );

  return (
    <Box shadow="lg" borderWidth="1px" minW="24vw">
      <Box
        backgroundColor={
          colorMode === "light"
            ? theme.colors.blackAlpha[200]
            : theme.colors.whiteAlpha[200]
        }
      >
        <Button
          m={2}
          variant="link"
          justifyContent="center"
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
      <Divider />
      <Link as={RouterLink} to={`/${name}`} _hover={{}} _focus={{}}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="16vh"
          _hover={{
            backgroundColor:
              colorMode === "light"
                ? theme.colors.blackAlpha[50]
                : theme.colors.whiteAlpha[50],
            textDecoration: "none",
            shadow: "xl",
          }}
        >
          <Heading fontSize="2xl" m={2}>
            {title}
          </Heading>
          {status === "success" && data ? (
            <StatusText status={data.status} message={data.message} />
          ) : status === "error" && error ? (
            <StatusText
              status="warning"
              message={(error as AxiosError).message}
            />
          ) : (
            <CircularProgress
              size="24px"
              color={theme.colors.blackAlpha[700]}
              isIndeterminate
            />
          )}
        </Flex>
      </Link>
    </Box>
  );
};
