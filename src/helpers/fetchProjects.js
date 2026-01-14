export default async function fetchProjects() {
  try {
    const response = await fetch("/data/projects.json");

    if (!response.ok) throw new Error("Network response was not ok.");

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0)
      throw new Error("failed to fetch");

    return data;
  } catch (error) {
    console.error("An error occurred", error);
    throw error;
  }
}
