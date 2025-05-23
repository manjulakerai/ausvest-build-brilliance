
import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const projectImages = [
  {
    src: "/lovable-uploads/101e7bf7-1a73-4cd5-a187-c04cfe3af0f5.png",
    title: "Modern Kitchen Interior",
    description: "Premium finishes with wooden accents and sleek design"
  },
  {
    src: "/lovable-uploads/5b29a271-b608-416d-9d0a-c0b981181d66.png",
    title: "Open Concept Living Space",
    description: "Bright, airy interior with modern kitchen and mezzanine level"
  },
  {
    src: "/lovable-uploads/a7f0fe6b-bbd3-4358-815a-d004057362b3.png",
    title: "Contemporary Villa Design",
    description: "Architectural excellence with natural elements and outdoor living"
  },
  {
    src: "/lovable-uploads/eed07998-b600-4e29-b286-f50a2e7ad61e.png",
    title: "Glass Staircase Feature",
    description: "Stunning interior with glass staircase and open plan design"
  },
  {
    src: "/lovable-uploads/947b9d7a-b92d-44da-aae6-6f48b3537851.png",
    title: "Luxury Stairwell Design",
    description: "Modern floating stairs with glass balustrades"
  },
  {
    src: "/lovable-uploads/969da309-b9ef-47ad-814e-6912f0538e8a.png",
    title: "Kitchen with Garden View",
    description: "Contemporary kitchen with large sliding doors to outdoor space"
  },
  {
    src: "/lovable-uploads/a8709fba-b323-4024-bc9a-5d1025f5e6ff.png",
    title: "Custom Built-In Shelving",
    description: "Elegant interior storage solutions with feature window"
  },
  {
    src: "/lovable-uploads/064f6a81-47eb-438e-9cb6-fc7b892d7c14.png",
    title: "Commercial Office Space",
    description: "Modern office design with city views and custom reception"
  },
  {
    src: "/lovable-uploads/4d218502-d1fe-4dad-b436-7604937ec9a7.png",
    title: "Hallway with Feature Wall",
    description: "Contemporary hallway with glass balustrade and textured wall"
  },
  {
    src: "/lovable-uploads/85b4bc3c-92f1-4e14-a8d4-c5db800592b0.png",
    title: "Modern Facade Design",
    description: "Sleek residential facade with glass balustrades"
  },
  {
    src: "/lovable-uploads/2b2ffc44-a4d0-442f-93e8-1997db4a5b8a.png",
    title: "Scandinavian Interior",
    description: "Natural wood elements with minimalist design principles"
  }
];

const ProjectGallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our finest residential and commercial construction work
          </p>
        </motion.div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="p-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden border border-gray-200 bg-white shadow-md rounded-md">
                    <div className="relative">
                      <AspectRatio ratio={4/3}>
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-lg font-semibold">{image.title}</h3>
                          <p className="text-sm text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectGallery;
