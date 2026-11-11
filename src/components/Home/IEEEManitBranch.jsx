import { cloudinaryImage } from '@/utils/cloudinary';
import React from 'react';

const IEEEManitBranch = () => {
  const members = [
    {
      name: "Dr. Dheeraj Kumar Agarwal",
      role: "Organizing Chair",
      membershipNo: "92205335",
      image: cloudinaryImage("/About_Images/Dheeraj_Agrawal_Sir2.jpg")
    },
    {
      name: "Dr. Atul Kumar",
      role: "Publication Chair",
      membershipNo: "94817808",
      image: cloudinaryImage("/About_Images/Dr.Atul.Kumar.jpg")
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Text Section */}
        <div className="mb-8 sm:mb-12">
          <p className="text-pink-500 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide mb-1 sm:mb-2">
            About IEEE-MSB
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            IEEE MANIT STUDENT BRANCH
          </h2>
          
          {/* Decorative Wavy Line */}
          <div className="mb-3 sm:mb-6">
            <svg
              className="w-20 sm:w-28 h-2 text-pink-400"
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

          {/* Description Paragraph */}
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-8">
            The IEEE Student Branch at MANIT endeavours to promote awareness among students about the opportunities that exist in the field of electronics, electrical and computer science engineering. Our objective is to bridge the gap between industry and students, while promoting and providing an intellectually stimulating university environment for all students. Since the inception, it has been at the helm directing and promoting technical expertise by organising various events all round the year with well defined objectives.
          </p>

          {/* Read More Button */}
          <div>
            <a
              href="https://ieee-msb.ieeenitb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm md:text-base font-semibold uppercase py-2.5 px-5 sm:py-3 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
            >
              READ MORE
            </a>
          </div>
        </div>

        {/* Profile Images Section - Below Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 justify-items-center">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Profile Image - Rectangular */}
              <div className="mb-4 sm:mb-6 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full rounded-xl overflow-hidden aspect-square shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-pink-500 text-xs sm:text-sm md:text-base font-medium text-center mb-1">
                {member.role}
              </p>

              {/* Membership Number */}
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                Membership No - {member.membershipNo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IEEEManitBranch;
