
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContactMap = () => {
  return (
    <section className="py-8">
      <div className="w-full h-[400px] overflow-hidden border border-gray-200 shadow-md">
        <AspectRatio ratio={16/9}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53113.78197150211!2d151.17440655976257!3d-33.87001546303913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632b0c0!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1715667859799!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ausvest Construction Sydney Office"
            className="w-full h-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default ContactMap;
