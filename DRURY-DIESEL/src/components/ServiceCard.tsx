import preCofServiceBackground from '@/assets/pre-cof-service-background.jpg';
import diagnosticsBackground from '@/assets/diagnostics-background.jpg';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  details: string[];
  tagline: string;
  image: string;
  alt: string;
  isOdd: boolean;
}

const ServiceCard = ({ id, title, description, details, tagline, image, alt, isOdd }: ServiceCardProps) => {
  const backgroundImage = id === 'pre-cof' 
    ? `url(${preCofServiceBackground})`
    : id === 'diagnostics'
      ? `url(${diagnosticsBackground})`
      : isOdd 
        ? `url(${preCofServiceBackground})`
        : "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d6db264-3b87-4664-94b5-c08eda2a2e80.png')";

  // For Pre-COF service, use background image instead of foreground image
  const useBackgroundOnly = id === 'pre-cof' || id === 'diagnostics';

  return (
    <div 
      className="service-card group relative overflow-hidden rounded-xl industrial-shadow transition-all duration-300 hover:glow-shadow bg-cover bg-center h-[400px]"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      <div className="relative h-full">
        {!useBackgroundOnly && (
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
          />
        )}
        <div className="service-content absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 text-foreground">
          <h3 className="text-primary text-2xl mb-3 font-bold">{title}</h3>
          <p className="mb-3 text-sm line-clamp-3">{description}</p>
          <p className="font-bold text-primary text-sm">{tagline}</p>
        </div>
        <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-white text-xl font-bold text-shadow">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;