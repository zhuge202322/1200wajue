"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import FeaturedSlider from '@/components/FeaturedSlider';
import HotProducts from '@/components/HotProducts';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const slides = [
    '/images/banner/slide1.jpg',
    '/images/banner/slide2.jpg',
    '/images/banner/slide3.jpg',
    '/images/banner/slide4.jpg',
    '/images/banner/slide5.jpg',
    '/images/banner/slide6.jpg'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-background relative mt-[-80px] pt-24 md:pt-0">
        {/* Full width swiper slider */}
        <div className="w-full aspect-[4/3] sm:aspect-video md:h-[75vh] lg:h-[80vh] relative">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url('${src}')` }}>
                  {/* Dark gradient for transparent navbar visibility */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Actions Bar placed immediately below the hero slider */}
        <div className="w-full bg-on-background py-8">
          <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/products">
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors rounded-none">
                Explore Products
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-white hover:text-on-background transition-colors rounded-none">
                About Our Company
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-outline">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-outline">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">YEARS EXPERIENCE</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">COUNTRIES EXPORTED</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">PRODUCTION LINE</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">300</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">EMPLOYEES</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">CE</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">CERTIFICATED</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">24H/7DAYS</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">ONLINE SERVICE</div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedSlider />
      
      <HotProducts />

      {/* About Us Section */}
      <section className="py-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Video Side */}
            <div className="relative aspect-[4/3] w-full">
              <video 
                src="/videos/6b7c5b75b540b9229a5b0bc063ad96ec_raw.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover shadow-md"
              />
            </div>
            
            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">COMPANY INTRODUCTION</span>
                <h2 className="text-3xl md:text-4xl font-bold text-on-background leading-tight mb-6">
                  Qingdao Herestrong Machinery Co., Ltd.
                </h2>
                <div className="space-y-4 text-lg text-on-surface-variant">
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
              </div>
              
              <Link href="/about">
                <button className="border-2 border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-white transition-colors w-fit">
                  LEARN MORE ABOUT US
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Global Sales Network */}
      <section className="py-24 bg-surface-variant relative overflow-hidden border-t border-outline">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full max-w-7xl object-cover fill-on-background">
            <path d="M110.1,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S112.5,114.7,110.1,114.7z M125.5,108.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S127.9,108.8,125.5,108.8z M140.8,111.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S143.2,111.8,140.8,111.8z M156.2,111.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S158.6,111.8,156.2,111.8z M171.5,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S173.9,114.7,171.5,114.7z M186.9,105.9c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S189.3,105.9,186.9,105.9z M202.2,94c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S204.6,94,202.2,94z M217.6,88.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S220,88.1,217.6,88.1z M232.9,94c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S235.3,94,232.9,94z M248.3,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S250.7,82.2,248.3,82.2z M263.6,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S266,82.2,263.6,82.2z M279,76.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S281.4,76.3,279,76.3z M294.3,64.4c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S296.7,64.4,294.3,64.4z M309.7,73.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S312.1,73.3,309.7,73.3z M325,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S327.4,82.2,325,82.2z M340.4,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S342.8,82.2,340.4,82.2z M355.7,91.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S358.1,91.1,355.7,91.1z M371.1,97c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S373.5,97,371.1,97z M386.4,108.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S388.8,108.8,386.4,108.8z M401.8,105.9c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S404.2,105.9,401.8,105.9z M417.1,100c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S419.5,100,417.1,100z M432.5,97c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S434.9,97,432.5,97z M447.8,88.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S450.2,88.1,447.8,88.1z M463.2,79.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S465.6,79.2,463.2,79.2z M478.5,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S480.9,82.2,478.5,82.2z M493.9,73.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S496.3,73.3,493.9,73.3z M509.2,64.4c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S511.6,64.4,509.2,64.4z M524.6,73.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S527,73.3,524.6,73.3z M539.9,88.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S542.3,88.1,539.9,88.1z M555.3,100c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S557.7,100,555.3,100z M570.6,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S573,114.7,570.6,114.7z M586,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S588.4,114.7,586,114.7z M601.3,126.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S603.7,126.6,601.3,126.6z M616.7,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S619.1,114.7,616.7,114.7z M632,108.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S634.4,108.8,632,108.8z M647.4,100c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S649.8,100,647.4,100z M662.7,100c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S665.1,100,662.7,100z M678.1,97c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S680.5,97,678.1,97z M693.4,94c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S695.8,94,693.4,94z M708.8,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S711.2,82.2,708.8,82.2z M724.1,88.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S726.5,88.1,724.1,88.1z M739.5,82.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S741.9,82.2,739.5,82.2z M754.8,94c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S757.2,94,754.8,94z M770.2,105.9c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S772.6,105.9,770.2,105.9z M785.5,114.7c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S787.9,114.7,785.5,114.7z M800.9,126.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S803.3,126.6,800.9,126.6z M816.2,135.5c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S818.6,135.5,816.2,135.5z M831.6,126.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S834,126.6,831.6,126.6z M846.9,135.5c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S849.3,135.5,846.9,135.5z M862.3,144.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S864.7,144.3,862.3,144.3z M877.6,156.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S880,156.2,877.6,156.2z M893,171.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S895.4,171.1,893,171.1z M877.6,194.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S880,194.8,877.6,194.8z M862.3,212.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S864.7,212.6,862.3,212.6z M846.9,230.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S849.3,230.3,846.9,230.3z M831.6,242.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S834,242.2,831.6,242.2z M816.2,248.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S818.6,248.1,816.2,248.1z M800.9,260c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S803.3,260,800.9,260z M785.5,271.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S787.9,271.8,785.5,271.8z M770.2,289.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S772.6,289.6,770.2,289.6z M754.8,301.5c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S757.2,301.5,754.8,301.5z M739.5,301.5c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S741.9,301.5,739.5,301.5z M724.1,289.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S726.5,289.6,724.1,289.6z M708.8,289.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S711.2,289.6,708.8,289.6z M693.4,271.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S695.8,271.8,693.4,271.8z M678.1,254c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S680.5,254,678.1,254z M662.7,242.2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S665.1,242.2,662.7,242.2z M647.4,224.4c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S649.8,224.4,647.4,224.4z M632,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S634.4,206.6,632,206.6z M616.7,194.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S619.1,194.8,616.7,194.8z M601.3,177c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S603.7,177,601.3,177z M586,165.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S588.4,165.1,586,165.1z M570.6,153.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S573,153.3,570.6,153.3z M555.3,141.4c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S557.7,141.4,555.3,141.4z M539.9,153.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S542.3,153.3,539.9,153.3z M524.6,165.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S527,165.1,524.6,165.1z M509.2,182.9c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S511.6,182.9,509.2,182.9z M493.9,194.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S496.3,194.8,493.9,194.8z M478.5,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S480.9,206.6,478.5,206.6z M463.2,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S465.6,206.6,463.2,206.6z M447.8,188.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S450.2,188.8,447.8,188.8z M432.5,171.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S434.9,171.1,432.5,171.1z M417.1,165.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S419.5,165.1,417.1,165.1z M401.8,177c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S404.2,177,401.8,177z M386.4,194.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S388.8,194.8,386.4,194.8z M371.1,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S373.5,206.6,371.1,206.6z M355.7,212.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S358.1,212.6,355.7,212.6z M340.4,212.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S342.8,212.6,340.4,212.6z M325,194.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S327.4,194.8,325,194.8z M309.7,182.9c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S312.1,182.9,309.7,182.9z M294.3,165.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S296.7,165.1,294.3,165.1z M279,153.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S281.4,153.3,279,153.3z M263.6,153.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S266,153.3,263.6,153.3z M248.3,171.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S250.7,171.1,248.3,171.1z M232.9,188.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S235.3,188.8,232.9,188.8z M217.6,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S220,206.6,217.6,206.6z M202.2,212.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S204.6,212.6,202.2,212.6z M186.9,206.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S189.3,206.6,186.9,206.6z M171.5,188.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S173.9,188.8,171.5,188.8z M156.2,165.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S158.6,165.1,156.2,165.1z M140.8,144.3c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S143.2,144.3,140.8,144.3z M125.5,126.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S127.9,126.6,125.5,126.6z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Global Reach</h2>
            <h3 className="text-4xl font-bold text-on-background mb-6">Trusted Across 100+ Countries</h3>
            <p className="text-on-surface-variant text-lg">
              HERESTRONG excavators are operating on every continent. From the arctic cold to tropical heat, our machinery delivers relentless performance globally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-outline text-center hover:border-primary transition-colors shadow-sm">
              <div className="text-4xl font-bold text-on-background mb-2">100+</div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider">Countries Exported</div>
            </div>
            <div className="bg-white p-8 border border-outline text-center hover:border-primary transition-colors shadow-sm">
              <div className="text-4xl font-bold text-on-background mb-2">300+</div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider">Global Partners</div>
            </div>
            <div className="bg-white p-8 border border-outline text-center hover:border-primary transition-colors shadow-sm">
              <div className="text-4xl font-bold text-on-background mb-2">15k+</div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider">Machines Delivered</div>
            </div>
            <div className="bg-white p-8 border border-outline text-center hover:border-primary transition-colors shadow-sm">
              <div className="text-4xl font-bold text-on-background mb-2">24/7</div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider">Support Network</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-on-background text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your fleet?</h2>
          <p className="text-xl mb-10 text-white/70">Connect with our industrial consultants for specialized quotes and configuration support.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="px-6 py-4 rounded-none text-on-background min-w-[300px] border-none focus:outline-none focus:ring-4 focus:ring-primary/50"
            />
            <button className="bg-primary text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors rounded-none">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
