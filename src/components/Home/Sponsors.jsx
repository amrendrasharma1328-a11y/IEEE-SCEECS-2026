import { cloudinaryImage } from '@/utils/cloudinary';
import { LogoCarousel } from '../ui/logo-carousel';

const sponsorImages = [
  cloudinaryImage("/sponsors/1.png"),
  cloudinaryImage("/sponsors/2.png"),
  cloudinaryImage("/sponsors/3.png"),
  cloudinaryImage("/sponsors/4.png"),
  cloudinaryImage("/sponsors/5.png"),
  cloudinaryImage("/sponsors/6.png"),
  cloudinaryImage("/sponsors/7.png"),
  cloudinaryImage("/sponsors/balsamiq2.png"),
  cloudinaryImage("/sponsors/coding-thinker-logo.png"),
  cloudinaryImage("/sponsors/codingNinjas.png"),
  cloudinaryImage("/sponsors/EDtimes.png"),
  cloudinaryImage("/sponsors/hitbullseye-logo.png"),
  cloudinaryImage("/sponsors/ibuddy2.png"),
  cloudinaryImage("/sponsors/RagaAI.png"),
];

// Convert image paths to logo objects with img components
const sponsorLogos = sponsorImages.map((src, index) => ({
  id: index,
  img: ({ className }) => (
    <img
      src={src}
      alt={`Sponsor ${index + 1}`}
      className={className}
    />
  ),
}));

// Split logos into two halves
const firstHalf = sponsorLogos.slice(0, Math.ceil(sponsorLogos.length / 2));
const secondHalf = sponsorLogos.slice(Math.ceil(sponsorLogos.length / 2));

function Sponsors() {
  return (
    <div className=" bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-600">
            Past Technical Sponsors
          </h2>
        </div>

        {/* Logo Carousels - Top and Bottom */}
        <div className="mt-12 flex flex-col gap-8 md:gap-12 justify-center items-center overflow-hidden">
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={firstHalf} columnCount={4} mobileColumnCount={2} />
          </div>
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={secondHalf} columnCount={4} mobileColumnCount={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
