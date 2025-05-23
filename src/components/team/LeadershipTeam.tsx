
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
    initials: "MP",
    name: "Manish Pindoria",
    position: "Construction Manager",
    description: "Expert in contract management, costing, and fit-out delivery. Manish brings precision and efficiency to every project, from residential builds to complex commercial fitouts.",
    projects: ["Toongabbie Townhouses", "Sunboost Office Fitout", "Multiple Commercial Projects"],
    color: "bg-blue-100",
    textColor: "text-blue-600",
    bio: "With over 15 years of experience in the construction industry, Manish has developed a reputation for meticulous planning and efficient project delivery. His background in quantity surveying gives him unique insight into cost management and value engineering, ensuring clients receive maximum value without compromising on quality. Manish leads our commercial division and specializes in complex fitouts where minimal disruption to business operations is essential."
  },
  {
    initials: "AB",
    name: "Andrew Beard",
    position: "Director",
    description: "Leadership excellence in WHS compliance and major education and public builds. Andrew's reputation for clear communication and on-time delivery is unmatched.",
    projects: ["St Lukes School Project", "Wentworthville Public School", "ANSTO Facility"],
    color: "bg-indigo-100",
    textColor: "text-indigo-600",
    bio: "Andrew brings over 20 years of construction management experience to Ausvest Projects, with particular expertise in educational, government, and institutional projects. His commitment to safety and compliance has established Ausvest as a trusted partner for projects with strict regulatory requirements. Andrew oversees our residential division and remediation projects, with a focus on delivering outstanding quality and client satisfaction in even the most challenging situations."
  }
];

const LeadershipTeam = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
          >
            Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Directors
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-[#3b62c0] mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Industry leaders with proven track records delivering excellence across all project types.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className={`${director.color} ${director.textColor} p-8 flex flex-col items-center justify-center`}>
                      <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold">{director.initials}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 text-center mb-1">{director.name}</h3>
                      <p className="font-medium text-center mb-4">{director.position}</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <p className="text-gray-600 mb-6">{director.bio}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Key Projects:</h4>
                        <div className="space-y-2">
                          {director.projects.map((project, i) => (
                            <div key={i} className="flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#3b62c0] mr-2"></div>
                              <span className="text-gray-600">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Project Management", 
                            "Contract Negotiation", 
                            "Quality Assurance",
                            index === 0 ? "Cost Management" : "Safety Compliance",
                            index === 0 ? "Commercial Fitouts" : "Public Projects"
                          ].map((skill, i) => (
                            <span 
                              key={i} 
                              className={`px-3 py-1 ${index === 0 ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'} text-sm font-medium rounded-full`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
