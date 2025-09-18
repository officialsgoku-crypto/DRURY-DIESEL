import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  const services = [
    {
      id: 'pre-cof',
      title: 'Pre-COF and Servicing',
      description: 'We take the hassle out of keeping your truck road-ready. Our Pre-COF (Certificate of Fitness) checks ensure your vehicle meets all compliance and safety standards before inspection day.',
      details: [
        'Brakes, suspension, and steering',
        'Lights, electrics, and safety equipment',
        'Engine performance and fluid levels',
        'Tyres, wheels, and chassis condition'
      ],
      tagline: 'Drive in with confidence — leave knowing your truck is ready for the road and COF-approved.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c27454c-f0cf-47ad-afbe-12cdc6b631b7.png',
      alt: 'Detailed view of a mechanic inspecting truck brakes and suspension in a well-equipped diesel workshop with tools and safety equipment around'
    },
    {
      id: 'diagnostics',
      title: 'Diagnostics and General Repairs',
      description: 'We specialize in fast and accurate diagnostics to identify issues before they become costly problems. Using advanced diagnostic tools and years of hands-on expertise, we quickly pinpoint faults in your truck\'s engine, electrical, transmission, and emission systems.',
      details: [
        'Engine and drivetrain repairs',
        'Electrical and wiring faults',
        'Cooling and fuel system servicing',
        'Brake, suspension, and steering repairs'
      ],
      tagline: 'Reliable diagnostics. Quality repairs. Road-ready results.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b49a5dd9-35f5-4ff4-aa95-fa1a56a8f8f8.png',
      alt: 'Technicians using computerized diagnostic equipment on a large diesel truck engine in a high-tech repair facility with monitors displaying engine diagnostics'
    },
    {
      id: 'mobile-mechanic',
      title: 'Mobile Mechanic – Roadside Breakdowns',
      description: 'When your truck breaks down, time is money. That\'s why we offer a reliable Mobile Mechanic Service, available to get you back on the road fast.',
      details: [
        'Roadside diagnostics & fault finding',
        'Minor & urgent repairs on-site',
        'Electrical & battery issues',
        'Air, brake & suspension faults',
        'Fuel system & cooling system emergencies'
      ],
      tagline: 'Fast response. Professional service. Back on the road where you belong.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3add4447-75c1-48c2-b95e-2cd1a8a63dcc.png',
      alt: 'Mobile service van parked on a roadside highway with tools and equipment for on-site truck repairs, mechanics working beneath vehicle'
    },
    {
      id: 'fleet-maintenance',
      title: 'Fleet Maintenance',
      description: 'Keep your entire fleet running smoothly with our Fleet Maintenance Services. We understand that downtime costs money, so we provide proactive, reliable, and scheduled servicing to ensure your trucks are always road-ready.',
      details: [
        'Regular servicing & preventive maintenance',
        'Pre-COF inspections & compliance checks',
        'Diagnostics & fault repairs',
        'Brake, suspension & steering servicing',
        'Tyre, chassis & safety inspections'
      ],
      tagline: 'One team. One schedule. Maximum uptime.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8727451f-e09a-4144-8891-bd036d5b21d5.png',
      alt: 'Multiple trucks lined up in a maintenance yard with mechanics performing routine checks and servicing on engines and tires'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundOverlay />
      <Header />
      <Hero />
      
      <main className="container mx-auto px-5" role="main">
        <section id="services" className="py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                isOdd={index % 2 === 0}
              />
            ))}
          </div>
        </section>
        
        <ContactForm />
        <Gallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
