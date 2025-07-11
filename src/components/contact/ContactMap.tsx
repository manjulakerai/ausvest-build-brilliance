
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContactMap = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="location-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visit Our Office
          </h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Rouse Hill, we're easily accessible and ready to discuss your next project.
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Location</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    38/1 Limestone Road<br />
                    Rouse Hill, NSW 2155<br />
                    Australia
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Directions</h4>
                  <p className="text-gray-600 mb-4">
                    Easily accessible from major roads and public transport. Free parking available on-site.
                  </p>
                  <a 
                    href="https://maps.google.com/?q=38/1+Limestone+Road,+Rouse+Hill+NSW+2155,+Australia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3b62c0] hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#3b62c0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Rouse Hill Office</h4>
                  <p className="text-gray-600 mb-4">38/1 Limestone Road</p>
                  <a 
                    href="https://maps.google.com/?q=38/1+Limestone+Road,+Rouse+Hill+NSW+2155,+Australia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b62c0] hover:text-blue-700 font-semibold underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
