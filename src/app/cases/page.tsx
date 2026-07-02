import React from 'react';

export const metadata = {
  title: 'Success Cases | HERESTRONG MACHINERY',
  description: 'Discover how HERESTRONG machinery is empowering customers across the globe to achieve maximum efficiency in various working conditions.',
};

export default function CasesPage() {
  const cases = [
    {
      id: 'case1',
      title: 'Customer Case 1',
      text: 'The customer received our HS12U (HS12-6) mini excavator and was very excited to immediately share his joy with us. He is extremely satisfied with our machine, because the HS12U is a truly excellent machine. Its standard configuration includes a Kubota engine, boom side-swing function, retractable undercarriage, high and low speed functions, and compatibility with different widths of buckets, as well as attachments such as a ripper, rake, auger, hammer, and more. The customer has established a long-term cooperative relationship with us.',
      images: Array.from({length: 3}, (_, i) => `/images/cases/case1/${i+1}.jpg`)
    },
    {
      id: 'case2',
      title: 'Customer Case 2',
      text: 'Our customer in Northern Europe is using our HS12U (HS12-6) mini excavator for indoor floor demolition work. The hydraulic breaker we provided is very easy to use and has greatly improved working efficiency. The width of this machine can reach 750 mm, making it highly flexible for indoor operation.',
      images: Array.from({length: 3}, (_, i) => `/images/cases/case2/${i+1}.jpg`)
    },
    {
      id: 'case3',
      title: 'Customer Case 3',
      text: 'The NT18DR is a machine we have been producing since 2004. It features a highly advanced configuration, including an imported hydraulic system and a 14 kW Kubota engine that meets European emission standards. This model is one of our best-selling machines. It has an extremely low failure rate, and customers are very satisfied with its performance.',
      images: Array.from({length: 4}, (_, i) => `/images/cases/case3/${i+1}.jpg`)
    },
    {
      id: 'case4',
      title: 'Customer Case 4',
      text: 'The HERESTRONG HS27 is a compact and robust mini-excavator designed for maximum performance in construction, road building, gardening and landscaping, demolition and earthmoving. Thanks to the combination of powerful YANMAR engine, zero-tail swing design and advanced hydraulics, this machine is ideal for both tight urban working environments and larger construction projects.',
      images: Array.from({length: 3}, (_, i) => `/images/cases/case4/${i+1}.jpg`)
    }
  ];

  return (
    <main className="flex-grow pt-[136px] bg-background font-sans">
      {/* Hero Section */}
      <div className="bg-surface-dim py-20 px-8 border-b border-outline relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/images/pattern.svg)', backgroundSize: '20px' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-on-background uppercase tracking-tight mb-6">
            Success Cases
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Discover how HERESTRONG machinery is empowering customers across the globe to achieve maximum efficiency in various working conditions.
          </p>
        </div>
      </div>

      {/* Cases List */}
      <div className="w-full">
        {cases.map((c, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={c.id} className={`w-full py-24 ${isEven ? 'bg-background' : 'bg-surface-dim border-y border-outline/50'}`}>
              <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16">
                
                {/* Text Area */}
                <div className={`w-full lg:w-2/5 flex flex-col gap-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="material-symbols-outlined text-primary text-5xl opacity-40 -mb-4">format_quote</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-on-background uppercase tracking-wider">
                    {c.title}
                  </h2>
                  <div className="w-16 h-1 bg-primary mb-2"></div>
                  <p className="text-on-surface-variant leading-relaxed text-lg text-justify">
                    {c.text}
                  </p>
                </div>

                {/* Gallery Area */}
                <div className={`w-full lg:w-3/5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {c.images.length === 3 ? (
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
                      {/* Featured large image */}
                      <div className="row-span-2 col-span-1 overflow-hidden group shadow-lg">
                        <img 
                          src={c.images[0]} 
                          alt={`${c.title} image 1`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                      </div>
                      {/* Two smaller images */}
                      <div className="row-span-1 col-span-1 overflow-hidden group shadow-md">
                        <img 
                          src={c.images[1]} 
                          alt={`${c.title} image 2`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                      </div>
                      <div className="row-span-1 col-span-1 overflow-hidden group shadow-md">
                        <img 
                          src={c.images[2]} 
                          alt={`${c.title} image 3`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
                      {/* 4 images grid */}
                      {c.images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="col-span-1 row-span-1 overflow-hidden group shadow-md">
                          <img 
                            src={imgSrc} 
                            alt={`${c.title} image ${imgIdx+1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
