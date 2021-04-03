import { StatusType } from "./types";

export const applications: {
  id: string;
  title: string;
  url: string;
  status: StatusType;
}[] = [
  {
    id: "midas",
    title: "MIDAS",
    url: "/components?app=midas",
    status: "success",
  },
  { id: "ldr", title: "LDR", url: "/components?app=ldr", status: "warning" },
  { id: "reds", title: "REDS", url: "/components?app=reds", status: "failed" },
];

export const midasComponents = [
  {
    id: "adlib",
    title: "ADLIB",
    url: "/servers?app=midas&component=adlib",
    status: "warning",
  },
  {
    id: "xplore",
    title: "xPlore",
    url: "/servers?app=midas&component=xplore",
    status: "failed",
  },
  {
    id: "webapplication",
    title: "Web Application",
    url: "/servers?app=midas&component=webapplication",
    status: "success",
  },
  {
    id: "webservice",
    title: "Web Service",
    url: "/servers?app=midas&component=webservice",
    status: "failed",
  },
  {
    id: "watermark",
    title: "Watermark",
    url: "/servers?app=midas&component=watermark",
    status: "warning",
  },
  {
    id: "openannotate",
    title: "Open Annotate",
    url: "/servers?app=midas&component=openannotate",
    status: "success",
  },
  {
    id: "da",
    title: "Documentum Administrator",
    url: "/servers?app=midas&component=da",
    status: "warning",
  },
];

export const ldrComponents = [
  {
    id: "adlib",
    title: "ADLIB",
    url: "/servers?app=midas&component=adlib",
    status: "warning",
  },
  {
    id: "xplore",
    title: "xPlore",
    url: "/servers?app=midas&component=xplore",
    status: "failed",
  },
  {
    id: "webapplication",
    title: "Web Application",
    url: "/servers?app=midas&component=webapplication",
    status: "success",
  },
  {
    id: "webservice",
    title: "Web Service",
    url: "/servers?app=midas&component=webservice",
    status: "failed",
  },
  {
    id: "watermark",
    title: "Watermark",
    url: "/servers?app=midas&component=watermark",
    status: "warning",
  },
  {
    id: "openannotate",
    title: "Open Annotate",
    url: "/servers?app=midas&component=openannotate",
    status: "success",
  },
  {
    id: "da",
    title: "Documentum Administrator",
    url: "/servers?app=midas&component=da",
    status: "warning",
  },
];

export const redsComponents = [
  {
    id: "adlib",
    title: "ADLIB",
    url: "/servers?app=midas&component=adlib",
    status: "warning",
  },
  {
    id: "xplore",
    title: "xPlore",
    url: "/servers?app=midas&component=xplore",
    status: "failed",
  },
  {
    id: "webapplication",
    title: "Web Application",
    url: "/servers?app=midas&component=webapplication",
    status: "success",
  },
  {
    id: "webservice",
    title: "Web Service",
    url: "/servers?app=midas&component=webservice",
    status: "failed",
  },
  {
    id: "watermark",
    title: "Watermark",
    url: "/servers?app=midas&component=watermark",
    status: "warning",
  },
  {
    id: "openannotate",
    title: "Open Annotate",
    url: "/servers?app=midas&component=openannotate",
    status: "success",
  },
  {
    id: "da",
    title: "Documentum Administrator",
    url: "/servers?app=midas&component=da",
    status: "warning",
  },
];

export const breadcrumbConstants = {
  midas: {
    id: "midas",
    title: "MIDAS",
    url: "/components?app=midas",
    components: {
      adlib: {
        id: "adlib",
        title: "ADLIB",
        url: "/servers?app=midas&component=adlib",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      xplore: {
        id: "xplore",
        title: "xPlore",
        url: "/servers?app=midas&component=xplore",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webservice: {
        id: "webservice",
        title: "Web Service",
        url: "/servers?app=midas&component=webservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webapplication: {
        id: "webapplication",
        title: "Web Application",
        url: "/servers?app=midas&component=webapplication",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      openannotate: {
        id: "openannotate",
        title: "Open Annotate",
        url: "/servers?app=midas&component=openannotate",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      watermarkingservice: {
        id: "watermarkingservice",
        title: "Watermarking Service",
        url: "/servers?app=midas&component=watermarkingservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      da: {
        id: "da",
        title: "Documentum Administrator",
        url: "/servers?app=midas&component=da",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
    },
  },
  ldr: {
    id: "ldr",
    title: "LDR",
    url: "/components?app=ldr",
    components: {
      adlib: {
        id: "adlib",
        title: "ADLIB",
        url: "/servers?app=ldr&component=adlib",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      xplore: {
        id: "xplore",
        title: "xPlore",
        url: "/servers?app=ldr&component=xplore",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webservice: {
        id: "webservice",
        title: "Web Service",
        url: "/servers?app=ldr&component=webservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webapplication: {
        id: "webapplication",
        title: "Web Application",
        url: "/servers?app=ldr&component=webapplication",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      openannotate: {
        id: "openannotate",
        title: "Open Annotate",
        url: "/servers?app=ldr&component=openannotate",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      watermarkingservice: {
        id: "watermarkingservice",
        title: "Watermarking Service",
        url: "/servers?app=ldr&component=watermarkingservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      da: {
        id: "da",
        title: "Documentum Administrator",
        url: "/servers?app=ldr&component=da",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
    },
  },
  reds: {
    id: "reds",
    title: "REDS",
    url: "/components?app=reds",
    components: {
      adlib: {
        id: "adlib",
        title: "ADLIB",
        url: "/servers?app=reds&component=adlib",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      xplore: {
        id: "xplore",
        title: "xPlore",
        url: "/servers?app=reds&component=xplore",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webservice: {
        id: "webservice",
        title: "Web Service",
        url: "/servers?app=reds&component=webservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      webapplication: {
        id: "webapplication",
        title: "Web Application",
        url: "/servers?app=reds&component=webapplication",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      openannotate: {
        id: "openannotate",
        title: "Open Annotate",
        url: "/servers?app=reds&component=openannotate",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      watermarkingservice: {
        id: "watermarkingservice",
        title: "Watermarking Service",
        url: "/servers?app=reds&component=watermarkingservice",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
      da: {
        id: "da",
        title: "Documentum Administrator",
        url: "/servers?app=reds&component=da",
        servers: {
          random_server_1: {
            id: "random_server_1",
            title: "Random Server 1",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_2: {
            id: "random_server_2",
            title: "Random Server 2",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_3: {
            id: "random_server_3",
            title: "Random Server 3",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_4: {
            id: "random_server_4",
            title: "Random Server 4",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_5: {
            id: "random_server_5",
            title: "Random Server 5",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_6: {
            id: "random_server_6",
            title: "Random Server 6",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_7: {
            id: "random_server_7",
            title: "Random Server 7",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_8: {
            id: "random_server_8",
            title: "Random Server 8",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
          random_server_9: {
            id: "random_server_9",
            title: "Random Server 9",
            services: {
              service_1: {
                id: "random_service_1",
                title: "Random Service 1",
              },
              service_2: {
                id: "random_service_2",
                title: "Random Service 2",
              },
              service_3: {
                id: "random_service_3",
                title: "Random Service 3",
              },
              service_4: {
                id: "random_service_4",
                title: "Random Service 4",
              },
            },
          },
        },
      },
    },
  },
};
