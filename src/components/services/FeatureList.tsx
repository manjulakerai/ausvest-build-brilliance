
import { ReactNode } from "react";

interface Feature {
  icon?: ReactNode;
  title?: string;
  description?: string;
  content?: string;
}

interface FeatureListProps {
  features: Feature[];
  iconColor: string;
  iconSize?: "sm" | "md" | "lg";
}

const FeatureList = ({ features, iconColor, iconSize = "sm" }: FeatureListProps) => {
  const sizeClass = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7"
  };

  return (
    <ul className="space-y-4 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className={`${sizeClass[iconSize]} ${iconColor} mt-1 mr-3 flex items-center justify-center`}>
            <img 
              src="/lovable-uploads/1e3b15f4-e23c-4368-8a8d-a2364fd83747.png" 
              alt="Bullet point" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            {feature.title && (
              <span className="font-semibold text-slate-900">{feature.title}</span>
            )}
            {feature.description && (
              <p className="text-gray-600">{feature.description}</p>
            )}
            {feature.content && !feature.title && !feature.description && (
              <span className="text-gray-700">{feature.content}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
