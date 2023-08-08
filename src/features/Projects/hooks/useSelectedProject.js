import { useEffect, useState } from "react";
import { useProjects } from "../contexts/ProjectsProvider";
import { categories } from "../data/projects";

export function useSelectedProject() {
  const { selectedCategory, selectedProjectTitle } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedCategory && selectedProjectTitle) {
      setSelectedProject(
        categories
          .find((category) => category.name === selectedCategory)
          .projects?.find((project) => project.title === selectedProjectTitle)
      );
    }
  }, [selectedCategory, selectedProjectTitle]);
  return { selectedProject };
}
