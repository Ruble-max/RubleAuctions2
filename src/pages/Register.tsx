import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">Bidder Registration</h1>
          <p className="text-slate-600 font-medium max-w-xl mx-auto">
            Create your free account to view full condition reports, save trucks to your watchlist, and get approved to bid in upcoming auctions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Benefits */}
            <div className="bg-slate-900 text-white p-8 md:p-10 md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-xl uppercase tracking-wide mb-6 text-red-500">Why Register?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">Access full 50-point condition reports and inspection videos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">Save trucks to your watchlist and get outbid alerts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">Bid online from anywhere during live auctions.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Lock className="w-4 h-4 text-red-600" /> Secure Registration
                </div>
                <p className="text-xs text-slate-500">Your data is protected with bank-grade 256-bit encryption. We never sell your information.</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-10 md:w-2/3">
              <form className="space-y-6">
                
                {/* Account Info */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4 border-b border-slate-100 pb-2">Account Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address *</label>
                      <input type="email" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Mobile Phone *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Create Password *</label>
                      <input type="password" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Confirm Password *</label>
                      <input type="password" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="pt-4">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4 border-b border-slate-100 pb-2">Company Information (Optional)</h3>
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Dealer License # (If applicable)</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">State of Registration</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <label className="flex items-start gap-3 cursor-pointer mb-6">
                    <input type="checkbox" className="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-600" required />
                    <span className="text-sm text-slate-600 font-medium">
                      I agree to the <Link to="/terms" className="text-red-600 hover:underline">Terms & Conditions</Link>, <Link to="/rules" className="text-red-600 hover:underline">Auction Rules</Link>, and <Link to="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>

                  <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg flex justify-center items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Create My Account
                  </button>
                  
                  <p className="text-center text-sm text-slate-600 font-medium mt-6">
                    Already have an account? <Link to="/login" className="text-red-600 font-bold hover:underline">Log In</Link>
                  </p>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
