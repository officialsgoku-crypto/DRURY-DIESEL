const Gallery = () => {
  const galleryImages = [
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed3e83c0-4d28-4153-a9e6-206dcd982e30.png",
      alt: "Close-up view of a diesel engine being repaired in a professional workshop with mechanics using specialized tools and equipment"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/567145ae-929e-4825-ad4c-6f3ffd6fabb1.png",
      alt: "Technician inspecting truck tires and wheels in an outdoor inspection area with safety gear and checklist in hand"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2d468378-f484-4d31-89b7-0b9d543b7d93.png",
      alt: "Interior view of truck cab with electrical panel and wiring connections being checked for faults by electrician"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2f8364ed-a110-4ba4-ba40-50ab4e268265.png",
      alt: "Mechanic adjusting brake components on a heavy truck in a garage setting with hydraulic tools and parts"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/354f301d-bd39-43fc-91a3-680e18b3621c.png",
      alt: "Row of diesel trucks in a maintenance yard, each undergoing service checks with oil and tools visible"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a288ea9-0be9-4a44-8844-95fb142b6aed.png",
      alt: "Mobile service van parked at roadside assisting a broken down truck with emergency repair equipment"
    }
  ];

  return (
    <section id="gallery" className="hero-gradient py-10 px-8 mt-0 text-foreground text-center">
      <h2 className="text-primary mb-8 text-4xl font-bold">Image Gallery</h2>
      <p className="mb-8 text-lg">Explore our professional workshop and service highlights.</p>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item parallax-section">
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg industrial-shadow transition-transform duration-300 hover:scale-110 hover:glow-shadow"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;