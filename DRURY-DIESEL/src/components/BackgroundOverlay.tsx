import backgroundImage from '@/assets/drury-diesel-background.jpg';

const BackgroundOverlay = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default BackgroundOverlay;