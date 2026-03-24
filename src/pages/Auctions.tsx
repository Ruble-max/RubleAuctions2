import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Auctions() {
  const auctions = [
    {
      id: 1,
      title: 'Midwest Fleet Liquidation',
      date: 'April 15, 2026',
      time: '9:00 AM CST',
      location: 'Online Only',
      lots: 150,
      description: 'Featuring late-model day cabs, sleeper trucks, and heavy-duty service vehicles from major regional carriers.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Spring Construction & Heavy Duty Event',
      date: 'May 02, 2026',
      time: '10:00 AM EST',
      location: 'Columbus, OH & Online',
      lots: 320,
      description: 'Massive selection of dump trucks, excavators, service bodies, and vocational equipment.',
      image: 'https://images.unsplash.com/photo-1587293852726-0d628af1d452?q=80&w=800&auto=format&fit=crop',
      status: 'upcoming'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Upcoming Auctions</h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl">Register early to secure your bidding limits. All auctions feature comprehensive condition reports and clear titles.</p>
        </div>

        <div className="space-y-8">
          {auctions.map(auction => (
            <div key={auction.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row hover:shadow-lg transition-shadow">
              <div className="md:w-1/3 relative aspect-video md:aspect-auto">
                <img src={auction.image} alt={auction.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md">
                  {auction.lots} Lots
                </div>
              </div>
              
              <div className="p-6 md:p-8 md:w-2/3 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">{auction.title}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>{auction.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span>{auction.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-medium sm:col-span-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>{auction.location}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 font-medium mb-8 flex-grow">{auction.description}</p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-md">
                    Register to Bid
                  </Link>
                  <Link to="/inventory" className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
                    View Catalog <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
