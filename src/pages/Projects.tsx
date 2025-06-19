import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Updated project data with new categories
const projectsData = [
  // Commercial Projects - Child Care & Education
  {
    id: 1,
    title: "Doonside Child Care",
    category: "commercial",
    subcategory: "childcare-education",
    description: "Modern child care facility designed for safety and educational excellence.",
    challenge: "Creating a safe, engaging environment while meeting strict childcare regulations.",
    solution: "Innovative design with secure play areas and natural lighting throughout.",
    completion: "Delivered a state-of-the-art facility that exceeded safety standards.",
    tags: ["Childcare", "Commercial", "Educational"],
    image: "/lovable-uploads/1697af16-76eb-428e-8c43-92650d913eef.png"
  },
  {
    id: 2,
    title: "Little Zac's, Blakehurst",
    category: "commercial",
    subcategory: "childcare-education",
    description: "Complete construction of a new Little Zacs childcare center.",
    challenge: "Tight construction timeline to meet enrollment deadlines.",
    solution: "Efficient project management with parallel construction phases.",
    completion: "Opened on schedule with full enrollment capacity.",
    tags: ["Childcare", "Commercial", "New Build"],
    image: "/lovable-uploads/77ba38ef-d2b7-48ad-b84b-0a98bf67f8dc.png"
  },
  {
    id: 3,
    title: "South Creek Public School Upgrade",
    category: "commercial",
    subcategory: "childcare-education",
    description: "Comprehensive upgrade of educational facilities and infrastructure.",
    challenge: "Working around school operations and student safety.",
    solution: "Careful scheduling with major works during holiday periods.",
    completion: "Modernized facilities ready for new term with improved learning spaces.",
    tags: ["Education", "Commercial", "Upgrade"],
    image: "/lovable-uploads/097b40a6-0d14-40b8-aa1a-473ce09409b6.png"
  },

  // Commercial Projects - Industrial & Commercial Upgrades
  {
    id: 4,
    title: "Jilliby Warehouse",
    category: "commercial",
    subcategory: "industrial-commercial",
    description: "Large-scale warehouse facility for logistics and distribution.",
    challenge: "Managing complex logistics during construction in operational area.",
    solution: "Phased construction approach to minimize business disruption.",
    completion: "Increased storage capacity by 300% with minimal downtime.",
    tags: ["Warehouse", "Commercial", "Logistics"],
    image: "/lovable-uploads/53798310-14a6-414b-beed-744113cec38d.png"
  },
  {
    id: 5,
    title: "Lindt Factory Upgrade",
    category: "commercial",
    subcategory: "industrial-commercial",
    description: "Specialised facility upgrade for chocolate manufacturing operations.",
    challenge: "Maintaining food safety standards during construction.",
    solution: "Strict contamination protocols and specialised equipment installation.",
    completion: "Enhanced production capacity while maintaining quality standards.",
    tags: ["Manufacturing", "Commercial", "Food Safety"],
    image: "/lovable-uploads/06a98571-87bb-4d7d-808e-bf1dbaa476fe.png"
  },
  {
    id: 6,
    title: "Metro Tempe Service Station Upgrade",
    category: "commercial",
    subcategory: "industrial-commercial",
    description: "Complete modernization of service station facilities and forecourt.",
    challenge: "Maintaining fuel sales during construction period.",
    solution: "Strategic phasing to keep essential services operational.",
    completion: "Modern facility with improved customer experience and safety.",
    tags: ["Retail", "Commercial", "Upgrade"],
    image: "/lovable-uploads/71596cb7-a2d3-49b5-8864-e3f4a2e42098.png"
  },
  
  // Residential Projects
  {
    id: 7,
    title: "Kings Park",
    category: "residential",
    subcategory: "residential",
    description: "Luxury family home with modern amenities and premium finishes.",
    challenge: "Balancing luxury features within budget constraints.",
    solution: "Strategic material selection and efficient construction methods.",
    completion: "Stunning family home delivered on time and within budget.",
    tags: ["Luxury", "Residential", "Family Home"],
    image: "/lovable-uploads/e54b552f-9118-4bf3-adf4-377fe79c87f7.png"
  },
  {
    id: 8,
    title: "Kings Park 2",
    category: "residential",
    subcategory: "residential",
    description: "Contemporary home design with sustainable building practices.",
    challenge: "Incorporating eco-friendly features while maintaining aesthetics.",
    solution: "Innovative green building techniques and sustainable materials.",
    completion: "Energy-efficient home with reduced environmental impact.",
    tags: ["Sustainable", "Residential", "Contemporary"],
    image: "/lovable-uploads/065296e2-61ab-4bea-ad01-def34a747163.png"
  },
  {
    id: 9,
    title: "Kellyville",
    category: "residential",
    subcategory: "residential",
    description: "Modern family home with open-plan living and outdoor entertainment areas.",
    challenge: "Maximizing space on a compact suburban lot.",
    solution: "Clever design solutions and multi-functional spaces.",
    completion: "Spacious family home that maximizes every square meter.",
    tags: ["Family Home", "Residential", "Space Optimization"],
    image: "/lovable-uploads/7685dcfe-e04a-4934-a4ef-089c7dd9d0b7.png"
  },
  {
    id: 10,
    title: "Riverstone",
    category: "residential",
    subcategory: "residential",
    description: "Executive home with premium finishes and smart home technology.",
    challenge: "Integrating advanced technology with traditional construction.",
    solution: "Careful planning and coordination with technology specialists.",
    completion: "Future-ready home with seamless technology integration.",
    tags: ["Executive", "Residential", "Smart Home"],
    image: "/lovable-uploads/b26da777-edb0-42fd-937a-cf0d365fff63.png"
  },

  // Fit-out Projects - Commercial Offices
  {
    id: 12,
    title: "Arndell Park",
    category: "fitout",
    subcategory: "commercial-offices",
    description: "Complete commercial office fit-out with modern workplace design.",
    challenge: "Creating flexible workspace within existing building constraints.",
    solution: "Innovative space planning and modular design elements.",
    completion: "Dynamic workspace that adapts to changing business needs.",
    tags: ["Office", "Fit-out", "Workspace Design"],
    image: "/lovable-uploads/7ec25450-d980-4a58-8078-134f8a170185.png"
  },
  {
    id: 13,
    title: "Eastern Creek",
    category: "fitout",
    subcategory: "commercial-offices",
    description: "Industrial facility fit-out for manufacturing operations.",
    challenge: "Meeting specialised equipment requirements and safety standards.",
    solution: "Custom solutions for equipment installation and workflow optimization.",
    completion: "Optimized facility layout improving operational efficiency.",
    tags: ["Industrial", "Fit-out", "Manufacturing"],
    image: "/lovable-uploads/cdac30f9-f399-4c2b-98b7-0e75a421757b.png"
  },
  {
    id: 14,
    title: "The Bond – Level 3",
    category: "fitout",
    subcategory: "commercial-offices",
    description: "Executive office suites with premium finishes and private amenities.",
    challenge: "Creating privacy while maintaining connection to building amenities.",
    solution: "Sophisticated layout with discrete access and luxury finishes.",
    completion: "Executive workspace setting new standards for business luxury.",
    tags: ["Executive", "Fit-out", "Luxury"]
  },
  {
    id: 15,
    title: "The Bond – Level 4",
    category: "fitout",
    subcategory: "commercial-offices",
    description: "Modern office space with collaborative work areas and breakout zones.",
    challenge: "Maximizing natural light and creating open feel.",
    solution: "Strategic use of glass partitions and open-plan design.",
    completion: "Bright, airy workspace promoting collaboration and productivity.",
    tags: ["Modern", "Fit-out", "Collaborative"]
  },
  {
    id: 16,
    title: "The Bond – Level 6",
    category: "fitout",
    subcategory: "commercial-offices",
    description: "Premium office fit-out in prestigious commercial building.",
    challenge: "Working within sustainable building constraints and regulations.",
    solution: "Sympathetic design approach respecting building character.",
    completion: "Elegant office space that honours building energy efficiency.",
    tags: ["Premium", "Fit-out", "Heritage"]
  },

  // Fit-out Projects - Retail Fit-Outs
  {
    id: 19,
    title: "Randwick",
    category: "fitout",
    subcategory: "retail",
    description: "Contemporary retail space designed to enhance customer experience.",
    challenge: "Creating attractive retail environment within tight timeline.",
    solution: "Efficient project delivery with focus on customer flow and display.",
    completion: "Engaging retail space that drives customer engagement and sales.",
    tags: ["Retail", "Fit-out", "Customer Experience"]
  },
  {
    id: 20,
    title: "Cronulla",
    category: "fitout",
    subcategory: "retail",
    description: "Coastal-inspired retail space reflecting local beach culture.",
    challenge: "Incorporating coastal themes while meeting retail functionality needs.",
    solution: "Creative use of materials and colors reflecting seaside location.",
    completion: "Unique retail environment that captures coastal lifestyle perfectly.",
    tags: ["Retail", "Fit-out", "Coastal", "Lifestyle"]
  },

  // Fit-out Projects - Medical Fit-Outs
  {
    id: 21,
    title: "The Bond – Suite 4.10",
    category: "fitout",
    subcategory: "medical",
    description: "Specialised medical practice fit-out with advanced equipment integration.",
    challenge: "Meeting strict medical facility regulations and infection control standards.",
    solution: "Specialised medical construction techniques and compliant materials.",
    completion: "State-of-the-art medical facility exceeding industry standards.",
    tags: ["Medical", "Fit-out", "Healthcare", "Compliance"]
  },

  // Fit-out Projects - Restaurant Fit-Outs
  {
    id: 22,
    title: "Hills Kebab",
    category: "fitout",
    subcategory: "restaurant",
    description: "Complete restaurant fit-out with commercial kitchen and dining areas.",
    challenge: "Integrating complex kitchen equipment within compact space.",
    solution: "Efficient kitchen design maximizing workflow and customer seating.",
    completion: "Fully operational restaurant ready for high-volume service.",
    tags: ["Restaurant", "Fit-out", "Commercial Kitchen"],
    image: "/lovable-uploads/8fc6745f-a958-47b6-bbc7-d0a414f220ea.png"
  },
  {
    id: 23,
    title: "Cuppa Coffee Café",
    category: "fitout",
    subcategory: "restaurant",
    description: "Cozy cafe fit-out designed to create welcoming community atmosphere.",
    challenge: "Creating intimate cafe atmosphere while meeting commercial requirements.",
    solution: "Warm materials and lighting design promoting customer comfort.",
    completion: "Inviting cafe space that has become a local community hub.",
    tags: ["Cafe", "Fit-out", "Community", "Hospitality"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [subcategoryFilter, setSubcategoryFilter] = useState("all");

  const filteredProjects = projectsData.filter(project => {
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
                Showcasing our expertise across residential, commercial and fit-out construction projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Controls */}
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
                  onClick={() => handleCategoryChange(category.id)}
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
                  onClick={() => setSubcategoryFilter("all")}
                  className={subcategoryFilter === "all" ? "bg-[#3b62c0]" : ""}
                >
                  All {filter === "commercial" ? "Commercial" : "Fit-Out"}
                </Button>
                {getSubcategories(filter).map((subcategory) => (
                  <Button
                    key={subcategory.id}
                    variant={subcategoryFilter === subcategory.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSubcategoryFilter(subcategory.id)}
                    className={subcategoryFilter === subcategory.id ? "bg-[#3b62c0]" : ""}
                  >
                    {subcategory.label}
                  </Button>
                ))}
              </div>
            )}
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
                    <div className="bg-gray-200 aspect-video flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p className="text-gray-500 text-center p-4">
                          [Suggested image: Photo of {project.title}]
                        </p>
                      )}
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
                      
                      <div className="space-y-4">
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
