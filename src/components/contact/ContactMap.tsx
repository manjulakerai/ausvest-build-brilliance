
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
          {/* Address Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 max-w-md mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
