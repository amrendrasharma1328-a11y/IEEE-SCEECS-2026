import React from 'react'
import { Timeline } from '../ui/timeline';

const HowItWorkTimeline = () => {
    const data = [
        {
            title: "Release of Call for Papers",
            date: "24 Oct 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Official Call for Papers Released
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Call for Papers announced and paper submissions open via the Microsoft CMT portal for IEEE SCEECS 2027.
                    </p>
                </div>
            ),
        },
        {
            title: "Call for Reviewers",
            date: "1st Week of Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Release of Call for Reviewers
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Invitations and call for expert peer reviewers and technical program committee members initiated.
                    </p>
                </div>
            ),
        },
        {
            title: "Initial Reviews Start",
            date: "1st Week of Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Peer Review Process Commences
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Initial rounds of rigorous double-blind peer review commence for early-submitted research manuscripts.
                    </p>
                </div>
            ),
        },
        {
            title: "Paper Submission Deadline",
            date: "20 Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Full Paper Submission Deadline
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Deadline for full research manuscript submissions via Microsoft CMT (until 23:59 IST).
                    </p>
                </div>
            ),
        },
        {
            title: "Meta Reviews Start",
            date: "3rd Week of Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Meta Reviews & Deliberation
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Track chairs begin meta-review evaluations and cross-reviewer deliberation on submitted papers.
                    </p>
                </div>
            ),
        },
        {
            title: "Mailing of Selected Papers",
            date: "3rd Week of Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Reviewer Feedback & Decisions
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Reviewer feedback, decision letters, and revision guidelines shared with authors of selected papers.
                    </p>
                </div>
            ),
        },
        {
            title: "Acceptance Notification",
            date: "20 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Formal Acceptance Notification
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Authors of accepted papers will receive formal notification via email along with detailed instructions for preparing the camera-ready version and registration.
                    </p>
                </div>
            ),
        },
        {
            title: "Early Registration",
            date: "31 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Early Bird Registration Deadline
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        Deadline for completing conference author registration at early bird rates. At least one author from each accepted paper must register to ensure paper inclusion.
                    </p>
                </div>
            ),
        },
        {
            title: "Camera Ready Submissions",
            date: "31 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Camera Ready Manuscript Deadline
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        Authors of accepted papers must submit the final camera-ready version incorporating all reviewer comments, IEEE formatting, and signed copyright forms.
                    </p>
                </div>
            ),
        },
        {
            title: "Conference Dates",
            date: "30 Jan - 31 Jan 2027",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Paper Presentation in Hybrid Mode
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        The conference will be conducted in hybrid mode (physical at MANIT Bhopal & virtual platforms). Accepted papers will be presented and submitted for publication in IEEE Xplore.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <section id="important-dates" className="w-full bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center mb-8">
                <p className="text-purple-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
                    Schedule & Milestones
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Important Dates
                </h2>
                <div className="flex justify-center mb-4">
                    <svg
                        className="w-32 h-2 text-pink-400"
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
                <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto font-medium">
                    Conference Dates: <span className="text-purple-700 font-bold">30th Jan – 31st Jan 2027</span> | MANIT Bhopal, India
                </p>
            </div>
            <Timeline data={data} />
        </section>
    )
}

export default HowItWorkTimeline
