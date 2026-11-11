import React from 'react'
import { Timeline } from '../ui/timeline';

const HowItWorkTimeline = ({ detailLink = "/callforpaper" }) => {
    const data = [
        {
            title: "Release of Call for Papers",
            date: "24 Oct 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-3 leading-snug">
                        Official Call for Papers Released
                    </p>
                    <a
                        href="https://cmt3.research.microsoft.com/SCEECS2027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 sm:px-5 rounded-lg transition-colors text-xs sm:text-sm mb-4"
                    >
                        Submit Now
                    </a>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg mb-1">
                        Acknowledgement
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                        Deadline for full research manuscript submissions via Microsoft CMT (until 23:59 IST).
                    </p>
                </div>
            ),
        },
        {
            title: "Meta Reviews Start",
            date: "3rd Week of Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Meta Reviews & Deliberation
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                        Track chairs begin meta-review evaluations and cross-reviewer deliberation on submitted papers.
                    </p>
                </div>
            ),
        },
        {
            title: "Mailing of Selected Papers",
            date: "3rd Week of Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Reviewer Feedback & Decisions
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                        Reviewer feedback, decision letters, and revision guidelines shared with authors of selected papers.
                    </p>
                </div>
            ),
        },
        {
            title: "Acceptance Notification",
            date: "20 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Formal Acceptance Notification
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                        Authors of accepted papers will receive formal notification via email along with detailed instructions for preparing the camera-ready version and registration.
                    </p>
                </div>
            ),
        },
        {
            title: "Early Registration",
            date: "31 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Early Bird Registration Deadline
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                        Deadline for completing conference author registration at early bird rates. At least one author from each accepted paper must register to ensure paper inclusion.
                    </p>
                </div>
            ),
        },
        {
            title: "Camera Ready Submissions",
            date: "31 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Camera Ready Manuscript Deadline
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                        Authors of accepted papers must submit the final camera-ready version incorporating all reviewer comments, IEEE formatting, and signed copyright forms.
                    </p>
                </div>
            ),
        },
        {
            title: "Conference Dates",
            date: "30 Jan - 31 Jan 2027",
            content: (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug">
                        Paper Presentation in Hybrid Mode
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                        The conference will be conducted in hybrid mode (physical at MANIT Bhopal & virtual platforms). Accepted papers will be presented and submitted for publication in IEEE Xplore.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <section id="important-dates" className="w-full bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8 scroll-mt-20">
            <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-8">
                <p className="text-purple-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
                    Schedule & Milestones
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Important Dates
                </h2>
                <div className="flex justify-center mb-4">
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
                <p className="text-gray-700 text-xs sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
                    Conference Dates: <span className="text-purple-700 font-bold">30th Jan – 31st Jan 2027</span> | MANIT Bhopal, India
                </p>
            </div>
            <Timeline data={data} detailLink={detailLink} />
        </section>
    )
}

export default HowItWorkTimeline
