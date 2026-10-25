
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
    { label: "Hrs", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 bg-white mt-8 sm:mt-10 md:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row">

              {/* Left Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-cyan-100 to-blue-100 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Until Event Start
                </h2>

                <p className="text-gray-600 text-base sm:text-lg">
                  Time Remaining
                </p>
              </div>

              {/* Right Section - Timer */}
              <div className="lg:w-3/5 bg-white p-5 sm:p-7 md:p-8 lg:p-9">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 md:gap-3 lg:gap-4">

                  {timeUnits.map((unit, index) => (
                    <div
                      key={unit.label}
                      className="flex items-center"
                    >
                      <div className="text-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1">
                          {String(unit.value).padStart(2, "0")}
                        </div>

                        <div className="text-xs sm:text-sm md:text-base font-medium text-pink-500">
                          {unit.label}
                        </div>
                      </div>

                      {index < timeUnits.length - 1 && (
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mx-1 sm:mx-2 md:mx-2 lg:mx-3">
                          :
                        </span>
                      )}
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventTimerSection;