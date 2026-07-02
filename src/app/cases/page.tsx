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
      images: Array.from({length: 5}, (_, i) => `/images/cases/case2/${i+1}.jpg`)
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
    <main className="flex-grow pt-[136px]">
      {/* Hero Section */}
      <div className="bg-surface-dim py-20 px-8 border-b border-outline">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-on-background uppercase tracking-tight mb-6">
            Success Cases
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Discover how HERESTRONG machinery is empowering customers across the globe to achieve maximum efficiency in various working conditions.
          </p>
        </div>
      </div>

      {/* Cases List */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-32">
        {cases.map((c, index) => (
          <div key={c.id} className="flex flex-col gap-12">
            {/* Text Area */}
            <div className="max-w-4xl mx-auto text-center px-4">
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-on-background mb-6 uppercase tracking-wider">
                {c.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                {c.text}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {c.images.map((imgSrc, imgIdx) => (
                <div key={imgIdx} className="aspect-[4/3] bg-surface-dim overflow-hidden shadow-sm group border border-outline hover:border-primary transition-colors">
                  <img 
                    src={imgSrc} 
                    alt={`Case ${index+1} image ${imgIdx+1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
