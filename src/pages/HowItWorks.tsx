import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Search, 
  Gavel, 
  Truck, 
  ClipboardCheck, 
  Camera, 
  Globe, 
  DollarSign,
  ArrowRight
} from 'lucide-react';

export default function HowItWorks() {
  const buyerSteps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "1. Register & Get Approved",
      description: "Create your free RTA account and submit the required documentation to get approved for bidding."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "2. Browse & Inspect",
      description: "Review our detailed condition reports, high-resolution photos, and videos for every piece of equipment."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "3. Bid to Win",
      description: "Join our live online auctions. Bid with confidence knowing exactly what you're buying."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "4. Pay & Pick Up",
      description: "Complete your secure payment. We'll handle the title transfer and help coordinate transportation."
    }
  ];

  const sellerSteps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "1. Submit Equipment",
      description: "Tell us what you want to sell. We'll provide a free, no-obligation valuation based on real market data."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "2. Inspection & Listing",
      description: "Our experts conduct a thorough inspection, take professional photos, and build a comprehensive listing."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "3. Global Marketing",
      description: "Your equipment is marketed to our worldwide network of qualified buyers to maximize your return."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "4. Sold & Paid",
      description: "Once the hammer falls, we handle the payment collection and title transfer. You get paid fast."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            How <span className="text-red-600">RTA</span> Works
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            Whether you're looking to upgrade your fleet or liquidate assets, our transparent auction process makes buying and selling heavy equipment simple and secure.
          </p>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Buying at RTA</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              A straightforward process designed to give you the confidence to bid and win the equipment you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

            {buyerSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-red-600 shadow-lg mb-6 transition-transform hover:scale-110 hover:border-red-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/register" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
              Register to Bid <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Selling at RTA</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Turn your idle assets into working capital. We handle everything from inspection to payment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

            {sellerSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-slate-900 shadow-lg mb-6 transition-transform hover:scale-110 hover:border-slate-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/sell" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
              Get a Free Valuation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Ready to get started?</h2>
          <p className="text-lg text-red-100 font-medium mb-10">
            Join thousands of satisfied buyers and sellers who trust RTA for their commercial equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auctions" className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
              View Upcoming Auctions
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-all">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
