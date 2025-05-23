
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ContentBlockProps {
  tagText?: string;
  tagColor: string;
  title: string;
  accentColor: string;
  description: ReactNode | string[];
  buttonText?: string;
  buttonLink?: string;
  quote?: {
    text: string;
    highlight?: string;
  };
  featureList?: ReactNode;
}

const ContentBlock = ({
  tagText,
  tagColor,
  title,
  accentColor,
  description,
  buttonText,
  buttonLink,
  quote,
  featureList
}: ContentBlockProps) => {
  return (
    <div>
      {tagText && (
        <div className={`inline-block px-4 py-1 ${tagColor} rounded-full font-medium mb-4`}>
          {tagText}
        </div>
      )}
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className={`h-1 w-20 ${accentColor} mb-6`}></div>
      
      {Array.isArray(description) ? (
        description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-6">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      
      {quote && (
        <div className={`bg-${accentColor.split('-')[0]}-50 p-6 border-l-4 ${accentColor} mb-6`}>
          <p className="text-lg font-semibold text-slate-900">{quote.text}</p>
          {quote.highlight && (
            <p className={`text-lg font-semibold ${accentColor.replace('border', 'text')}`}>
              {quote.highlight}
            </p>
          )}
        </div>
      )}
      
      {featureList}
      
      {buttonText && buttonLink && (
        <Link to={buttonLink}>
          <Button className={`group ${accentColor.replace('border', 'bg')} hover:${accentColor.replace('border', 'bg').replace(/-\d+/, '-700')}`}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ContentBlock;
