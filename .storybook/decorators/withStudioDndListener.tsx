import { useEffect } from "@storybook/preview-api";
import { PartialStoryFn } from "storybook/internal/types";

export const withStudioDndListener = (StoryFn: PartialStoryFn) => {
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
            previewDnd: event.target.dataset,
            itemHandles: [window.location.search.split("&")[0].split("=")[1]],
          })
        );
      }
    });
  }, []);

  return StoryFn();
};
