import { getPassword } from "./day1/mod.ts";
import { sumInvalidIds } from "./day2/mod.ts";

export function main(day: string = "2b") {
  if (day === "1a") {
    getPassword("a");
  } else if (day === "1b") {
    getPassword("b");
  } else if (day === "2a") {
    sumInvalidIds();
  } else if (day === "2b") {
    sumInvalidIds(true);
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main(Deno.args[0]);
}
