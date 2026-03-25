import { Link } from 'react-router-dom';
import { Menu, User, LogIn, Gavel } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
            <User className="w-3.5 h-3.5" />
            Login / My Account
          </Link>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-sm transform -skew-x-12 group-hover:bg-red-700 transition-colors">
                <Gavel className="w-6 h-6 transform skew-x-12" />
              </div>
              <div className="font-black text-3xl tracking-tighter text-slate-900 uppercase flex flex-col leading-none">
                <span>RTA</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/auctions" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">Upcoming Auctions</Link>
            <Link to="/inventory" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">Inventory</Link>
            <Link to="/buy" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">Buy Trucks</Link>
            <Link to="/sell" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">Sell Trucks</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">How It Works</Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors">About Us</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/sell" className="text-slate-900 font-bold text-sm hover:text-red-600 transition-colors uppercase tracking-wide">
              Get a Valuation
            </Link>
            <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-md hover:shadow-lg">
              Register to Bid
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-slate-900 p-2">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
