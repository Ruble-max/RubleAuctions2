import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, SlidersHorizontal } from 'lucide-react';

export default function Inventory() {
  const trucks = [
    { id: 1, year: 2021, make: 'Peterbilt', model: '579', type: 'Sleeper Truck', bid: '$42,500', image: 'https://images.unsplash.com/photo-1586191552066-e52fd15cbef5?q=80&w=800&auto=format&fit=crop', lot: '104' },
    { id: 2, year: 2019, make: 'Ford', model: 'F-550 Service Body', type: 'Service Truck', bid: '$15,000', image: 'https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=800&auto=format&fit=crop', lot: '212' },
    { id: 3, year: 2020, make: 'Freightliner', model: 'Cascadia', type: 'Day Cab', bid: '$38,000', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop', lot: '118' },
    { id: 4, year: 2018, make: 'Kenworth', model: 'T880 Dump', type: 'Dump Truck', bid: '$65,000', image: 'https://images.unsplash.com/photo-1587293852726-0d628af1d452?q=80&w=800&auto=format&fit=crop', lot: '305' },
    { id: 5, year: 2022, make: 'Mack', model: 'Anthem', type: 'Sleeper Truck', bid: '$55,000', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop', lot: '142' },
    { id: 6, year: 2017, make: 'International', model: 'WorkStar', type: 'Box Truck', bid: '$22,000', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop', lot: '208' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-2">Inventory</h1>
            <p className="text-slate-600 font-medium">Browse our current selection of commercial trucks and equipment.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative flex-grow md:w-64">
              <input 
                type="text" 
                placeholder="Search make, model, lot #..." 
                className="w-full pl-10 pr-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
            </div>
            <button className="bg-slate-900 text-white px-4 py-3 rounded flex items-center gap-2 font-bold uppercase tracking-wide md:hidden">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 sticky top-28">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <SlidersHorizontal className="w-5 h-5 text-red-600" />
                <h2 className="font-black uppercase tracking-wide text-slate-900">Filters</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-3">Category</h3>
                <div className="space-y-2">
                  {['Sleeper Trucks', 'Day Cabs', 'Dump Trucks', 'Service Trucks', 'Box Trucks', 'Trailers'].map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-600" />
                      <span className="text-slate-700 font-medium group-hover:text-red-600 transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-3">Make</h3>
                <div className="space-y-2">
                  {['Freightliner', 'Peterbilt', 'Kenworth', 'Volvo', 'Mack', 'Ford'].map(make => (
                    <label key={make} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-600" />
                      <span className="text-slate-700 font-medium group-hover:text-red-600 transition-colors">{make}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 rounded font-bold text-sm uppercase tracking-widest transition-colors">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {trucks.map(truck => (
                <div key={truck.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <img src={truck.image} alt={`${truck.year} ${truck.make} ${truck.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">Lot #{truck.lot}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{truck.type}</div>
                    <h3 className="font-black text-lg text-slate-900 leading-tight mb-4">{truck.year} {truck.make} {truck.model}</h3>
                    <div className="mt-auto">
                      <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                        <div>
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Bid</div>
                          <div className="font-black text-2xl text-slate-900">{truck.bid}</div>
                        </div>
                        <Link to={`/inventory/${truck.id}`} className="bg-slate-100 hover:bg-red-600 hover:text-white text-slate-900 p-2 rounded transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 px-8 py-3 rounded font-black text-sm uppercase tracking-widest transition-all">
                Load More Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
