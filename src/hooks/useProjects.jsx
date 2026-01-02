import { useEffect, useState } from "react";
import fetchProjects from "../helpers/fetchProjects.js";

export default function useProjects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { loading, projects, error };
}
