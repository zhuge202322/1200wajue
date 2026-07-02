export const metadata = {
  title: 'Our Advantages | HERESTRONG MACHINERY',
  description: 'Why choose HERESTRONG MACHINERY? Discover our reliable quality, imported Japanese engines, simple operation, fast delivery, international certifications, and more.',
};

export default function AdvantagesPage() {
  const advantages = [
    {
      id: 1,
      icon: 'verified',
      title: 'Reliable Quality Machine',
      text: 'Herestrong excavator is crafted with high-quality materials for superior strength and reliability. Designed to withstand extreme conditions, our machines offer rust and corrosion resistance, easy maintenance, and long-lasting performance.'
    },
    {
      id: 2,
      icon: 'settings_motion_mode',
      title: 'Powered by Original Imported Japanese Engines',
      text: "Highly trusted in the compact industrial machinery market, the efficient combustion created by our engine's unique Three Vortex Combustion System reduces exhaust emission and noise. Its layout also puts most components within easy reach for faster maintenance. Furthermore, it is now fully Stage-V compliant."
    },
    {
      id: 3,
      icon: 'tune',
      title: 'Simple Operation',
      text: 'Load-sensing hydraulics provides smooth control. Plus its two-speed travel with automatic shifting and small size make this excavator quick and maneuverable, so you can easily move on to the next job.'
    },
    {
      id: 4,
      icon: 'local_shipping',
      title: 'Fast Delivery & Transportation',
      text: 'We arrange all processes in-house and with our extensive inventory, we can deliver your machines as your requirements. We have been cooperating with several famous shipping company such as MSC/MSK/ONE/CMA/COSCO... which help to save the shipping cost for you, And help you complete customs clearance quickly and efficiently.'
    },
    {
      id: 5,
      icon: 'workspace_premium',
      title: 'Certifications',
      text: 'All of Herestrong Machines are CE/TUV Approved, which ensure that all machines are legally sold and used all over the world.'
    },
    {
      id: 6,
      icon: 'rule',
      title: 'Professional International Inspection',
      text: 'Herestrong factory has various professional testing equipments and our own internal quality inspection system throughout the entire process, which make sure a stable level of quality of the machines.'
    },
    {
      id: 7,
      icon: 'support_agent',
      title: 'After-sales Service',
      text: 'We offer air delivery for the spareparts within 3-7 working days. Our sales team will assist you 24 hours online.'
    }
  ];

  return (
    <main className="flex-grow pt-[136px] bg-background font-sans min-h-screen">
      {/* Hero Section */}
      <div className="bg-surface-dim py-24 px-8 border-b border-outline">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-on-background uppercase tracking-tight mb-6">
            WHY CHOOSE US?
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Discover the core advantages that make HERESTRONG MACHINERY the preferred choice for customers worldwide.
          </p>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div 
              key={adv.id} 
              className="bg-surface-dim border border-outline p-8 group hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-300 ease-out flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-3xl">{adv.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-4 uppercase tracking-wide">
                {adv.id}. {adv.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed flex-grow">
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
