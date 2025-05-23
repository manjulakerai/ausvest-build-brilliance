
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ausvest</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Three decades of creating exceptional buildings across Sydney and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Founders or leadership team in professional setting]
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                  Our Legacy
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Three Decades of Excellence</h2>
                <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  For over 30 years, Ausvest has been crafting stunning and luxurious residential buildings across Sydney and its suburbs. 
                  Our journey began with a simple mission: to create homes and buildings that exceed expectations through impeccable 
                  craftsmanship and attention to detail.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we stand as one of Sydney's most trusted construction partners, with a portfolio that spans luxury homes, 
                  commercial developments, and specialty projects. Our team's collective expertise and unwavering commitment to quality 
                  have established Ausvest as a leader in the Australian construction industry.
                </p>
                <Button className="group bg-[#3b62c0] hover:bg-blue-700">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
              <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Ausvest, we take pride in our work culture that ensures efficient communication between you and our team,
                delivering 100% satisfaction with every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Uncompromising Quality",
                  description: "We maintain the highest standards across all our projects, from material selection to final execution."
                },
                {
                  title: "Transparent Communication",
                  description: "We believe in clear, honest dialogue throughout every phase of your construction journey."
                },
                {
                  title: "Expert Craftsmanship",
                  description: "Our team of skilled professionals brings decades of experience to every project we undertake."
                },
                {
                  title: "Timely Delivery",
                  description: "We understand the importance of deadlines and are committed to completing projects on schedule."
                },
                {
                  title: "Client-Focused Approach",
                  description: "Your vision and satisfaction are our top priorities from initial concept to final handover."
                },
                {
                  title: "Innovative Solutions",
                  description: "We embrace modern techniques and technologies to deliver superior construction outcomes."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 shadow-lg border-b-4 border-[#3b62c0]"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple & Flawless Construction Experience</h2>
              <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand that finding the right construction experts can be challenging. That's why we've created
                a seamless end-to-end project management solution.
              </p>
            </motion.div>

            <div className="space-y-12 mt-16">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We begin with a detailed discussion to understand your vision, requirements, and budget."
                },
                {
                  step: "02",
                  title: "Concept Development",
                  description: "Our design team works with you to create a concept that perfectly aligns with your goals."
                },
                {
                  step: "03",
                  title: "Detailed Planning",
                  description: "We handle all paperwork, permits, and create comprehensive construction plans."
                },
                {
                  step: "04",
                  title: "Construction Phase",
                  description: "Our expert team executes the project with precision, quality, and attention to detail."
                },
                {
                  step: "05",
                  title: "Quality Assurance",
                  description: "Rigorous inspections ensure every element meets our high standards before completion."
                },
                {
                  step: "06",
                  title: "Project Handover",
                  description: "We deliver your finished project on time, on budget, and to your complete satisfaction."
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="w-20 h-20 flex-shrink-0 bg-[#3b62c0] text-white text-2xl font-bold flex items-center justify-center">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision into Reality?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Let's discuss how our 30+ years of expertise can bring your dream project to life.
              </p>
              <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 px-8 py-3 text-white">
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
