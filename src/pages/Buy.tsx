import { Link } from 'react-router-dom';
import { UserPlus, Search, Gavel, Truck, CheckCircle2 } from 'lucide-react';

export default function Buy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            Buy With Confidence. <span className="text-red-600">Get To Work.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
            We provide comprehensive condition reports, clear titles, and a straightforward bidding process so you can buy the equipment you need without the guesswork.
          </p>
          <Link to="/register" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
            Register to Bid Now
          </Link>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-16 text-center">The Buying Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-0.5 bg-slate-200 z-0"></div>
              <div className="relative z-10 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 text-red-600">
                <UserPlus className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">1. Register</h3>
              <p className="text-slate-600 font-medium text-sm">Create your free account. Provide your basic info and company details to get approved for bidding.</p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-0.5 bg-slate-200 z-0"></div>
              <div className="relative z-10 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 text-red-600">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">2. Inspect</h3>
              <p className="text-slate-600 font-medium text-sm">Browse inventory. Review our detailed 50-point condition reports, high-res photos, and video walkarounds.</p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-0.5 bg-slate-200 z-0"></div>
              <div className="relative z-10 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 text-red-600">
                <Gavel className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">3. Bid</h3>
              <p className="text-slate-600 font-medium text-sm">Join the live auction online or place proxy bids in advance. Our platform is secure and transparent.</p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="relative z-10 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 text-red-600">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">4. Pay & Haul</h3>
              <p className="text-slate-600 font-medium text-sm">Win the lot, receive your invoice, and pay via secure wire transfer. We guarantee clear titles on all sales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-10 text-center">Buyer FAQ</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600" /> Are there buyer premiums?
              </h3>
              <p className="text-slate-600 font-medium">Yes, a standard buyer's premium applies to all purchases. The exact percentage is clearly listed on every auction's detail page before you bid.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600" /> Can I inspect the trucks in person?
              </h3>
              <p className="text-slate-600 font-medium">Absolutely. We host preview days prior to every live auction. Check the specific auction details for dates, times, and yard locations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600" /> How long do I have to pay and remove my equipment?
              </h3>
              <p className="text-slate-600 font-medium">Payment is typically due within 3 business days via wire transfer. Equipment must be removed from the yard within 7-10 days depending on the specific auction rules.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/inventory" className="inline-block bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-all">
              Browse Current Inventory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
