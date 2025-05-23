
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContactMap = () => {
  return (
    <section className="py-8">
      <div className="w-full h-[400px] overflow-hidden border border-gray-200 shadow-md">
        <AspectRatio ratio={16/9}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.173716033663!2d150.9174449750976!3d-33.80242702383138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10f31a67453%3A0x330531e1bfc09f12!2s38%2F1%20Limestone%20Rd%2C%20Rouse%20Hill%20NSW%202155!5e0!3m2!1sen!2sau!4v1716527338881!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ausvest Projects Rouse Hill Office"
            className="w-full h-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default ContactMap;
