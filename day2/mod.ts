function isValidIdA(id: string): boolean {
  // Only even length IDs can be invalid
  if (id.length % 2 !== 0) {
    return true;
  }

  const half = id.length / 2;
  const firstHalf = id.slice(0, half);
  const secondHalf = id.slice(half);

  return firstHalf !== secondHalf;
}

function isValidIdB(id: string): boolean {
  if (id.length < 2) {
    return true;
  }

  let isValid = true;
  const halfSize = Math.floor(id.length / 2);
  let splitChars = 1;

  while (isValid && splitChars <= halfSize) {
    isValid = id.split(id.substring(0, splitChars)).filter((s) => s).length > 0;
    splitChars++;
  }

  return isValid;
}

export function sumInvalidIds(part2: boolean = false) {
  const productIds = Deno.readTextFileSync("./day2/input").split(",");
  let invalidIdSum = 0;

  const isValidId = part2 ? isValidIdB : isValidIdA;

  for (const range of productIds) {
    const [start, end] = range.split("-").map((n) => parseInt(n));

    for (let i = start; i <= end; i++) {
      if (!isValidId(i.toString())) {
        console.log(`Invalid ID: ${i}`);
        invalidIdSum += i;
      }
    }
  }

  console.log(`Day ${part2 ? "2b" : "2a"}: Invalid IDs sum is ${invalidIdSum}`);
}
