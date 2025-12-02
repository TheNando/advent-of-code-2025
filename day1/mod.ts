const DIAL_START = 50;

/** Return the dial position after applying the instruction */
function passwordMethodA(instructions: string[], dial: number): number {
  console.log(`The dial starts by pointing at ${dial}`);

  let zero_count = 0;
  let new_dial = dial;

  for (const instruction of instructions) {
    const direction = instruction[0];
    const distance = parseInt(instruction.slice(1));

    if (direction === "L") {
      new_dial = new_dial - distance;
    } else {
      new_dial = new_dial + distance;
    }

    while (new_dial < 0) {
      new_dial += 100;
    }

    while (new_dial > 99) {
      new_dial -= 100;
    }

    console.log(`The dial is rotated ${instruction} to point at ${new_dial}`);

    if (new_dial === 0) {
      zero_count++;
    }
  }

  return zero_count;
}

/** Return how many times the dial hits 0 after applying the instruction */
function passwordMethodB(instructions: string[], dial: number): number {
  console.log(`The dial starts by pointing at ${dial}`);

  let zero_count = 0;
  let new_dial = dial;

  for (const instruction of instructions) {
    const direction = instruction[0];
    const distance = parseInt(instruction.slice(1));

    // Full rotations
    zero_count += Math.floor(Math.abs(distance) / 100);

    const partial_rotation = distance % 100;

    if (direction === "L") {
      new_dial = new_dial - partial_rotation;
    } else {
      new_dial = new_dial + partial_rotation;
    }

    while (new_dial < 0) {
      zero_count++;
      new_dial += 100;
    }

    while (new_dial > 99) {
      zero_count++;
      new_dial -= 100;
    }

    console.log(`The dial is rotated ${instruction} to point at ${new_dial}`);
  }

  return zero_count;
}

export function getPassword(method = "a") {
  const instructions = Deno.readTextFileSync("./day1/input").split("\n");

  if (method === "a") {
    console.log(
      `Day 1a: The password is ${passwordMethodA(instructions, DIAL_START)}`
    );
  } else if (method === "b") {
    console.log(
      `Day 1b: The password is ${passwordMethodB(instructions, DIAL_START)}`
    );
  }
}
