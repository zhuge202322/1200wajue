import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* About Header */}
      <section className="pt-32 pb-16 bg-surface-variant border-b border-outline">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-on-background uppercase tracking-tight mb-4">
            About <span className="text-primary">HERESTRONG</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-3xl">
            Leading the future of compact excavation through innovation, quality, and global reach.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Corporate Identity</h2>
            <h3 className="text-3xl font-bold text-on-background mb-6 leading-tight">
              Qingdao Herestrong Machinery Co., Ltd.
            </h3>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Qingdao Herestrong Machinery Co.,Ltd is one of leading enterprises established in 2017, specialized in researching, developing and manufacturing small hydraulic crawler excavators ranging from 1 ton to 6 tons, available in both diesel and pure electric versions. Our excavators are mainly divided into NT Series and HS Series. HS Series are Tailless excavators for precise excavation work in confined spaces. Our factory covers an area of about 150,000 square meters, has about 300 employees in peak season, annual sales reached about USD20 million.
              </p>
              <p>
                Basing on advanced equipment, excellent facilities, strict quality control and normative management system, products have been exporting to more than 100+ countries and successfully passed CE certificate and a Declaration of Conformity according to the EU Machinery Directive. We are keeping developing and completing our own brand "HERESTRONG", of course OEM is also welcome.
              </p>
              <p>
                We are always following ISO9001 international quality management system to control product quality, welcome to visit our factory to test HERESTRONG excavators for future business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-outline pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">150k</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Sqm Factory Area</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Skilled Employees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Countries Exported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">$20M</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Annual Sales</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-surface-dim overflow-hidden shadow-md group">
                  <img src="/images/about/4/4.jpg" alt="Global Shipping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="aspect-square bg-surface-dim overflow-hidden shadow-md group">
                  <img src="/images/about/4/2.jpg" alt="Our Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-surface-dim overflow-hidden shadow-md group">
                  <img src="/images/about/4/3.png" alt="Manufacturing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="aspect-[4/5] bg-surface-dim overflow-hidden shadow-md group">
                  <img src="/images/about/4/1.jpg" alt="Factory Overview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certification */}
      <section className="py-24 bg-on-background text-white relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Global Standards</h2>
            <h3 className="text-4xl font-bold mb-8">Strict Quality Control</h3>
            <div className="text-white/70 leading-relaxed mb-12 space-y-6">
              <p>
                Based on advanced equipment, excellent facilities, strict quality control, and a normative management system, our products successfully pass CE certification and hold a Declaration of Conformity according to the EU Machinery Directive.
              </p>
              <p>
                We strictly follow the ISO9001 international quality management system to control product quality at every stage of the manufacturing process—from raw steel to the final hydraulic test.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 px-6 py-3 border border-white/20 font-bold tracking-widest uppercase text-sm">CE Certified</div>
              <div className="bg-white/10 px-6 py-3 border border-white/20 font-bold tracking-widest uppercase text-sm">ISO 9001</div>
              <div className="bg-white/10 px-6 py-3 border border-white/20 font-bold tracking-widest uppercase text-sm">EU Compliant</div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-auto bg-white/5 border-4 border-white/10 p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src="/images/about/cert1.jpg" alt="Certifications" className="w-full h-auto" />
             </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-surface-variant text-center border-t border-outline">
        <h2 className="text-3xl font-bold text-on-background mb-6">Partner with HERESTRONG</h2>
        <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
          We are constantly developing our own brand while also welcoming OEM partnerships. Visit our factory to test HERESTRONG excavators for your future business.
        </p>
        <Link href="/inquiry">
          <button className="bg-primary text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-primary-hover shadow-lg transition-colors">
            Contact Us Today
          </button>
        </Link>
      </section>
    </div>
  );
}
