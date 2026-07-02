import React from 'react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <a 
        href="https://wa.me/8615666793337" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative"
        title="WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute right-full mr-4 bg-black/80 text-white px-3 py-1.5 rounded text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
      </a>
      
      {/* Email */}
      <a 
        href="/inquiry" 
        className="w-14 h-14 bg-[#0052CC] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative"
        title="Email"
      >
        <span className="material-symbols-outlined text-3xl">mail</span>
        <span className="absolute right-full mr-4 bg-black/80 text-white px-3 py-1.5 rounded text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Email
        </span>
      </a>
      
      {/* Alibaba */}
      <a 
        href="https://herestrongmachinery.en.alibaba.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#FF6A00] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative"
        title="Alibaba Shop"
      >
        <span className="material-symbols-outlined text-3xl">storefront</span>
        <span className="absolute right-full mr-4 bg-black/80 text-white px-3 py-1.5 rounded text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Alibaba Shop
        </span>
      </a>
    </div>
  );
}
