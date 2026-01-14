import fetchProjects from "../helpers/fetchProjects.js";

export default async function projectsLoader() {
  return fetchProjects();
}
