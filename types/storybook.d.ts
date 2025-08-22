// import "@storybook/react";

// type NpmDep = {
//   name: string;
//   version?: string;
//   isDev?: boolean;
// };

// type StoryKind = 'template' | 'remote-template' | 'completion';

// interface BaseParams {
//   kind?: StoryKind;
//   npmDeps?: NpmDep[];
// }

// interface TemplateParams extends BaseParams {
//   kind: 'template';
// }

// interface RemoteTemplateParams extends BaseParams {
//   kind?: 'remote-template';
//   repo?: string;
//   storeLink?: string;
//   projectRootFolder?: string;
//   include?: string[];
//   exclude?: string[]
// }

// interface CompletionParams extends BaseParams {
//   kind?: 'completion';
//   keywords?: string[];
// }

// interface ComponentNameParams extends BaseParams {
//   kind?: 'multiple';
// }

// type StudioMetaParams =
//   | TemplateParams
//   | RemoteTemplateParams
//   | CompletionParams
//   | ComponentNameParams

// declare module "@storybook/react" {
//   interface Parameters extends ExtendedParams {
//     studioMeta?: StudioMetaParams;
//   }
// }