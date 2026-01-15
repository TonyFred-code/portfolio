export default async function fetchProjects() {
  try {
    const response = await fetch("/data/projects.json");

    if (!response.ok) throw new Error("Network response was not ok.");

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0)
      throw new Error("Invalid data fetched.");

    return data;
  } catch (error) {
    console.error("Failed to fetch projects", error);
    throw error;
  }
}
