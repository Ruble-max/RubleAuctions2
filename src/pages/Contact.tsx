import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            Get In <span className="text-red-600">Touch.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            Have questions about buying, selling, or an upcoming auction? Our team of truck experts is ready to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 font-medium mb-4">
                  Mon - Fri: 8:00 AM - 5:00 PM EST<br/>
                  Sat: 8:00 AM - 12:00 PM EST
                </p>
                <a href="tel:+12604936182" className="text-2xl font-black text-red-600 hover:text-red-700 transition-colors">
                  (260) 493-6182
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 font-medium mb-4">Drop us a line anytime. We typically respond within 1 business day.</p>
                <a href="mailto:info@rubletrucks.com" className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors">
                  info@rubletrucks.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl uppercase tracking-wide text-slate-900 mb-2">Headquarters</h3>
                <p className="text-slate-600 font-medium">
                  RTA<br />
                  Fort Wayne, IN<br />
                  (Contact us for specific auction yard locations)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-6">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email *</label>
                      <input type="email" className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">I am interested in... *</label>
                    <select className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" required>
                      <option value="">Select a topic</option>
                      <option value="buying">Buying Trucks / Bidding</option>
                      <option value="selling">Selling / Consigning Trucks</option>
                      <option value="support">Account Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Message *</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded bg-slate-50 border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600" placeholder="How can we help you?" required></textarea>
                  </div>

                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-black text-sm uppercase tracking-widest transition-colors shadow-lg w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
