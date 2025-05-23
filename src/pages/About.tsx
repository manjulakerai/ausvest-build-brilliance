
import { motion } from "framer-motion";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {/* About Hero */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ausvest Projects</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Our journey, values, and commitment to excellence in construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  We Flip the Script on Traditional Construction
                </h2>
                <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                <p className="text-gray-600 mb-6">
                  We created Ausvest Projects to deliver what the industry couldn't: quality builds that stay on budget, 
                  finish fast, and work harder for your bottom line. Born from a frustration with the status quo, 
                  our founders set out to build a company that places transparency, efficiency, and client satisfaction 
                  at the heart of everything we do.
                </p>
                <p className="text-gray-600 mb-6">
                  With decades of combined experience across residential, commercial, and remediation projects, 
                  our leadership team has assembled a network of skilled professionals who share our commitment 
                  to doing construction differently.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Ausvest team on site reviewing plans or directors in discussion with clients]
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  What Drives Us Forward
                </h2>
                <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-4"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Transparency",
                    description: "We believe in clear communication and no surprises. You'll always know exactly where your project stands."
                  },
                  {
                    title: "Efficiency",
                    description: "We respect your time and budget. Our streamlined processes deliver quality results without unnecessary delays."
                  },
                  {
                    title: "Excellence",
                    description: "From materials to workmanship, we never compromise on quality. The details matter to us as much as they do to you."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-8 shadow-lg border-t-4 border-[#3b62c0]"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                    <p className="text-gray-500 text-center p-4">
                      [Suggested image: Ausvest team in a planning meeting or project management in action]
                    </p>
                  </div>
                </div>
                <div>
                  <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                    Our Approach
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    How We Work
                  </h2>
                  <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                  <ul className="space-y-4">
                    {[
                      "Single point of contact for clear communication",
                      "Detailed planning before breaking ground",
                      "Regular progress updates and transparent reporting",
                      "Proactive problem-solving to prevent delays",
                      "Quality control at every project milestone",
                      "Comprehensive handover and aftercare services"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />
      </div>
    </div>
  );
};

export default About;
