
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-AU')}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    Ausvest Projects ("we", "us", or "our") may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Personal identification information (Name, email address, phone number, address)</li>
                    <li>Project details and construction requirements</li>
                    <li>Communication records and preferences</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>To provide construction and renovation services</li>
                    <li>To communicate with you about your projects</li>
                    <li>To send project updates and important notifications</li>
                    <li>To improve our services and website functionality</li>
                    <li>To comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>To subcontractors and suppliers directly involved in your project</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. This includes physical, 
                    electronic, and procedural safeguards in accordance with Australian Privacy Principles.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights Under Australian Privacy Law</h2>
                  <p className="text-gray-600 mb-4">
                    Under the Privacy Act 1988 (Cth) and Australian Privacy Principles, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information (where legally permissible)</li>
                    <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Website Analytics</h2>
                  <p className="text-gray-600">
                    Our website may use cookies and similar technologies to enhance your browsing experience 
                    and collect analytics data. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Links</h2>
                  <p className="text-gray-600">
                    Our website may contain links to third-party websites. We are not responsible for the 
                    privacy practices of these external sites and encourage you to review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
                  <p className="text-gray-600">
                    We retain your personal information for as long as necessary to provide our services, 
                    comply with legal obligations, and resolve disputes. Construction project records may 
                    be retained for extended periods as required by NSW building regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2"><strong>Ausvest Projects</strong></p>
                    <p className="text-gray-600 mb-2">38/1 Limestone Road, Rouse Hill, NSW 2155</p>
                    <p className="text-gray-600 mb-2">Phone: <a href="tel:+61412995208" className="text-[#3b62c0] hover:underline">0412 995 208</a></p>
                    <p className="text-gray-600">Email: <a href="mailto:hello@ausvestprojects.com.au" className="text-[#3b62c0] hover:underline">hello@ausvestprojects.com.au</a></p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Office of the Australian Information Commissioner (OAIC)</h3>
                  <p className="text-gray-600">
                    If you believe we have not adequately addressed your privacy concerns, you may lodge a complaint with the OAIC:
                  </p>
                  <p className="text-gray-600 mt-2">
                    Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#3b62c0] hover:underline">www.oaic.gov.au</a><br />
                    Phone: 1300 363 992
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
