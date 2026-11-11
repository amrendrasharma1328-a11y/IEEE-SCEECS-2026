import { Card } from '../ui/card';
import { Cpu, Zap, Code2 } from 'lucide-react';
const tracks = [
  // 1. ELECTRONICS AND COMMUNICATION
  {
    title: "ELECTRONICS AND COMMUNICATION",
    iconBg: "bg-purple-500",
    titleColor: "#9333ea",
    hoverColor: "hover:border-purple-500",
    dotColor: "bg-purple-500",
    icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    topics: [
      "ECE01: Optical and Wireless Communication & Networking",
      "ECE02: Signal, Image, and Video Processing",
      "ECE03: Robotics and Autonomous Systems",
      "ECE04: Quantum Computing and Communication",
      "ECE05: VLSI Embedded System with AI/ML",
      "ECE06: Industry 4.0",
      "ECE07: Neuromorphic Engineering",
      "ECE08: Communication System and Networking",
      "ECE09: Pattern Recognition and Object Tracking",
      "ECE10: RF Circuits, Systems, and Antennas",
      "ECE11: Electronic Devices and Analog Circuits",
      "ECE12: Sensing Devices and Networks",
      "ECE13: Satellite Communication",
      "ECE14: Artificial Intelligence of Things",
    ],
  },
  // 2. ELECTRICAL
  {
    title: "ELECTRICAL",
    iconBg: "bg-blue-500",
    titleColor: "#3b82f6",
    hoverColor: "hover:border-blue-500",
    dotColor: "bg-blue-500",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    topics: [
      "EE01: Power Electronics, Machines, and Drives",
      "EE02: Power Generation, Transmission, and Distribution",
      "EE03: Renewable Energy Sources",
      "EE04: High Voltage and Insulation Engineering",
      "EE05: Sensors and Signal Conditioning",
      "EE06: Soft Computing in Electrical Power and Energy Systems",
      "EE07: Electric Machines and Drives",
      "EE08: Advanced Propulsion Science",
      "EE09: Smart Grid and Smart Technologies",
      "EE10: Smart Sensors and Sensor Networks",
      "EE11: Cyber-Physical Systems",
      "EE12: Sustainable Engineering",
      "EE13: Distributed Generation and Micro Grid Operation",
    ],
  },
  // 3. COMPUTER SCIENCE
  {
    title: "COMPUTER SCIENCE",
    iconBg: "bg-pink-500",
    titleColor: "#ec4899",
    hoverColor: "hover:border-pink-500",
    dotColor: "bg-pink-500",
    icon: <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    topics: [
      "CS01: Big Data Analytics and High-Performance Computing",
      "CS02: Computing Technologies",
      "CS03: Artificial Intelligence, Machine Learning",
      "CS04: Deep Learning, Explainable AI",
      "CS05: Network Security and Cryptography",
      "CS06: Natural Language Processing",
      "CS07: Biomedical and Health Informatics",
      "CS08: Cybersecurity",
      "CS09: Biometrics and Data Privacy",
      "CS10: Blockchain",
      "CS11: Human-Computer Interaction",
      "CS12: Computer Vision, Graphics, and Animation",
      "CS13: Computing Architectures and Systems",
      "CS14: Augmented Reality/Virtual Reality",
      "CS15: Quantum Computing",
      "CS16: Edge Computing",
    ],
  },
];

function TracksAndTopics() {
  return (
    <div id="cfp" className="min-h-screen bg-white py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-purple-500 rounded-full p-2.5 sm:p-3 shadow-lg">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="bg-blue-500 rounded-full p-2.5 sm:p-3 shadow-lg">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="bg-pink-500 rounded-full p-2.5 sm:p-3 shadow-lg">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          <p className="text-pink-600 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-2">
            Call For Papers (CFP)
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={{ color: '#9333ea' }}>
            Tracks and Topics
          </h1>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-2">
            ORIGINAL AND UNPUBLISHED RESEARCH PAPERS ARE INVITED FOR PRESENTATION ON THE FOLLOWING THEME AREAS, BUT NOT RESTRICTED TO THE FOLLOWING VERTICALS.
          </p>
          <p className="text-purple-700 text-xs sm:text-sm md:text-base font-semibold mt-2 sm:mt-3">
            Conference Dates: 30th Jan – 31st Jan 2027 | Bhopal, India
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 sm:mt-12">
          {tracks.map((track, index) => (
            <div key={index} className="group">
              <Card
                variant="dots"
                className="max-w-full bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                dotColor={track.dotColor}
              >
                {/* Icon Section - Above Title */}
                <div className="flex justify-center mb-4">
                  <div className={`${track.iconBg} rounded-full p-3 sm:p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {track.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center leading-snug" style={{ color: track.titleColor }}>
                  {track.title}
                </h3>

                {/* Topics List */}
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {track.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className={`text-xs sm:text-sm text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-2.5 sm:pl-3 ${track.hoverColor} transition-colors duration-200`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TracksAndTopics;
