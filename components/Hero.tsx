import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl font-light tracking-wide drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
