import type { Renderer, StoryContext } from "@storybook/types";

import { useEffect } from "@storybook/preview-api";

export const withGlobals = (StoryFn: any, context: StoryContext<Renderer>) => {
  useEffect(() => {
    window.addEventListener("dragstart", (event: DragEvent) => {
      if (
        event.target &&
        "dataset" in event.target &&
        typeof event.target.dataset === "object" &&
        !Array.isArray(event.target.dataset) &&
        event.target.dataset !== null &&
        "dataTransfer" in event &&
        event.dataTransfer
      ) {
        event.dataTransfer.setData(
          "application/vnd.code.tree.amplicode.palette",
          JSON.stringify({
            amplicodeDnd: event.target.dataset,
            itemHandles: [window.location.search.split("&")[0].split("=")[1]],
          })
        );
      }
    });
  }, []);

  return StoryFn();
};
