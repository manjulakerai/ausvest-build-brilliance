
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  initials: string;
  name: string;
  position: string;
  description: string;
  projects: string[];
  color: string;
  textColor: string;
}

const TeamSection = () => {
  const directors: TeamMember[] = [
    {
      initials: "MP",
      name: "Manish Pindoria",
      position: "Construction Manager",
      description: "Expert in contract management, costing, and fit-out delivery. Manish brings precision and efficiency to every project, from residential builds to complex commercial fitouts.",
      projects: ["Toongabbie Townhouses", "Sunboost Office Fitout", "Multiple Commercial Projects"],
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      initials: "AB",
      name: "Andrew Beard",
      position: "Director",
      description: "Leadership excellence in WHS compliance and major education and public builds. Andrew's reputation for clear communication and on-time delivery is unmatched.",
      projects: ["St Lukes School Project", "Wentworthville Public School", "ANSTO Facility"],
      color: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
          >
            Our Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Meet the Directors
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
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-24 h-24 ${director.color} ${director.textColor} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-2xl font-bold">{director.initials}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{director.name}</h3>
                  <p className="text-[#3b62c0] font-semibold mb-4">{director.position}</p>
                  <p className="text-gray-600 mb-6">{director.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    {director.projects.map((project, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3b62c0] mr-2"></div>
                        {project}
                      </div>
                    ))}
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

export default TeamSection;
