export default function Footer() {
  return (
    <footer className="bg-on-background text-white w-full px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-auto">
      <div className="relative z-10 flex flex-col gap-6 pr-8">
        <div className="font-bold text-2xl tracking-tight text-white">
          HERESTRONG MACHINERY <span className="text-primary">LTD</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Leading manufacturer of heavy construction machinery, specializing in excavators and wheel loaders. Building the infrastructure of tomorrow.
        </p>
      </div>
      
      <div className="relative z-10">
        <p className="font-bold text-lg mb-6 text-white">Products</p>
        <ul className="space-y-4 text-sm">
          <li><a className="text-white/60 hover:text-primary transition-colors" href="/products">Excavators</a></li>
        </ul>
      </div>
      
      <div className="relative z-10">
        <p className="font-bold text-lg mb-6 text-white">Company</p>
        <ul className="space-y-4 text-sm">
          <li><a className="text-white/60 hover:text-primary transition-colors" href="/about">About Us</a></li>
          <li><a className="text-white/60 hover:text-primary transition-colors" href="/cases">Success Cases</a></li>
          <li><a className="text-white/60 hover:text-primary transition-colors" href="/advantages">Our Advantages</a></li>
        </ul>
      </div>
      
      <div className="relative z-10">
        <p className="font-bold text-lg mb-6 text-white">Contact</p>
        <div className="text-white/60 text-sm space-y-4">
          <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">call</span> +86-15666793337</p>
          <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">mail</span> info@herestrong.cn</p>
          <p className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span> No.67 Shiniushan Road, Licang District,<br/>Qingdao, China</p>
          <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">chat</span> WhatsApp: +86-15666793337</p>
          <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">forum</span> WeChat: +86-15666793337</p>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <div>
          © {new Date().getFullYear()} HERESTRONG MACHINERY LTD. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
