import React from 'react';
import Link from 'next/link';
import { products } from '@/lib/data';

export default function ProductsPage() {
  const ntSeries = products.filter(p => p.series === 'NT');
  const hsSeries = products.filter(p => p.series === 'HS');

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white border border-outline group">
      <Link href={`/products/${product.id}`} className="block relative h-64 overflow-hidden bg-surface-dim">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
      </Link>
      <div className="p-8">
        <Link href={`/products/${product.id}`}>
          <h4 className="text-2xl font-bold text-on-background mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
        </Link>
        <p className="text-sm font-semibold text-primary mb-4">{product.engine}</p>
        <p className="text-on-surface-variant mb-6 line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </p>
        <Link href={`/products/${product.id}`} className="inline-flex items-center gap-2 font-bold text-on-background uppercase tracking-wider hover:text-primary transition-colors text-sm border-b-2 border-primary pb-1">
          View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface-variant border-b border-outline">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-on-background uppercase tracking-tight mb-4">
            HERESTRONG MINI EXCAVATORS
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-3xl">
            Compact and robust mini-excavator designed for maximum performance in construction, road building, gardening and landscaping, demolition and earthmoving.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 max-w-7xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left Sidebar Menu */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <div className="sticky top-32 bg-white border border-outline p-6">
            <h3 className="font-bold text-lg text-on-background mb-6 uppercase tracking-wider border-b border-outline pb-4">Categories</h3>
            <ul className="space-y-4">
              <li>
                <a href="#nt-series" className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors font-semibold">
                  <span>NT Series Excavators</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </li>
              <li>
                <a href="#hs-series" className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors font-semibold">
                  <span>HS Series Excavators (Tailless)</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-outline">
              <h4 className="font-bold text-sm text-on-background mb-3">Can't decide?</h4>
              <p className="text-sm text-on-surface-variant mb-4">Contact our specialists to help configure the perfect machine for your project.</p>
              <Link href="/inquiry">
                <button className="w-full bg-surface-dim text-on-background border border-outline py-3 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="w-full lg:w-3/4 space-y-20">
          
          {/* NT Series */}
          <div id="nt-series" className="scroll-mt-32">
            <div className="mb-10 border-b border-outline pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-on-background">NT Series Excavators</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ntSeries.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>

          {/* HS Series */}
          <div id="hs-series" className="scroll-mt-32">
            <div className="mb-10 border-b border-outline pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-on-background">HS Series</h2>
                <p className="text-on-surface-variant mt-2">Zero-Tail Swing Excavators for Confined Spaces</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hsSeries.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
