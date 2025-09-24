import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(mdx|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(baseConfig) {
    return {
      ...baseConfig,
      build: {
        ...(baseConfig.build ?? {}),
        rollupOptions: {
          ...(baseConfig.build?.rollupOptions ?? {}),
          onwarn(warning, defaultHandler) {
            if (
              warning.message &&
              warning.message.includes(
                'Module level directives cause errors when bundled, "use client"'
              )
            ) {
              return;
            }
            defaultHandler(warning);
          },
        },
      },
    };
  },
};
export default config;
