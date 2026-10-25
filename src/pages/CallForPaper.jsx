import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import PaperSubmission from "../components/callforpaper/PaperSubmission";
import Hero from "@/components/Hero";

function CallForPaper() {
  const quickLinks = [
    { text: "Important Dates", link: "#important-dates" },
    { text: "Tracks & Topics", link: "#cfp" },
    { text: "Author Guidelines", link: "#author-guidelines" },
    { text: "Submission Guidelines", link: "#submission-guidelines" },
    { text: "How to Submit", link: "#how-to-submit" },
  ];

  return (
    <div>
      <Hero 
        src="/background/9.jpg" 
        content="Call For Papers (CFP)" 
        dates="30th Jan - 31st Jan 2027, Bhopal, India." 
        buttonContent={quickLinks}
      />

      {/* CMT Acknowledgment Banner at Top of Call For Paper */}
      <div className="w-full bg-gray-50 border-y border-gray-200 py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
            Microsoft CMT Acknowledgment
          </p>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>

      <HowItWorkTimeline />
      <TracksAndTopics />
      <PaperSubmission />
    </div>
  );
}

export default CallForPaper;
