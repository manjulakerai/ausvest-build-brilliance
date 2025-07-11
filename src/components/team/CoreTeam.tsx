
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  color: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dilip Hirani",
    position: "Site Manager",
    color: "bg-orange-100",
    description: "Experienced site manager ensuring all construction phases run smoothly and safely."
  },
  {
    name: "Michael Edmon",
    position: "Site Manager",
    color: "bg-green-100",
    description: "Dedicated site manager focused on quality control and team coordination on-site."
  },
  {
    name: "Phani Arya",
    position: "Design/Contracts Manager",
    color: "bg-purple-100",
    description: "Expert in design coordination and contract management, ensuring seamless project delivery."
  },
  {
    name: "Manjula Kerai",
    position: "IT Manager",
    color: "bg-blue-100",
    description: "Manages IT infrastructure and digital systems to support efficient project delivery."
  }
];

const CoreTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
          >
            Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Core Team
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
            Skilled professionals who ensure your project is delivered to the highest standards.
          </motion.p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${member.color} p-6 shadow-md`}
            >
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-center mb-3 text-gray-700">{member.position}</p>
              <p className="text-sm text-gray-600 text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
