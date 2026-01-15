import randomInteger from "./randomInteger.js";

export default async function delayedLoader() {
  const LOADER_DELAY = randomInteger(120, 240);

  await new Promise((resolve) => setTimeout(resolve, LOADER_DELAY));
  return null;
}
