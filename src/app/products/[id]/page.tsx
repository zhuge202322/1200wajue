"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products.find(p => p.id === id);
  
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <section className="pt-32 pb-16 bg-on-background text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-8 justify-between items-end border-b border-white/20 pb-8">
          <div>
            <div className="text-primary font-bold tracking-widest uppercase mb-2">{product.series} SERIES</div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{product.name}</h1>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{product.weight}</div>
            <div className="text-white/60 text-sm uppercase tracking-widest font-bold">Operating Weight</div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-12">
          
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-surface-dim overflow-hidden shadow-md border border-outline">
              <Swiper
                onSwiper={setMainSwiper}
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="w-full h-full"
              >
                {product.gallery.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('${src}')` }}></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="h-24">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-full cursor-pointer"
              >
                {product.gallery.map((src, idx) => (
                  <SwiperSlide key={idx} onClick={() => mainSwiper?.slideTo(idx)}>
                    <div className="w-full h-full bg-cover bg-center opacity-50 hover:opacity-100 transition-opacity [&.swiper-slide-thumb-active]:opacity-100 border border-outline" style={{ backgroundImage: `url('${src}')` }}></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-on-background mb-6 border-b border-outline pb-4">Machine Overview</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
              {product.description}
            </p>
            
            <h3 className="text-lg font-bold text-on-background mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant bg-surface-variant p-4 border border-outline">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-outline shadow-sm">
            <div className="bg-surface-variant p-6 border-b border-outline">
              <h3 className="text-xl font-bold text-on-background uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings</span> Technical Specifications
              </h3>
            </div>
            
            <div className="divide-y divide-outline">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={idx} className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-surface-dim transition-colors">
                  <span className="text-on-surface-variant font-bold text-sm uppercase tracking-wider mb-1 sm:mb-0 w-full sm:w-1/2">{key}</span>
                  <span className="font-bold text-on-background text-left sm:text-right w-full sm:w-1/2 break-words">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-surface-variant border-t border-outline">
               <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                 Specifications are subject to change without prior notice. For detailed dimensions, digging curves, and custom configurations, please contact our sales team.
               </p>
               <Link href="/inquiry">
                 <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors shadow-md">
                   Request Official Quote
                 </button>
               </Link>
            </div>
          </div>

          <div className="bg-on-background text-white p-8 border-l-4 border-primary">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Need Help?</h3>
            <p className="text-white/70 text-sm mb-6">Our engineers are ready to assist you with configurations and pricing.</p>
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-3xl">support_agent</span>
              <span className="font-bold text-xl tracking-wider">+86-15666793337</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
