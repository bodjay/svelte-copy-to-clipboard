import { render } from "@testing-library/svelte";

import Comp from "../index.svelte";

test("shows proper heading when rendered", () => {
  const { debug } = render(Comp);
  debug();
});
