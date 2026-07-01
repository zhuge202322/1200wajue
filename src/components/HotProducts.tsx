"use client";

import React from 'react';
import Link from 'next/link';
import { products } from '@/lib/data';

export default function HotProducts() {
  // Display all products in a grid, matching the 4-column style in the screenshot
  // Using an elegant dark background with primary text accent instead of overwhelming solid orange
  return (
    <section className="py-24 bg-on-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-widest">
            - HOT PRODUCTS -
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-white group relative shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-transparent hover:border-primary">
              {/* Product Image */}
              <Link href={`/products/${product.id}`} className="block aspect-[4/3] relative overflow-hidden bg-surface-dim">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              {/* Content */}
              <div className="px-6 pb-6 pt-4 flex flex-col flex-grow border-t border-outline/30">
                <Link href={`/products/${product.id}`}>
                  <h4 className="text-xl font-bold text-on-background mb-4 group-hover:text-primary transition-colors">
                    {product.name.split(' ')[0]}
                  </h4>
                </Link>
                
                <ul className="space-y-1 mb-8 text-xs text-on-surface-variant flex-grow">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">»</span> 
                    <span className="line-clamp-1">{product.engine}</span>
                  </li>
                  {product.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary font-bold">»</span> 
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Red Plus Button equivalent (using primary color) */}
                <div className="mt-auto">
                  <Link href={`/products/${product.id}`}>
                    <button className="bg-primary text-white w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-primary-hover transition-colors shadow-sm">
                      +
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
