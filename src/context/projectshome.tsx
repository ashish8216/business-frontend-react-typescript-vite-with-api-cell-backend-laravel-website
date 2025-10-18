import { useState } from "react";
import { useProjects } from "../api/useProjects";

export default function ProjectsHome() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { projects, loading, error } = useProjects();

  if (loading) return <p className="text-center py-10">Loading projects...</p>;
  if (error) return <p className="text-center py-10">Error: {error}</p>;

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-[#e6e6e6]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2>Our Latest Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 font-medium rounded transition 
                ${
                  activeCategory === category
                    ? "bg-red-400 "
                    : "text-gray-700  hover:bg-red-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <img
              key={project.id}
              src={project.content.image}
              alt={`Project in ${project.category}`}
              aria-hidden="true"
              loading="lazy"
              className="w-full h-auto rounded shadow-sm hover:shadow-md transition-shadow"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
