
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectHero from "@/components/projects/ProjectHero";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [subcategoryFilter, setSubcategoryFilter] = useState("all");

  // Filter out hidden projects
  const visibleProjects = projectsData.filter(project => 
    !["The Bond – Level 4", "The Bond – Suite 4.10", "Randwick", "Cronulla"].includes(project.title)
  );

  const filteredProjects = visibleProjects.filter(project => {
    if (filter === "all") return true;
    if (filter !== project.category) return false;
    if (subcategoryFilter === "all") return true;
    return project.subcategory === subcategoryFilter;
  });

  const getSubcategories = (category: string) => {
    if (category === "commercial") {
      return [
        { id: "childcare-education", label: "Child Care & Education" },
        { id: "industrial-commercial", label: "Industrial & Commercial Upgrades" }
      ];
    }
    if (category === "fitout") {
      return [
        { id: "commercial-offices", label: "Commercial Offices" },
        { id: "retail", label: "Retail Fit-Outs" },
        { id: "medical", label: "Medical Fit-Outs" },
        { id: "restaurant", label: "Restaurant Fit-Outs" }
      ];
    }
    return [];
  };

  const handleCategoryChange = (newCategory: string) => {
    setFilter(newCategory);
    setSubcategoryFilter("all");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-28 pb-20">
        <ProjectHero />
        <ProjectFilters 
          filter={filter}
          subcategoryFilter={subcategoryFilter}
          onCategoryChange={handleCategoryChange}
          onSubcategoryChange={setSubcategoryFilter}
          getSubcategories={getSubcategories}
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
