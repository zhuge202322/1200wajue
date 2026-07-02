export default function Footer() {
  return (
    <footer className="bg-on-background text-white w-full px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-auto">
      <div className="relative z-10 flex flex-col gap-6 pr-8">
        <div className="font-bold text-2xl tracking-tight text-white">
          HERESTRONG MACHINERY
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Qingdao Herestrong Machinery Co.,Ltd is one of leading enterprises established in 2017, specialized in researching, developing and manufacturing small hydraulic crawler excavators ranging from 1 ton to 6 tons.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity" title="Facebook">
            <svg className="w-8 h-8" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" title="YouTube">
            <svg className="w-8 h-8" fill="#FF0000" viewBox="0 0 24 24">
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
          © {new Date().getFullYear()} HERESTRONG MACHINERY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
