import { Card } from '../ui/card';
import { FileText, Upload, Link as LinkIcon } from 'lucide-react';

function PaperSubmission() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Paper Submission
          </h1>
          <div className="flex justify-center mb-4 sm:mb-6">
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

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* Paper Submission Details Card - Full Width */}
          <Card
            variant="neubrutalism"
            className="bg-purple-100 p-4 sm:p-6 md:p-8 w-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 !border-4 !border-black"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 border-2 sm:border-4 border-black flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug break-words">
                PAPER SUBMISSION DETAILS
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">For papers in which all authors are employed by the US government:</span> the copyright notice is: <span className="font-mono text-xs break-all sm:break-normal bg-white/60 px-1 py-0.5 rounded">U.S. Government work not protected by U.S. copyright</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900">For papers in which all authors are employed by a Crown government (UK, Canada, and Australia):</span> the copyright notice is: <span className="font-mono text-xs break-all sm:break-normal bg-white/60 px-1 py-0.5 rounded">979-8-3315-7116-0/26/$31.00 ©2026 Crown</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900">For papers in which all authors are employed by the European Union:</span> the copyright notice is: <span className="font-mono text-xs break-all sm:break-normal bg-white/60 px-1 py-0.5 rounded">979-8-3315-7116-0/26/$31.00 ©2026 European Union</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900">For all other papers:</span> the copyright notice is: <span className="font-mono text-xs break-all sm:break-normal bg-white/60 px-1 py-0.5 rounded">979-8-3315-7116-0/26/$31.00 ©2026 IEEE</span>
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="https://cmt3.research.microsoft.com/SCEECS2027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 sm:border-4 border-black text-center text-sm sm:text-base"
              >
                Submit Now
              </a>
            </div>
          </Card>

          {/* Important Notice */}
          <div className="text-center py-2 sm:py-4">
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-600 px-2 leading-snug">
              THE FIRST AUTHOR OF THE PAPER SHOULD BE A STUDENT.
            </p>
          </div>

          {/* Paper Submission Format and Portal Cards - Half Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Paper Submission Format Card */}
            <Card
              variant="neubrutalism"
              className="bg-pink-100 p-4 sm:p-6 md:p-8 h-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 !border-4 !border-black flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-500 border-2 sm:border-4 border-black flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug break-words">
                    PAPER SUBMISSION FORMAT
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>
                    Papers for both oral and poster presentations should conform to the IEEE format and specifications. All submissions must be in English only. Authors are invited to submit full paper as PDF using the IEEE templates.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-black/10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                  IEEE PAPER TEMPLATE
                </h3>
                <a
                  href="/docs/SCEECS'27-Conference-Template.docx"
                  download="SCEECS'27-Conference-Template.docx"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-black flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Download IEEE Template</span>
                </a>
              </div>
            </Card>

            {/* Paper Submission Portal Card */}
            <Card
              variant="neubrutalism"
              className="bg-blue-100 p-4 sm:p-6 md:p-8 h-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 !border-4 !border-black flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 border-2 sm:border-4 border-black flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug break-words">
                    PAPER SUBMISSION PORTAL
                  </h2>
                </div>
                
                <div className="text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed mb-6">
                  <p>Authors are invited to submit papers in electronic format through Microsoft CMT.</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10">
                <a
                  href="https://cmt3.research.microsoft.com/SCEECS2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 sm:border-4 border-black text-center text-sm sm:text-base"
                >
                  Submit Now
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperSubmission;
