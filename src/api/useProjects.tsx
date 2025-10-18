import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  slug: string;
  category: string;
  content: { image: string; description: string };
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://www.examples.com/api/projects") // your API endpoint
      .then((res) => res.json())
      .then((data) => {
        // Adjust depending on your API shape
        setProjects(data?.[0]?.projects ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
}
