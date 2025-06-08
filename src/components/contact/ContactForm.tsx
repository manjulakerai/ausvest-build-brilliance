
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";
import { useSecureContactForm } from "@/hooks/useSecureContactForm";

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isValid,
    updateField,
    validateField,
    submitForm
  } = useSecureContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h2>
            <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss your luxury construction project? Our team is here to bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Phone className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-gray-600">0411 123 456</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Mail className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@ausvestprojects.com.au</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <MapPin className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-gray-600">Sydney, NSW</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Clock className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Building className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Experience</h3>
                  <p className="text-gray-600">Over 30 years in luxury construction</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input 
                        type="text" 
                        value={formData.name || ''}
                        onChange={(e) => updateField('name', e.target.value)}
                        onBlur={() => validateField('name')}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none`}
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        value={formData.phone || ''}
                        onChange={(e) => updateField('phone', e.target.value)}
                        onBlur={() => validateField('phone')}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none`}
                        disabled={isSubmitting}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      value={formData.email || ''}
                      onChange={(e) => updateField('email', e.target.value)}
                      onBlur={() => validateField('email')}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                    <select 
                      value={formData.projectType || ''}
                      onChange={(e) => updateField('projectType', e.target.value)}
                      onBlur={() => validateField('projectType')}
                      className={`w-full px-4 py-3 border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a project type</option>
                      <option value="Luxury Home Construction">Luxury Home Construction</option>
                      <option value="Duplex Development">Duplex Development</option>
                      <option value="Home Renovation & Addition">Home Renovation & Addition</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Maintenance Services">Maintenance Services</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={4}
                      value={formData.message || ''}
                      onChange={(e) => updateField('message', e.target.value)}
                      onBlur={() => validateField('message')}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none`}
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <Button 
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full bg-[#3b62c0] hover:bg-blue-700 text-white px-6 py-3 rounded-none transform hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. Your information is secure and will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
