"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '@/lib/data';

export default function FeaturedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = products.filter(p => p.series === 'NT' || p.series === 'HS').slice(0, 5); // Take 5 for the slider
  const activeProduct = featured[activeIndex];

  return (
    <section className="py-24 bg-white border-y border-outline relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-on-surface-variant mb-2">- Featured Products -</h2>
        </div>

        {/* Main Display Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          
          {/* Left: Specs & Details */}
          <div className="w-full lg:w-1/2">
            <div className="bg-primary px-6 py-4 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
                {activeProduct.name.split(' ')[0]}
              </h3>
            </div>

            <ul className="space-y-2 mb-10 text-on-surface-variant text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">»</span> {activeProduct.engine}
              </li>
              {activeProduct.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary font-bold">»</span> {f}
                </li>
              ))}
            </ul>

            <div className="space-y-4 mb-10 divide-y divide-outline border-b border-outline">
              <div className="flex justify-between items-end pb-2">
                <span className="text-sm text-on-surface-variant">Operating weight</span>
                <span className="text-2xl font-bold text-on-background">{activeProduct.specs['Operating Weight'] || activeProduct.weight}</span>
              </div>
              <div className="flex justify-between items-end pt-4 pb-2">
                <span className="text-sm text-on-surface-variant">Rated power</span>
                <span className="text-2xl font-bold text-on-background">{activeProduct.specs['Rated Power'] || activeProduct.power}</span>
              </div>
              {activeProduct.specs['Bucket Capacity'] && (
                <div className="flex justify-between items-end pt-4 pb-2">
                  <span className="text-sm text-on-surface-variant">Bucket capacity</span>
                  <span className="text-2xl font-bold text-on-background">{activeProduct.specs['Bucket Capacity']}</span>
                </div>
              )}
            </div>

            <Link href={`/products/${activeProduct.id}`}>
              <button className="bg-primary text-white font-bold uppercase tracking-wider px-8 py-3 hover:bg-primary-hover transition-colors shadow-md flex items-center gap-2">
                View Detail <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </Link>
          </div>

          {/* Right: Large Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
               <img 
                 src={activeProduct.image} 
                 alt={activeProduct.name} 
                 className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-500 ease-in-out" 
               />
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="relative pt-8 border-t border-outline">
          {/* Custom Indicator Triangle */}
          <div 
             className="absolute top-0 -mt-2 w-4 h-4 bg-primary transform rotate-45 transition-all duration-500" 
             style={{ left: `calc(${(activeIndex / featured.length) * 100}% + ${(100 / featured.length) / 2}%)`, marginLeft: '-8px' }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          
          <div className="flex justify-between items-center mt-6 overflow-x-auto gap-4 snap-x">
            {featured.map((p, idx) => (
              <div 
                key={p.id} 
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center cursor-pointer min-w-[120px] snap-center group transition-all duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <div className="w-24 h-24 mb-2 bg-surface-dim rounded-sm overflow-hidden border border-outline group-hover:border-primary transition-colors">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <span className={`text-xs font-bold uppercase ${activeIndex === idx ? 'text-primary' : 'text-on-background'}`}>
                  {p.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
