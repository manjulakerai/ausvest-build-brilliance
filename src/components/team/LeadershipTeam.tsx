
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Director {
  initials: string;
  name: string;
  position: string;
  description: string;
  projects: string[];
  color: string;
  textColor: string;
  bio: string;
}

const directors: Director[] = [
  {
    initials: "AB",
    name: "Andrew Beard",
    position: "Director",
    description: "Leadership excellence in WHS compliance and major education and public builds. Andrew's reputation for clear communication and on-time delivery is unmatched.",
    projects: ["St Lukes School Project", "Wentworthville Public School", "Norwest Private Hospital"],
    color: "bg-indigo-100",
    textColor: "text-indigo-600",
    bio: "Andrew brings over 20 years of construction management experience to Ausvest Projects, with particular expertise in educational, government, and institutional projects. His commitment to safety and compliance has established Ausvest as a trusted partner for projects with strict regulatory requirements. Andrew leads our commercial division and specialises in complex projects where minimal disruption to business operations is essential."
  },
  {
    initials: "MP",
    name: "Manish Pindoria",
    position: "Managing Director",
    description: "Expert in contract management, costing, and fit-out delivery. Manish brings precision and efficiency to every project, from residential builds to complex commercial fitouts.",
    projects: ["Multiple Residential Projects", "Sunboost Office Fitout", "Multiple Commercial Projects"],
    color: "bg-blue-100",
    textColor: "text-blue-600",
    bio: "With over 10 years of experience in the construction industry, Manish has developed a reputation for meticulous planning and efficient project delivery. His background in quantity surveying gives him unique insight into cost management and value engineering, ensuring clients receive maximum value without compromising on quality. Manish leads our residential division and oversees our commercial division, with a focus on delivering outstanding quality and client satisfaction in even the most challenging situations."
  }
];

const LeadershipTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-[#3b62c0] font-semibold mb-6 border border-blue-100"
          >
            Leadership Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our Directors
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-r from-[#3b62c0] to-indigo-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Industry leaders with proven track records delivering excellence across all project types.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 * index }}
              className="group"
            >
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-2">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className={`${director.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="relative p-8 text-center">
                      <div className="w-28 h-28 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className={`text-4xl font-bold ${director.textColor}`}>{director.initials}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{director.name}</h3>
                      <div className="inline-block px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full">
                        <p className={`font-semibold ${director.textColor}`}>{director.position}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-8">
                      <p className="text-gray-700 leading-relaxed text-lg">{director.bio}</p>
                    </div>
                    
                    {/* Key Projects */}
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className={`w-2 h-6 ${director.color} rounded-full mr-3`}></div>
                        <h4 className="font-bold text-slate-900 text-lg">Key Projects</h4>
                      </div>
                      <div className="grid gap-3">
                        {director.projects.map((project, i) => (
                          <div key={i} className="flex items-center group/item">
                            <div className={`w-2 h-2 rounded-full ${director.color.replace('bg-', 'bg-opacity-60 bg-')} mr-3 group-hover/item:scale-125 transition-transform duration-200`}></div>
                            <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-200">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Expertise */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`w-2 h-6 ${director.color} rounded-full mr-3`}></div>
                        <h4 className="font-bold text-slate-900 text-lg">Expertise</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Project Management", 
                          "Contract Negotiation", 
                          "Quality Assurance",
                          index === 0 ? "Cost Management" : "Safety Compliance",
                          index === 0 ? "Commercial Fitouts" : "Public Projects"
                        ].map((skill, i) => (
                          <span 
                            key={i} 
                            className={`px-4 py-2 ${index === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200' : 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200'} text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200 cursor-default`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
