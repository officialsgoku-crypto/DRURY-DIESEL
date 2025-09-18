import heroHeaderBackground from '@/assets/hero-header-background.png';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <header
      className="relative overflow-hidden flex flex-col justify-center items-center text-center min-h-screen border-b-2 border-primary bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${heroHeaderBackground})`,
        backgroundSize: "contain", // show full image without cropping
      }}
    >
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-5 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Navigation */}
        <div className="absolute top-6 right-6">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 border border-transparent hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 text-sm md:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Centered Text */}
        <h1 className="m-0 text-5xl md:text-7xl font-bold tracking-wider uppercase text-shadow-lg text-white animate-fade-in">
          Drury Diesel Company
        </h1>

        {/* Warm gradient tagline */}
        <p className="mt-4 mb-0 font-bold text-xl md:text-3xl italic bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-fade-in animation-delay-300">
          Unleash Peak Performance - Your Heavy Diesel Mechanical Specialists Services
        </p>
      </div>
    </header>
  );
};

export default Header;
