import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample project data - would be replaced with actual project data
const projectsData = [
  {
    id: 1,
    title: "Toongabbie Townhouses",
    category: "residential",
    description: "Development of six modern townhouses with premium finishes and sustainable features.",
    challenge: "Limited site access and strict local council requirements.",
    solution: "Careful staging and proactive council engagement throughout the project.",
    completion: "Completed 2 weeks ahead of schedule and 3% under budget.",
    tags: ["New Build", "Multi-Dwelling", "Residential"]
  },
  {
    id: 2,
    title: "Sunboost Office Headquarters",
    category: "commercial",
    description: "Complete office fit-out for a growing renewable energy company.",
    challenge: "Creating a functional, inspiring workspace while maintaining business operations.",
    solution: "Phased implementation with after-hours critical work to minimize disruption.",
    completion: "Zero downtime for the client's operations throughout the project.",
    tags: ["Office Fit-out", "Commercial", "Sustainable Design"]
  },
  {
    id: 3,
    title: "St Lukes School Extension",
    category: "commercial",
    description: "Design and construction of new classrooms and administration facilities.",
    challenge: "Working around school term times and ensuring student safety.",
    solution: "Careful scheduling with major works during holiday periods and strict site security.",
    completion: "Delivered on time for the start of the new school year.",
    tags: ["Education", "Commercial", "New Build"]
  },
  {
    id: 4,
    title: "Waterfront Apartment Complex Remediation",
    category: "remediation",
    description: "Major water damage and structural repair to a waterfront apartment building.",
    challenge: "Extensive water damage affecting multiple units and common areas.",
    solution: "Comprehensive remediation plan with staged repairs to minimize resident disruption.",
    completion: "Building integrity restored with improved waterproofing systems.",
    tags: ["Structural Repair", "Water Damage", "Remediation"]
  },
  {
    id: 5,
    title: "Heritage Home Restoration",
    category: "residential",
    description: "Careful restoration of a heritage-listed Federation home with modern additions.",
    challenge: "Balancing heritage requirements with modern living needs.",
    solution: "Close collaboration with heritage consultants and sympathetic design approach.",
    completion: "Award-winning restoration that preserved character while adding functionality.",
    tags: ["Heritage", "Renovation", "Residential"]
  },
  {
    id: 6,
    title: "ANSTO Facility Upgrade",
    category: "remediation",
    description: "Specialized facility upgrade with strict compliance requirements.",
    challenge: "Working within an operational scientific environment with zero-tolerance for contamination.",
    solution: "Detailed containment protocols and specialized training for all on-site personnel.",
    completion: "Successful upgrade with no disruption to sensitive research activities.",
    tags: ["Specialized", "Compliance", "Government"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {/* Projects Hero */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Showcasing our expertise across residential, commercial and remediation projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { id: "all", label: "All Projects" },
                { id: "residential", label: "Residential" },
                { id: "commercial", label: "Commercial" },
                { id: "remediation", label: "Remediation" }
              ].map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className={filter === category.id ? "bg-[#3b62c0]" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index % 3 * 0.2 }}
                >
                  <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="bg-gray-200 aspect-video flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Photo of {project.title}]
                      </p>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900">Challenge:</h4>
                          <p className="text-gray-600">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Solution:</h4>
                          <p className="text-gray-600">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Result:</h4>
                          <p className="text-gray-600">{project.completion}</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-[#3b62c0] text-[#3b62c0] hover:bg-[#3b62c0] hover:text-white"
                      >
                        View Project Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
