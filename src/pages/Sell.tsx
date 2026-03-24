import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

export default function Sell() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            Sell Your Trucks. <span className="text-red-600">Get Top Dollar.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
            Turn your idle fleet into working capital. We handle the marketing, the buyers, and the paperwork. You get paid fast.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Benefits */}
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-8">Why Consign With RTA?</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg h-fit">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Maximum Global Exposure</h3>
                    <p className="text-slate-600 font-medium">We market your equipment to a massive database of qualified buyers nationwide, ensuring you get true fair market value, not just a local trade-in offer.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg h-fit">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Fast Liquidity</h3>
                    <p className="text-slate-600 font-medium">Stop waiting months for a private buyer. From consignment to auction day to cash in your account, our process is built for speed.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg h-fit">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Zero Hassle</h3>
                    <p className="text-slate-600 font-medium">No tire-kickers. No lowballers. No title headaches. We handle the entire transaction from start to finish securely and professionally.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-black text-lg uppercase tracking-wide text-slate-900 mb-4">What We Sell</h3>
                <ul className="grid grid-cols-2 gap-3 text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Sleeper Trucks</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Day Cabs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Dump Trucks</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Service & Utility</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Box Trucks</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Heavy Trailers</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Construction Equip.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Entire Fleets</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Valuation Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 sticky top-28">
                <div className="mb-8">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-2">Get a Free Valuation</h2>
                  <p className="text-slate-500 font-medium text-sm">Tell us about your equipment. Our experts will review it and contact you within 24 hours with a no-obligation estimate.</p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email *</label>
                      <input type="email" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Equipment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Year</label>
                        <input type="text" placeholder="e.g. 2018" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Make</label>
                        <input type="text" placeholder="e.g. Peterbilt" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Model</label>
                        <input type="text" placeholder="e.g. 579" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" />
                      </div>
                    </div>
                    
                    <div className="mb-5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Additional Details / Fleet Size</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" placeholder="Tell us about mileage, condition, or if you have multiple trucks to sell..."></textarea>
                    </div>
                  </div>

                  <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
                    Request Free Valuation
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium mt-4">
                    100% Free. No obligation to consign.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
