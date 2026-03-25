import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, ShieldCheck, Clock, ArrowRight, ChevronRight, Gavel, DollarSign, Lock, FileCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 group mb-6">
            <div className="relative flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-sm transform -skew-x-12 group-hover:bg-red-700 transition-colors">
              <Gavel className="w-6 h-6 transform skew-x-12" />
            </div>
            <div className="font-black text-3xl tracking-tighter text-white uppercase flex flex-col leading-none">
              <span>RTA</span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            The no-nonsense marketplace for buying and selling commercial trucks, fleets, and heavy equipment.
          </p>
          <div className="flex flex-col gap-3">
            <a href="tel:+12604936182" className="text-white font-bold text-lg hover:text-red-600 transition-colors">
              (260) 493-6182
            </a>
            <a href="mailto:info@rubletrucks.com" className="text-slate-400 hover:text-white transition-colors text-sm">
              info@rubletrucks.com
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link to="/inventory" className="hover:text-red-600 transition-colors">Browse Inventory</Link></li>
            <li><Link to="/auctions" className="hover:text-red-600 transition-colors">Upcoming Auctions</Link></li>
            <li><Link to="/buy" className="hover:text-red-600 transition-colors">How to Buy</Link></li>
            <li><Link to="/sell" className="hover:text-red-600 transition-colors">Sell Your Trucks</Link></li>
            <li><Link to="/how-it-works" className="hover:text-red-600 transition-colors">How It Works</Link></li>
            <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Support</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link to="/faq" className="hover:text-red-600 transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-red-600 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/rules" className="hover:text-red-600 transition-colors">Auction Rules</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Auction Alerts</h3>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">Get notified about upcoming auctions and featured equipment.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" 
              required
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded font-black text-sm uppercase tracking-widest transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 font-medium">&copy; {new Date().getFullYear()} RTA. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-red-600" /> Licensed & Bonded</span>
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-red-600" /> Secure Bidding Platform</span>
          <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-red-600" /> 100% Title Guarantee</span>
        </div>
      </div>
    </footer>
  );
}
