import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, ShieldCheck, Clock, ArrowRight, ChevronRight, Gavel, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
            alt="Commercial trucks lined up" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Serious Trucks.<br />
              <span className="text-red-600">Straightforward Auctions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl leading-relaxed">
              The no-nonsense marketplace for buying and selling commercial trucks, fleets, and heavy equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inventory" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest transition-colors text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                View Inventory & Bid
              </Link>
              <Link to="/sell" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest transition-all text-center">
                Sell Your Trucks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm text-red-600">
                <FileText className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Comprehensive Inspections</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm text-red-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Clear Titles Guaranteed</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm text-red-600">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Fast, Secure Payouts</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm text-red-600">
                <Gavel className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Live & Online Bidding</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Upcoming Auctions (Urgency) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 mb-2">Upcoming Auctions</h2>
              <p className="text-slate-600 font-medium">Don't miss out on premium fleet liquidations.</p>
            </div>
            <Link to="/auctions" className="text-red-600 font-bold uppercase tracking-wide flex items-center gap-1 hover:text-red-700 transition-colors">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-800">
            <div className="md:w-1/3 bg-red-600 p-8 flex flex-col justify-center items-center text-center">
              <span className="text-white font-bold uppercase tracking-widest text-sm mb-2">Next Auction Starts In</span>
              <div className="flex gap-4 text-white font-black text-4xl md:text-5xl tracking-tighter">
                <div className="flex flex-col items-center"><span className="leading-none">12</span><span className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">Days</span></div>
                <span className="opacity-50">:</span>
                <div className="flex flex-col items-center"><span className="leading-none">08</span><span className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">Hrs</span></div>
                <span className="opacity-50">:</span>
                <div className="flex flex-col items-center"><span className="leading-none">45</span><span className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">Min</span></div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-widest mb-3">
                <Clock className="w-4 h-4" /> Online Only Event
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">Midwest Fleet Liquidation</h3>
              <p className="text-slate-400 font-medium mb-8 max-w-xl">
                Featuring 150+ late-model day cabs, sleeper trucks, and heavy-duty service vehicles from major regional carriers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded font-black text-sm uppercase tracking-widest transition-colors">
                  Register for this Auction
                </Link>
                <Link to="/catalog" className="bg-transparent border border-slate-600 hover:border-white text-white px-6 py-3 rounded font-bold text-sm uppercase tracking-widest transition-colors">
                  View Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Inventory */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">Featured Equipment</h2>
            <Link to="/inventory" className="hidden md:flex text-red-600 font-bold uppercase tracking-wide items-center gap-1 hover:text-red-700 transition-colors">
              Browse All Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Truck Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1586191552066-e52fd15cbef5?q=80&w=800&auto=format&fit=crop" alt="2021 Peterbilt 579" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">Lot #104</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Sleeper Truck</div>
                <h3 className="font-black text-lg text-slate-900 leading-tight mb-4">2021 Peterbilt 579</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Bid</div>
                      <div className="font-black text-2xl text-slate-900">$42,500</div>
                    </div>
                    <Link to="/inventory/1" className="bg-slate-100 hover:bg-red-600 hover:text-white text-slate-900 p-2 rounded transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=800&auto=format&fit=crop" alt="2019 Ford F-550 Service Truck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">Lot #212</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Service Truck</div>
                <h3 className="font-black text-lg text-slate-900 leading-tight mb-4">2019 Ford F-550 Service Body</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Starting Bid</div>
                      <div className="font-black text-2xl text-slate-900">$15,000</div>
                    </div>
                    <Link to="/inventory/2" className="bg-slate-100 hover:bg-red-600 hover:text-white text-slate-900 p-2 rounded transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop" alt="2020 Freightliner Cascadia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">Lot #118</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Day Cab</div>
                <h3 className="font-black text-lg text-slate-900 leading-tight mb-4">2020 Freightliner Cascadia</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Bid</div>
                      <div className="font-black text-2xl text-slate-900">$38,000</div>
                    </div>
                    <Link to="/inventory/3" className="bg-slate-100 hover:bg-red-600 hover:text-white text-slate-900 p-2 rounded transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1587293852726-0d628af1d452?q=80&w=800&auto=format&fit=crop" alt="2018 Kenworth T880 Dump Truck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">Lot #305</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Dump Truck</div>
                <h3 className="font-black text-lg text-slate-900 leading-tight mb-4">2018 Kenworth T880 Dump</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Bid</div>
                      <div className="font-black text-2xl text-slate-900">$65,000</div>
                    </div>
                    <Link to="/inventory/4" className="bg-slate-100 hover:bg-red-600 hover:text-white text-slate-900 p-2 rounded transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/inventory" className="inline-flex text-red-600 font-bold uppercase tracking-wide items-center gap-1 hover:text-red-700 transition-colors">
              Browse All Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. The Seller Pitch */}
      <section className="bg-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Turn Your Idle Fleet Into Capital. Fast.
              </h2>
              <p className="text-lg font-medium mb-8 text-red-50 max-w-xl">
                We handle the marketing, the buyers, and the paperwork. You get paid. Stop dealing with tire-kickers and lowball dealer trade-ins.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <span className="font-bold text-lg">Maximum Global Exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <span className="font-bold text-lg">True Fair Market Value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <span className="font-bold text-lg">Hassle-Free Process & Fast Payouts</span>
                </li>
              </ul>
              <Link to="/sell" className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest transition-colors shadow-lg">
                Get a Free Valuation
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transform rotate-3">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop" alt="Fleet manager inspecting trucks" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="font-black text-3xl text-red-600 mb-1">100%</div>
                <div className="font-bold uppercase tracking-wide text-sm">Free, no-obligation market valuation for your equipment.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 font-medium mb-16 max-w-2xl mx-auto">A straightforward process designed for serious buyers and sellers.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-3xl mb-6 shadow-xl border-4 border-white">
                1
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">Register & Inspect</h3>
              <p className="text-slate-600 font-medium max-w-xs">Sign up to bid and review our comprehensive, transparent condition reports.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-3xl mb-6 shadow-xl border-4 border-white">
                2
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">Place Your Bids</h3>
              <p className="text-slate-600 font-medium max-w-xs">Bid online or in-person. Our platform ensures a fair, competitive marketplace.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-3xl mb-6 shadow-xl border-4 border-white">
                3
              </div>
              <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-3">Pay & Haul</h3>
              <p className="text-slate-600 font-medium max-w-xs">Secure payment processing and guaranteed clear titles so you can get to work.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Link to="/how-it-works" className="inline-block bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-all">
              Read the Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="bg-slate-900 text-white py-20 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Ready to get to work?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
              Register to Bid
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-slate-700 hover:border-white text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-all">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
