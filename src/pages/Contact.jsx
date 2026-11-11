import { cloudinaryImage } from '@/utils/cloudinary';
import { PixelImage } from '../components/pixel-image';
import Hero from '@/components/Hero';

const teamMembers = [
  {
    name: "Mr. Rahul Agarwal",
    role: "Organizing Co-chair",
    image: cloudinaryImage("/contactTeam/RahulAgarwal.jpg"),
    linkedin: "https://www.linkedin.com/in/rahul-agarwal-845636282/"
  },
  {
    name: "Mr. Ayush Kumar",
    role: "Publication Co-chair",
    image: cloudinaryImage("/contactTeam/Ayush.jpg"),
    linkedin: "https://www.linkedin.com/in/ayush-kumar-manit-bhopal/"
  },
  {
    name: "Ms. Prerna Chaurasiya",
    role: "Publication Co-chair",
    image: cloudinaryImage("/contactTeam/prerna.jpeg"),
    linkedin: "https://www.linkedin.com/in/prernaaa30/"
  },
  {
    name: "Ms. Tanvi Sundarkar",
    role: "Finance Co-chair",
    image: cloudinaryImage("/contactTeam/tanvi.jpg"),
    linkedin: "https://www.linkedin.com/in/tanvi-sundarkar-b62088280/"
  }
];

function Contact() {
  return (
    <>
      <Hero src={cloudinaryImage("/background/11.jpg")} content="Contact" />

      <div className="min-h-screen bg-white py-8 sm:py-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-purple-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2">Get In Touch With Us</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              IEEE SCEECS 2027
            </h1>
            <div className="flex justify-center">
              <svg
                className="w-24 sm:w-32 h-2 text-pink-400"
                viewBox="0 0 128 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 mb-10 sm:mb-16">
            {/* Left Card - Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between">
              <div>
                <h2 className="text-purple-600 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Bhopal, MP, India</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:ieeemanitstudentbranch@gmail.com"
                      className="text-gray-700 text-xs sm:text-sm md:text-base break-all hover:text-purple-600 transition-colors"
                    >
                      ieeemanitstudentbranch@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Card - IEEE - MSB */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between">
              <div>
                <h2 className="text-pink-600 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">IEEE - MSB</h2>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  c/o Dr. Dheeraj Kumar Agarwal, Branch Counsellor Professor, Department of Electronics and Communication Engineering.
                </p>
              </div>
            </div>

            {/* Right Card - Email Us */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between">
              <div>
                <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Email Us</h2>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  We reply to emails within 1-2 working days. Please feel free to reach out with any questions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Team Section */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-16 border-t border-gray-200">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-purple-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2">Welcome To SCEECS'27</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
                Contact Team
              </h2>
              <div className="flex justify-center">
                <svg
                  className="w-24 sm:w-32 h-2 text-pink-400"
                  viewBox="0 0 128 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mt-8 sm:mt-12 justify-items-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center px-2 sm:px-6">
                  <div className="mb-4 sm:mb-6 w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 max-w-full rounded-xl overflow-hidden shadow-md">
                    <PixelImage
                      src={member.image}
                      grid="6x4"
                      grayscaleAnimation={true}
                      pixelFadeInDuration={2000}
                      maxAnimationDelay={2400}
                      colorRevealDelay={2600}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 text-xs sm:text-sm text-center font-medium mb-3 sm:mb-4">
                    {member.role}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs sm:text-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
