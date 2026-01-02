import randomInteger from "./randomInteger.js";

async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export default async function fetchProjects() {
  const FETCH_DELAY_DURATION = randomInteger(300, 600);

  try {
    const response = await fetch("/data/projects.json");

    if (!response.ok) throw new Error("Network response was not ok.");
    await sleep(FETCH_DELAY_DURATION);

    const data = await response.json();

    if (!data || data.length === 0) throw new Error("failed to fetch");

    return data;
  } catch (error) {
    console.error("An error occurred", error);
    throw error;
  }
}
