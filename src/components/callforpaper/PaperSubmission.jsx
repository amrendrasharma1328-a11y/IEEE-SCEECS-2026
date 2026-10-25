import { Card } from '../ui/card';
import { 
  FileText, 
  Upload, 
  Link as LinkIcon, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  UserCheck, 
  HelpCircle, 
  ShieldAlert, 
  ExternalLink 
} from 'lucide-react';

function PaperSubmission() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ============================================================== */}
        {/* SECTION 1: AUTHOR GUIDELINES                                    */}
        {/* ============================================================== */}
        <section id="author-guidelines" className="scroll-mt-20">
          <div className="text-center mb-10">
            <p className="text-purple-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              Instructions For Authors
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Author Guidelines
            </h2>
            <div className="flex justify-center mb-4">
              <svg className="w-32 h-2 text-pink-400" viewBox="0 0 128 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Please review the following requirements regarding eligibility, presentation, plagiarism policy, and ethics before preparing your manuscript.
            </p>
          </div>

          {/* Student First Author Banner */}
          <div className="mb-8 p-6 bg-purple-50 border-4 border-black rounded-xl shadow-md text-center">
            <div className="inline-flex items-center gap-2 text-purple-700 font-bold text-lg md:text-xl uppercase tracking-wide">
              <UserCheck className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <span>Important Eligibility Notice: The first author of the paper must be a student.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Originality & Plagiarism Policy */}
            <Card variant="neubrutalism" className="bg-amber-50 p-8 h-full !border-4 !border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 border-4 border-black flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Plagiarism & Originality Policy</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>All submissions must represent <strong>original, unpublished research</strong> and must not be currently under review elsewhere.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>All papers will be screened via <strong>IEEE CrossCheck / Turnitin</strong>. Manuscripts with similarity exceeding 15% (or single source &gt; 5%) will be rejected without peer review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>All submissions must be in <strong>English only</strong>.</span>
                </li>
              </ul>
            </Card>

            {/* Attendance & Registration */}
            <Card variant="neubrutalism" className="bg-emerald-50 p-8 h-full !border-4 !border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 border-4 border-black flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Attendance & Registration</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>At least one author of every accepted paper must <strong>register at the full author rate</strong> before the camera-ready deadline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Accepted papers must be presented during the conference in <strong>hybrid mode</strong> (physical or virtual).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>IEEE 'No-Show' Policy:</strong> Papers that are not presented at the conference will not be submitted to IEEE Xplore.</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: SUBMISSION GUIDELINES                                */}
        {/* ============================================================== */}
        <section id="submission-guidelines" className="scroll-mt-20">
          <div className="text-center mb-10">
            <p className="text-purple-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              Manuscript Specifications
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Submission Guidelines
            </h2>
            <div className="flex justify-center mb-4">
              <svg className="w-32 h-2 text-pink-400" viewBox="0 0 128 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Ensure that your manuscript strictly conforms to copyright specifications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Copyright Notices */}
            <Card variant="neubrutalism" className="bg-purple-100 p-8 h-full !border-4 !border-black">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-black flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Copyright Details</h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  Appropriate IEEE copyright notice will need to appear on the bottom of the first page of your camera-ready manuscript:
                </p>
                <div className="space-y-3 text-gray-700 text-xs md:text-sm">
                  <div className="p-3 bg-white/70 rounded border border-purple-200">
                    <span className="font-semibold block text-gray-900">U.S. Government Employees:</span>
                    <span className="font-mono text-xs text-purple-900">U.S. Government work not protected by U.S. copyright</span>
                  </div>
                  <div className="p-3 bg-white/70 rounded border border-purple-200">
                    <span className="font-semibold block text-gray-900">Crown Government (UK, Canada, Australia):</span>
                    <span className="font-mono text-xs text-purple-900">979-8-3315-7116-0/26/$31.00 ©2026 Crown</span>
                  </div>
                  <div className="p-3 bg-white/70 rounded border border-purple-200">
                    <span className="font-semibold block text-gray-900">European Union:</span>
                    <span className="font-mono text-xs text-purple-900">979-8-3315-7116-0/26/$31.00 ©2026 European Union</span>
                  </div>
                  <div className="p-3 bg-white/70 rounded border border-purple-200">
                    <span className="font-semibold block text-gray-900">All Other Papers:</span>
                    <span className="font-mono text-xs text-purple-900">979-8-3315-7116-0/26/$31.00 ©2026 IEEE</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: HOW TO SUBMIT                                        */}
        {/* ============================================================== */}
        <section id="how-to-submit" className="scroll-mt-20">
          <div className="text-center mb-10">
            <p className="text-purple-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              Submission Process
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              How to Submit
            </h2>
            <div className="flex justify-center mb-4">
              <svg className="w-32 h-2 text-pink-400" viewBox="0 0 128 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              All prospective authors must follow these 4 steps to submit their paper using Microsoft CMT (Conference Management Toolkit).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 bg-white border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Create CMT Account</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  You must have a Microsoft CMT account prior to paper submission. If you don't have one, register for free.
                </p>
              </div>
              <a
                href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-sm underline"
              >
                <span>CMT Account Guide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prepare Manuscript PDF</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Prepare your manuscript in PDF format ready for electronic submission on Microsoft CMT.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fill Submission Form</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Log in to Microsoft CMT, select your track, input title, abstract, keywords, and author details, then upload your manuscript PDF.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://cmt3.research.microsoft.com/SCEECS2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-800 font-semibold text-sm underline"
                >
                  <span>Go to SCEECS 2027 CMT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-800 font-semibold text-sm underline"
                >
                  <span>Author Submission Guide</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verify & Track</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Check your confirmation email for your paper ID. You can modify your submission anytime until the deadline (20 Nov 2026).
                </p>
              </div>
              <span className="text-emerald-700 font-semibold text-sm">
                Deadline: 20 Nov 2026
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: WHERE TO SUBMIT                                      */}
        {/* ============================================================== */}
        <section id="where-to-submit" className="scroll-mt-20 max-w-2xl mx-auto w-full">
          <Card variant="neubrutalism" className="bg-blue-50 p-6 md:p-8 !border-4 !border-black">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white border-2 border-black shadow-sm">
                <Upload className="w-6 h-6" />
              </div>
              
              <div>
                <p className="text-blue-700 font-bold uppercase tracking-wider text-xs">
                  Submission Portal
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                  Where to Submit
                </h2>
                <p className="text-gray-600 text-sm mt-2 max-w-lg mx-auto">
                  All submissions for <strong>IEEE SCEECS 2027</strong> must be submitted electronically through the Microsoft Conference Management Toolkit (CMT).
                </p>
              </div>

              {/* Status & Strict Notice Badges */}
              <div className="space-y-2 max-w-lg mx-auto text-xs md:text-sm">
                <div className="py-2.5 px-4 bg-emerald-50 border border-emerald-400 rounded-md text-emerald-900 font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span><strong>Submissions Open:</strong> Microsoft CMT portal is now active for IEEE SCEECS 2027.</span>
                </div>
                <div className="py-2.5 px-4 bg-red-50 border border-red-300 rounded-md text-red-800 font-medium flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600" />
                  <span>Notice: Papers submitted via email will NOT be considered.</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://cmt3.research.microsoft.com/SCEECS2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 text-sm md:text-base"
                >
                  <span>Submit Paper via Microsoft CMT</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: CMT ACKNOWLEDGMENT                                  */}
        {/* ============================================================== */}
        <section id="cmt-acknowledgment" className="scroll-mt-20">
          <div className="p-6 md:p-8 bg-gray-50 border-2 border-gray-300 rounded-xl text-center max-w-4xl mx-auto">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
              Microsoft CMT Acknowledgment
            </h4>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-normal">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default PaperSubmission;
