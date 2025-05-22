
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-900">Ausvest Projects</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-500/10 text-orange-500 border-orange-500/20">
              Sydney's Trusted Construction Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fast, Lean &<br />
              <span className="text-orange-400">Built to Last</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Construction, Fitouts & Refurbishments — We solve the biggest pain points: slow builds, 
              budget blowouts, and poor communication. Get quality builds that stay on budget and finish fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$60M+</div>
              <div className="text-gray-600">Total Project Value</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential builds to commercial fitouts and remediation work, 
              we deliver quality construction across all sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Residential Construction</h3>
                <p className="text-gray-600 mb-6">
                  New builds, renovations, additions, and remediation. Quality homes built on time and on budget.
                </p>
                <Button variant="ghost" className="group/btn p-0 text-blue-600 hover:text-blue-700">
                  Learn More 
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <div className="w-8 h-8 bg-orange-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Commercial & Retail</h3>
                <p className="text-gray-600 mb-6">
                  Office fitouts, hospitality refurbishments, and retail transformations that maximize your ROI.
                </p>
                <Button variant="ghost" className="group/btn p-0 text-blue-600 hover:text-blue-700">
                  Learn More 
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Remediation & Upgrades</h3>
                <p className="text-gray-600 mb-6">
                  Structural repairs, insurance works, and defect rectification. We fix what others can't.
                </p>
                <Button variant="ghost" className="group/btn p-0 text-blue-600 hover:text-blue-700">
                  Learn More 
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Flip the Script on <span className="text-orange-400">Traditional Construction</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We created Ausvest Projects to deliver what the industry couldn't: quality builds that stay on budget, 
                finish fast, and work harder for your bottom line.
              </p>
              <p className="text-gray-300 mb-8">
                Our diverse team of engineers, builders, and quantity surveyors brings deep expertise across 
                residential, civil, government, commercial, and remediation projects. No fluff, just results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>One point of contact — no confusion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Transparent communication — no surprises</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>On-time delivery — no excuses</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Our Promise</h3>
              <blockquote className="text-lg italic text-gray-300 mb-6">
                "Instead of delays and headaches, we deliver quality builds that stay on budget, 
                finish fast, and work harder for your bottom line."
              </blockquote>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet the Directors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry leaders with proven track records delivering excellence across all project types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">MP</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Manish Pindoria</h3>
                <p className="text-orange-500 font-semibold mb-4">Construction Manager</p>
                <p className="text-gray-600 mb-6">
                  Expert in contract management, costing, and fit-out delivery. Manish brings precision 
                  and efficiency to every project, from residential builds to complex commercial fitouts.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Toongabbie Townhouses</div>
                  <div>• Sunboost Office Fitout</div>
                  <div>• Multiple Commercial Projects</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-orange-100 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">AB</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Andrew Beard</h3>
                <p className="text-orange-500 font-semibold mb-4">Director</p>
                <p className="text-gray-600 mb-6">
                  Leadership excellence in WHS compliance and major education and public builds. 
                  Andrew's reputation for clear communication and on-time delivery is unmatched.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• St Lukes School Project</div>
                  <div>• Wentworthville Public School</div>
                  <div>• ANSTO Facility</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something brilliant together. Get your free consultation today.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to discuss your next construction project? Let's talk about how we can help.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <p className="text-gray-600">0411 123 456</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@ausvestprojects.com.au</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-gray-600">Sydney, NSW</p>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Remediation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ausvest Projects</h3>
              <p className="text-gray-400">
                Sydney's trusted construction partner for residential, commercial, and remediation projects.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Residential Construction</div>
                <div>Commercial Fitouts</div>
                <div>Remediation Work</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Our Team</div>
                <div>Projects</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>0411 123 456</div>
                <div>info@ausvestprojects.com.au</div>
                <div>Sydney, NSW</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Ausvest Projects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
