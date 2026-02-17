import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#91112D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
            <img src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" alt="Feduzzi" className="w-48 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-sm md:text-left">
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl mb-4">Vestigingen</h3>
            <div className="space-y-2 flex flex-col items-center">
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Amsterdam</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Laren</a>
            </div>
          </div>

          <div className="flex flex-col items-center">
             <h3 className="font-serif text-xl mb-4">Menu</h3>
             <div className="space-y-2 flex flex-col items-center">
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Maaltijden</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Broodjes</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Traiteur</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering</a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl mb-4">Bestellen</h3>
             <div className="space-y-2 flex flex-col items-center">
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Online broodjes</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering Amsterdam</a>
              <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering Laren</a>
            </div>
          </div>

          <div className="flex flex-col items-center">
             <h3 className="font-serif text-xl mb-4">Volg ons</h3>
             <div className="flex space-x-4">
               <Facebook className="cursor-pointer hover:text-gray-200" />
               <Instagram className="cursor-pointer hover:text-gray-200" />
             </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-xs font-light tracking-wider">
          <p>Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by Chef Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
