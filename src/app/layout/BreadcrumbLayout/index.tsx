import * as React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BreadcrumbLayout = ({
  breadcrumbData,
}: {
  breadcrumbData: { id: string; url: string; title: string }[];
}) => {
  return (
    <Breadcrumb
      spacing="4px"
      fontSize={14}
      mx={16}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      {breadcrumbData.map((item, index) => (
        <BreadcrumbItem
          key={item.id}
          isCurrentPage={breadcrumbData.length - 1 === index}
        >
          <BreadcrumbLink as={Link} to={item.url}>
            {item.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbLayout;
