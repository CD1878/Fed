import React from 'react';
import { MenuSectionData } from '../types';

const MenuSection: React.FC<MenuSectionData> = ({ title, subtitle, items, image, imagePosition }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[500px]">
      {/* Image Side */}
      <div className={`w-full md:w-1/2 relative h-[400px] md:h-auto order-first ${imagePosition === 'right' ? 'md:order-last' : ''}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
        <div className="mb-12 text-center relative">
          <h2 className="text-3xl font-serif relative z-10 inline-block px-4">
            {title}
             <span className="absolute left-0 bottom-1 w-full h-3 bg-[#6B8E6B] -z-10 opacity-60 rounded-sm"></span>
          </h2>
          {subtitle && (
            <h3 className="text-xl font-serif mt-2 text-gray-600">{subtitle}</h3>
          )}
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-baseline group">
              <div className="pr-4">
                <h4 className="uppercase text-sm tracking-widest font-medium mb-1">{item.title}</h4>
                {item.description && (
                  <p className="text-xs text-gray-500 font-light">{item.description}</p>
                )}
              </div>
              <div className="text-sm font-medium whitespace-nowrap">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
