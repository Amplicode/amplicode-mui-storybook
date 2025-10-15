import { Draggable } from "@amplicode/storybook-extensions";
import { StoryContext } from "@storybook/react-vite";
import { PartialStoryFn } from "storybook/internal/types";

const WITH_OWN_DND_LOGIC = ["icons--basic"];

export const withDraggable = (
  StoryFn: PartialStoryFn,
  context: StoryContext
) => {
  if (WITH_OWN_DND_LOGIC.includes(context.id)) {
    return StoryFn();
  }

  return (
    <Draggable data-proceed="asIs" data-story-id={context.id}>
      {StoryFn()}
    </Draggable>
  );
};
