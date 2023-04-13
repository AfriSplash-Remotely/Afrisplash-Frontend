export let counter = 0;

export function generateUniqueId(): number {
  counter += 1;
  return Date.now() + counter;
}
