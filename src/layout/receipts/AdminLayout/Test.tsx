import { replaceOnGenerate, topLevel } from "@amplicode/storybook-extensions"

export const Test = () => {
  const test = topLevel("test")
  return <div>{replaceOnGenerate("Test", "Test1")}</div>
}