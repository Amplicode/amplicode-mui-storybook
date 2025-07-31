import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Store/Templates",
  parameters: {
    layout: "fullscreen",
    studioMeta: {
      kind: "remote-template",
    },
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const iframeStyle = {
  display: "flex",
  border: "none",
  width: "100%",
  height: "100vh",
};

type IFrameProps = {
  src: string;
};

const port = 8080;
const base = "/proxy/mui";
const proxy = `http://localhost:${port}${base}`;
const external = "https://mui.com";

const IFrame = ({ src }: IFrameProps) => {
  const origin = proxy;
  const storeSrc = src.startsWith("http") ? src : `${origin}${src}`;
  return <iframe src={storeSrc} style={iframeStyle}></iframe>;
};

export const MinimalClientAndAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/minimal-dashboard/`} />;
  },
  parameters: {
    studioMeta: {
      npmDeps: [
        { name: "@storybook/react-vite" },
        { name: "storybook" },
        { name: "@amplicode/amplicode-mui-storybook" },
        { name: "@amplicode/storybook-extensions" },
      ],
      kind: "remote-template",
      repo: "https://github.com/minimal-ui-kit/material-kit-react.git",
      storeLink: "https://mui.com/store/items/minimal-dashboard-free/",
      include: ["src", "public"],
    },
  },
};

export const ModernizeNextJsFreeAdminTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame src={`/store/items/modernize-next-js-free-admin-template/`} />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      repo: "https://github.com/minimal-ui-kit/material-kit-react.git",
      storeLink: "https://mui.com/store/items/modernize-next-js-free-admin-template/",
      projectRootFolder: "package",
    },
  },
};

export const SaasAbleFreeMultipurposeUiKitAndDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame
        src={`/store/items/saasable-free-multipurpose-ui-kit-dashboard/`}
      />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      repo: "https://github.com/minimal-ui-kit/material-kit-react.git",
      storeLink: "https://mui.com/store/items/saasable-free-multipurpose-ui-kit-dashboard/",
      projectRootFolder: "admin",
    },
  },
};

export const TheFrontMultipurposeTemplateAndUIKitDeviasKitProClientAndAdminDashboard: Story =
  {
    render: ({ ...props }) => {
      return <IFrame src={`/store/items/the-front-landing-page/`} />;
    },
    parameters: {
      studioMeta: {
        kind: "remote-template",
        storeLink: "https://mui.com/store/items/the-front-landing-page/",
      },
    },
  };

export const MiraProReactMaterialUIAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`https://material-kit-pro-react.devias.io/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://material-kit-pro-react.devias.io/",
    },
  },
};

export const Paperbase: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/paperbase/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/paperbase/",
    },
  },
};

export const DeviasKitProClientAndAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/devias-kit-pro/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/devias-kit-pro/",
    },
  },
};

export const MantisReactMaterialUIDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame src={`/store/items/mantis-react-admin-dashboard-template/`} />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/mantis-react-admin-dashboard-template/",
    },
  },
};

export const BerryReactMaterialUIDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/berry-react-material-admin/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/berry-react-material-admin/",
    },
  },
};

export const ZoneMultipurposeLandingPageUIKit: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/zone-landing-page/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/zone-landing-page/",
    },
  },
};

export const BazaarProMultipurposeNextJsEcommerceTemplate: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/bazar-pro-react-ecommerce-template/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/bazar-pro-react-ecommerce-template/",
    },
  },
};

export const UifortReactClientAndAdminDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame src={`/store/items/uifort-react-admin-dashboard-template/`} />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/uifort-react-admin-dashboard-template/",
    },
  },
};

export const UIFoundationsKitSaaSDashboardTemplateDeviasKitProClientAndAdminDashboard: Story =
  {
    render: ({ ...props }) => {
      return (
        <IFrame
          src={`/store/items/ui-foundations-kit-saas-admin-dashboard-template/`}
        />
      );
    },
    parameters: {
      studioMeta: {
        kind: "remote-template",
        storeLink:
          "/store/items/ui-foundations-kit-saas-admin-dashboard-template/",
      },
    },
  };

export const AuroraAdminDashboardAndWebAppTemplate: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/aurora/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/aurora/",
    },
  },
};

export const WebbeeMultipurposeLandingPageUiKit: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/webbee-landing-page/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/webbee-landing-page/",
    },
  },
};

export const UKOClientAndAdminDashboardNextJsAndVite: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/uko-client-admin-dashboard/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/uko-client-admin-dashboard/",
    },
  },
};

export const SaasAbleMultipurposeUiKitAndDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame
        src={`/store/items/saasable-multipurpose-ui-kit-and-dashboard/`}
      />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/saasable-multipurpose-ui-kit-and-dashboard/",
    },
  },
};

export const LotruJoyUiDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/lotru/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/lotru/",
    },
  },
};

export const MaterioNextJsAdminTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame src={`/store/items/materio-mui-react-nextjs-admin-template/`} />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/materio-mui-react-nextjs-admin-template/",
    },
  },
};

export const ModernizeReactAndNextJsAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/modernize-next-js-admin-template/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/modernize-next-js-admin-template/",
    },
  },
};

export const SoftUiProReactAdminDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/soft-ui-pro-dashboard/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/soft-ui-pro-dashboard/",
    },
  },
};

export const OtisAdminProMaterialDashboardForReact: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame src={`/store/items/otis-admin-pro-material-dashboard-react/`} />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/otis-admin-pro-material-dashboard-react/",
    },
  },
};

export const OtisKitProMaterialKitForReact: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/otis-kit-pro-material-kit-react/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/otis-kit-pro-material-kit-react/",
    },
  },
};

export const DeviasKitClientAndAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/devias-kit/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/devias-kit/",
    },
  },
};

export const MantisFreeReactAdminDashboardTemplate: Story = {
  render: ({ ...props }) => {
    return (
      <IFrame
        src={`/store/items/mantis-free-react-admin-dashboard-template/`}
      />
    );
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/mantis-free-react-admin-dashboard-template/",
    },
  },
};

export const BerryFreeReactMaterialAdminDashboard: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/berry-react-material-admin-free/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/berry-react-material-admin-free/",
    },
  },
};

export const Onepirate: Story = {
  render: ({ ...props }) => {
    return <IFrame src={`/store/items/onepirate/`} />;
  },
  parameters: {
    studioMeta: {
      kind: "remote-template",
      storeLink: "https://mui.com/store/items/onepirate/",
    },
  },
};
