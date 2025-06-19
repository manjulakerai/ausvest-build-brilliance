
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  challenge: string;
  solution: string;
  completion: string;
  tags: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="bg-gray-200 aspect-video flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-500 text-center p-4">
            [Suggested image: Photo of {project.title}]
          </p>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900">Challenge:</h4>
            <p className="text-gray-600">{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Solution:</h4>
            <p className="text-gray-600">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Result:</h4>
            <p className="text-gray-600">{project.completion}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
