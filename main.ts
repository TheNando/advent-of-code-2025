import { getPassword } from "./day1.ts";

export function main(day: string = "1b") {
  if (day === "1a") {
    getPassword("a");
  }

  if (day === "1b") {
    getPassword("b");
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main(Deno.args[0]);
}
