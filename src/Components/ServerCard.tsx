import * as React from "react";

const ServerCard = ({
  serverTitle,
  serverName,
  componentName,
  applicationName,
}: {
  serverTitle: string;
  serverName: string;
  componentName: string;
  applicationName: string;
}) => {
  return (
    <div>
      <p>{serverTitle}</p>
      <p>{serverName}</p>
      <p>{componentName}</p>
      <p>{applicationName}</p>
    </div>
  );
};

export default ServerCard;
