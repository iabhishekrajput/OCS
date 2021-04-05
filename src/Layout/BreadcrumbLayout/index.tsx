import * as React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import { BreadcrumbType } from "../../Types";

const BreadcrumbLayout = () => {
  const breadcrumbs = useSelector<RootState>(
    (state) => state.breadcrumb.breadcrumbs
  ) as BreadcrumbType[];

  return (
    <Breadcrumb
      spacing="4px"
      fontSize={14}
      mx={16}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      {breadcrumbs.map((item, index) => (
        <BreadcrumbItem
          key={item.name}
          isCurrentPage={breadcrumbs.length - 1 === index}
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
