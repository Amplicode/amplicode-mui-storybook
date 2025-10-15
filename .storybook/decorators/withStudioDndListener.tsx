import { useEffect } from "@storybook/preview-api";
import { PartialStoryFn } from "storybook/internal/types";

type DataSet = {
  sbDnd?: string;
  proceed: "asIs" | "generateComponent";
  storyId: string;
};

// const img = new Image(20, 20);
// img.src = "brand-logo.svg";

export const withStudioDndListener = (StoryFn: PartialStoryFn) => {
  useEffect(() => {
    window.addEventListener("dragstart", (event: DragEvent) => {
      const eventData = {
        previewDnd: {},
        itemHandles: [window.location.search.split("&")[0].split("=")[1]],
      };

      const target = event.target as HTMLElement | null;

      if (
        target &&
        "dataset" in target &&
        typeof target.dataset === "object" &&
        !Array.isArray(target.dataset) &&
        target.dataset !== null
      ) {
        let dataSet = target.dataset as DataSet;

        if (!dataSet.sbDnd) {
          const draggableParent = target.closest<HTMLDivElement>(
            "[draggable][data-sb-dnd]"
          );

          if (draggableParent) {
            dataSet = draggableParent.dataset as DataSet;
          }
        }

        eventData.previewDnd = dataSet;

        const storyId =
          dataSet.storyId || window.location.search.split("&")[0].split("=")[1];

        eventData.itemHandles = [storyId];

        const img = document.getElementById("asDragImage");

        if (img) {
          img.innerText = storyId;
          event.dataTransfer?.setDragImage(img, 10, 10);
        }
      }

      event.dataTransfer?.setData(
        "application/vnd.code.tree.amplicode.palette",
        JSON.stringify(eventData)
      );
    });
  }, []);

  return StoryFn();
};
