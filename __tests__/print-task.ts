import { mockSetup } from "./task";
import useTask from "../src";
import { printTask } from "../src/utils";

describe("printTask()", () => {
  it("prints to the console", async () => {
    await mockSetup(() => {
      const spy = jest.spyOn(console, "table");
      const task = useTask(function*() {
        return "foo";
      });
      task.perform();
      printTask(task);
      expect(spy).toHaveBeenCalled();
    });
  });
});