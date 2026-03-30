import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, Gavel, Home, List, Tag } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        {/* Utility Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-start items-center overflow-x-auto">
          <div className="flex items-center gap-6 font-medium whitespace-nowrap">
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">Our Network:</span>
            <a href="#" className="hover:text-white transition-colors">RTS</a>
            <a href="#" className="hover:text-white transition-colors">RTG</a>
            <a href="#" className="hover:text-white transition-colors">RTM</a>
          </div>
        </div>
        
        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-red-600 text-white rounded-sm transform -skew-x-12 group-hover:bg-red-700 transition-colors">
                  <Gavel className="w-5 h-5 md:w-6 md:h-6 transform skew-x-12" />
                </div>
                <div className="font-black text-2xl md:text-3xl tracking-tighter text-slate-900 uppercase flex flex-col leading-none">
                  <span>RTA</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link to="/auctions" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">Upcoming Auctions</Link>
              <Link to="/inventory" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">Inventory</Link>
              <Link to="/buy" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">Buy Trucks</Link>
              <Link to="/sell" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">Sell Trucks</Link>
              <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">How It Works</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-900 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap">About Us</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link to="/sell" className="text-slate-900 font-bold text-xs xl:text-sm hover:text-red-600 transition-colors uppercase tracking-wide whitespace-nowrap">
                Get a Valuation
              </Link>
              <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 xl:px-5 xl:py-2.5 rounded font-black text-xs xl:text-sm uppercase tracking-widest transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
                Register to Bid
              </Link>
              <Link to="/login" className="text-slate-600 hover:text-red-600 font-bold text-xs xl:text-sm uppercase tracking-wide transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <User className="w-4 h-4" />
                Login
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link 
                to="/auctions" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upcoming Auctions
              </Link>
              <Link 
                to="/inventory" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inventory
              </Link>
              <Link 
                to="/buy" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy Trucks
              </Link>
              <Link 
                to="/sell" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sell Trucks
              </Link>
              <Link 
                to="/how-it-works" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-3 text-base font-bold text-slate-900 uppercase tracking-wide hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3 px-3">
                <Link 
                  to="/sell" 
                  className="text-center text-slate-900 font-bold text-sm hover:text-red-600 transition-colors uppercase tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Valuation
                </Link>
                <Link 
                  to="/register" 
                  className="text-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register to Bid
                </Link>
                <Link 
                  to="/login" 
                  className="flex justify-center items-center gap-2 text-slate-600 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          <Link 
            to="/" 
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/') ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
          </Link>
          <Link 
            to="/auctions" 
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/auctions') ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Gavel className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Auctions</span>
          </Link>
          <Link 
            to="/inventory" 
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/inventory') ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <List className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Inventory</span>
          </Link>
          <Link 
            to="/sell" 
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/sell') ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Tag className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Sell</span>
          </Link>
          <Link 
            to="/login" 
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/login') ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
}
