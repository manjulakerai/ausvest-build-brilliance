
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
        
        <div className="w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-lg border border-gray-200 shadow-lg">
          <AspectRatio ratio={16/10}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.173716033663!2d150.9174449750976!3d-33.80242702383138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10f31a67453%3A0x330531e1bfc09f12!2s38%2F1%20Limestone%20Rd%2C%20Rouse%20Hill%20NSW%202155!5e0!3m2!1sen!2sau!4v1716527338881!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ausvest Projects Office Location - 38/1 Limestone Road, Rouse Hill NSW 2155"
              className="w-full h-full"
              aria-label="Interactive map showing Ausvest Projects office location in Rouse Hill"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
