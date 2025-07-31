import { Draggable } from "@amplicode/storybook-extensions";
import type { Renderer, StoryContext } from "@storybook/types";

const WITH_OWN_DND_LOGIC = ["icons--basic"];

export const withDraggable = (
  StoryFn: any,
  context: StoryContext<Renderer>
) => {
  console.error('context', context)
  if (WITH_OWN_DND_LOGIC.includes(context.id)) {
    return StoryFn();
  }

  return <Draggable data-proceed="asIs">{StoryFn()}</Draggable>;
};
