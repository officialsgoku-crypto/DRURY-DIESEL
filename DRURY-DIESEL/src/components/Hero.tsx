const Hero = () => {
  return (
    <section 
      className="parallax-section min-h-[500px] flex items-center justify-center text-center text-foreground relative cursor-pointer bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b764fc22-46cf-42d2-9658-0bcc096e04d9.png')"
      }}
      aria-label="Hero image showcasing heavy diesel trucks in a dynamic cityscape setting"
    >
      <h2 className="text-4xl md:text-6xl font-bold bg-black/80 py-8 px-12 rounded-xl border-2 border-primary text-shadow">
        Heavy Diesel Mechanical Specialists
      </h2>
    </section>
  );
};

export default Hero;