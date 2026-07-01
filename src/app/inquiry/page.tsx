import React from 'react';

export default function InquiryPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface-variant border-b border-outline">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-on-background uppercase tracking-tight mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-3xl">
            Get in touch with Qingdao Herestrong Machinery for quotes, partnerships, and technical support.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-on-background mb-8">Headquarters</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-background mb-1">Address</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    No.67 Shiniushan Road,<br/>
                    Licang District, Qingdao, China
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-background mb-1">Phone / WhatsApp / WeChat</h4>
                  <p className="text-on-surface-variant">+86-15666793337</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-background mb-1">Email</h4>
                  <p className="text-on-surface-variant">info@herestrong.cn</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-surface-variant border border-outline">
              <h4 className="font-bold text-on-background mb-3">Factory Visits Welcome</h4>
              <p className="text-sm text-on-surface-variant">
                We invite global partners to visit our 150,000 sqm manufacturing facility in Qingdao. Experience our stringent quality control and test our machines firsthand.
              </p>
            </div>
          </div>
          
          {/* Inquiry Form */}
          <div className="bg-white p-8 md:p-10 border border-outline shadow-sm">
            <h2 className="text-2xl font-bold text-on-background mb-6">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-variant border border-outline focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-variant border border-outline focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 bg-surface-variant border border-outline focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Interested Model (Optional)</label>
                <select className="w-full px-4 py-3 bg-surface-variant border border-outline focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a Series...</option>
                  <option value="nt">NT Series Excavators</option>
                  <option value="hs">HS Series Tailless Excavators</option>
                  <option value="oem">OEM Partnership</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Message *</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-surface-variant border border-outline focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Please describe your requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-wider py-4 hover:bg-primary-hover transition-colors mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
