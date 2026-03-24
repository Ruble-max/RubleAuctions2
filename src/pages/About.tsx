import { Link } from 'react-router-dom';
import { Wrench, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            Built on <span className="text-red-600">Trust.</span> Driven by <span className="text-red-600">Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            RTA was founded to fix the broken commercial equipment marketplace. We bring transparency, speed, and fairness to buying and selling heavy-duty trucks.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-4">No-Nonsense Approach</h3>
              <p className="text-slate-600 font-medium">We know trucks. We don't hide flaws, and we don't play games with reserves. What you see is exactly what you get.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-4">Guaranteed Titles</h3>
              <p className="text-slate-600 font-medium">Every asset we sell comes with a guaranteed clear title. We handle all the escrow and transfer paperwork securely.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-4">Built for Fleets</h3>
              <p className="text-slate-600 font-medium">Whether you're an owner-operator buying your first rig or a fleet manager liquidating 50 units, we treat you with the same respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-8">Experience the RTA Difference</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/inventory" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg">
              Browse Inventory
            </Link>
            <Link to="/sell" className="bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-all">
              Sell Your Equipment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
