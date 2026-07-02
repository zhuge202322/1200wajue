export default function Footer() {
  return (
    <footer className="bg-on-background text-white w-full px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-auto">
      <div className="relative z-10 flex flex-col gap-6 pr-8">
        <div className="font-bold text-2xl tracking-tight text-white">
          QINGDAO HERESTRONG MACHINERY <span className="text-primary">CO.</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Qingdao Herestrong Machinery Co.,Ltd is one of leading enterprises established in 2017, specialized in researching, developing and manufacturing small hydraulic crawler excavators ranging from 1 ton to 6 tons.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-white/60 hover:text-primary transition-colors" title="Facebook">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-primary transition-colors" title="YouTube">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
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
          © {new Date().getFullYear()} QINGDAO HERESTRONG MACHINERY CO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
