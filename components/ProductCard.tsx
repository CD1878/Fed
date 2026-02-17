import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden aspect-square mb-4 rounded-lg">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
            <span className="absolute top-2 left-2 bg-black text-white text-[10px] uppercase px-2 py-1 tracking-wider">
                {product.tag}
            </span>
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="font-serif text-lg mb-1">{product.title}</h3>
        <div className="text-sm text-gray-500 font-light mb-4 flex-grow" dangerouslySetInnerHTML={{__html: product.description}}></div>
        
        <div className="text-sm font-medium mb-3">{product.price}</div>
        
        <button className="w-full border border-black py-2.5 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
          Voeg toe aan bestellijst
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
