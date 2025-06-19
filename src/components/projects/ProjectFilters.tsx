
import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  filter: string;
  subcategoryFilter: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  getSubcategories: (category: string) => { id: string; label: string; }[];
}

const ProjectFilters = ({ 
  filter, 
  subcategoryFilter, 
  onCategoryChange, 
  onSubcategoryChange, 
  getSubcategories 
}: ProjectFiltersProps) => {
  return (
    <section className="py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main category filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {[
            { id: "all", label: "All Projects" },
            { id: "commercial", label: "Commercial Projects" },
            { id: "residential", label: "Residential Projects" },
            { id: "fitout", label: "Fit-Out Projects" }
          ].map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={filter === category.id ? "bg-[#3b62c0]" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Subcategory filters */}
        {filter !== "all" && filter !== "residential" && getSubcategories(filter).length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={subcategoryFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => onSubcategoryChange("all")}
              className={subcategoryFilter === "all" ? "bg-[#3b62c0]" : ""}
            >
              All {filter === "commercial" ? "Commercial" : "Fit-Out"}
            </Button>
            {getSubcategories(filter).map((subcategory) => (
              <Button
                key={subcategory.id}
                variant={subcategoryFilter === subcategory.id ? "default" : "outline"}
                size="sm"
                onClick={() => onSubcategoryChange(subcategory.id)}
                className={subcategoryFilter === subcategory.id ? "bg-[#3b62c0]" : ""}
              >
                {subcategory.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilters;
