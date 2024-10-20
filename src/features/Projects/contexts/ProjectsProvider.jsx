"use client";
import React, { createContext, useContext, useState } from "react";
import { categories, defaultCategory, defaultProject } from "../data/projects";

const ProjectsContext = createContext();

export default function ProjectsProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedProjectTitle, setSelectedProjectTitle] =
    useState(defaultProject);

  function _setSelectedCategory(categoryName) {
    setSelectedCategory(categoryName);
    const selectedCategory = categories.find(
      (category) => category.name === categoryName
    );
    if (selectedCategory.projects && selectedCategory.projects.length > 0) {
      setSelectedProjectTitle(selectedCategory.projects[0].title);
    }
  }

  return (
    <ProjectsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory: _setSelectedCategory,
        selectedProjectTitle,
        setSelectedProjectTitle,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}
