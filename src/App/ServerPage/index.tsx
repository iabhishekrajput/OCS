import React from "react";
import { useParams } from "react-router";

const ServerPage = () => {
  const { application, component } = useParams<{
    application: string;
    component: string;
  }>();
  return (
    <div>
      Server Page - Application: {application}, Component: {component}
    </div>
  );
};

export default ServerPage;
