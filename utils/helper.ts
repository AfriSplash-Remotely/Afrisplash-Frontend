export let counter = 0;

export function generateUniqueId() {
  counter += 1;
  return Date.now() + counter;
}
