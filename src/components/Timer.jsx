import { useEffect, useState } from "react";

const EventTimerSection = () => {
  const targetDate = new Date("2027-01-30T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-16 bg-white mt-4 sm:mt-8 md:mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* Left Section */}
            <div className="lg:w-2/5 bg-gradient-to-br from-cyan-100 to-blue-100 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                Until Event Start
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm md:text-lg">
                Time Remaining
              </p>
            </div>

            {/* Right Section - Timer */}
            <div className="lg:w-3/5 bg-white p-4 sm:p-6 md:p-8 lg:p-9 flex items-center justify-center lg:justify-start">
              <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full max-w-md">
                {timeUnits.map((unit) => (
                  <div
                    key={unit.label}
                    className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                      {String(unit.value).padStart(2, "0")}
                    </div>

                    <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-pink-500 uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimerSection;
