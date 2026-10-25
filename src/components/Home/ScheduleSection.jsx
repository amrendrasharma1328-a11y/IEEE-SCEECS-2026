
import React from 'react';

const ScheduleSection = () => {
  const schedules = [
    {
      mode: "SCEECS'27 Virtual Schedule",
      link: "/pdf/SCEECS'2026 Online List.pdf",
      label: "Virtual"
    },
    {
      mode: "SCEECS'27 Physical Schedule",
      link: "/pdf/SCEECS'2026 Offline List.pdf",
      label: "Physical"
    }
  ];

  return (
    <>

      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[#C80080] text-sm sm:text-base font-medium mb-3">
              SCEECS Conference 2027
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Check Your Schedule
            </h2>

            <div className="flex justify-center mb-6">
              <svg
                className="w-32 h-2 text-pink-400"
                viewBox="0 0 128 4"
                fill="none"
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

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {schedules.map((schedule) => (
              <a
                key={schedule.label}
                href={schedule.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#C80080] hover:bg-white hover:shadow-md"
              >
                <span className="text-left">
                  <span className="block text-sm font-medium text-[#C80080]">
                    {schedule.label}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-gray-900">
                    {schedule.mode}
                  </span>
                </span>
                <span aria-hidden="true" className="text-2xl text-[#C80080] transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            ))}
          </div>

        </div>
      </section> */}

    </>
  );
};

export default ScheduleSection;
