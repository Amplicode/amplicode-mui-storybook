import type {
  Renderer,
  StoryContext,
} from "@storybook/types";

import { useEffect } from "@storybook/preview-api";

export const withGlobals = (StoryFn: any, context: StoryContext<Renderer>) => {
  useEffect(() => {
    const scroller = global.document.querySelector("[data-virtuoso-scroller]");
    window.addEventListener("dragstart", (event: DragEvent) => {
      if (event.target && "dataset" in event.target) {
        event.dataTransfer?.setData('application/vnd.code.tree.amplicode.palette', 'zxc')
      }
    });
  }, []);

  return StoryFn();
};
