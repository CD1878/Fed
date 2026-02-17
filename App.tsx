import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ProductCard from './components/ProductCard';
import { MENU_SECTIONS, PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('traiteur');

  // Handle simple navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
     window.scrollTo(0,0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={handleNavigate} activePage={currentPage} />

      <main className="flex-grow">
        {currentPage === 'traiteur' && (
          <>
            <Hero 
              title="Italiaanse maaltijden" 
              subtitle="Proef de authentieke Italiaanse keuken"
              image="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/a0a7f786-ef07-4280-b0c4-2632340fa863/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam13.jpeg"
            />
            
            <div className="bg-[#f9f9f9] py-12 text-center">
                 <h2 className="text-2xl font-serif text-[#6B8E6B]">Traiteur / Catering</h2>
                 <p className="text-gray-600 mt-2 font-light">Verfijnde Italiaanse maaltijden aan je deur</p>
            </div>

            <div>
              {MENU_SECTIONS.map((section, index) => (
                <MenuSection key={index} {...section} />
              ))}
            </div>

            <div className="py-20 bg-white text-center">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center">
                    <button className="bg-[#6B8E6B] text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-opacity-90 transition-opacity">
                        Bestellen bij Feduzzi Amsterdam
                    </button>
                    <button className="bg-[#6B8E6B] text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-opacity-90 transition-opacity">
                        Bestellen bij Feduzzi Laren
                    </button>
                </div>
            </div>
          </>
        )}

        {currentPage === 'broodjes' && (
          <>
            <Hero 
              title="Broodjes online bestellen" 
              subtitle="Minimaal 24 uur van tevoren online bestellen, op de dag zelf graag telefonisch"
              image="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/16f03db7-bfb3-4423-ba5e-5ee1ee41d9dd/favicon.ico?format=100w" // Using a generic food image instead as the favicon is too small
            />
             {/* Override Hero Image for this specific view to match screenshot atmosphere */}
            <div className="-mt-[60vh]"> 
                <Hero 
                title="Broodjes online bestellen" 
                subtitle="Minimaal 24 uur van tevoren online bestellen, op de dag zelf graag telefonisch"
                image="https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                />
            </div>
            
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h2 className="font-serif text-3xl mb-4">Online bestellen (minimaal 24 uur van te voren)</h2>
                    <div className="flex justify-center space-x-2 text-sm">
                        <span className="font-bold border-b border-black">All</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600 cursor-pointer hover:text-black">Broodjes</span>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
          </>
        )}

        {/* Fallback for other pages essentially pointing to Home for demo */}
        {(currentPage !== 'traiteur' && currentPage !== 'broodjes') && (
            <div className="h-screen flex items-center justify-center flex-col">
                <h1 className="text-4xl font-serif mb-4">Pagina in onderhoud</h1>
                <button onClick={() => handleNavigate('traiteur')} className="border-b border-black pb-1 hover:text-[#91112D] hover:border-[#91112D]">Terug naar menu</button>
            </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;
