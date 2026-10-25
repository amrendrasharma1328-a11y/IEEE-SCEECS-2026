import { Card } from '../ui/card';
import { FileText, Upload, ExternalLink } from 'lucide-react';

function PaperSubmission() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Paper Submission
          </h1>
          <div className="flex justify-center mb-6">
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
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Paper Submission Details Card - Full Width */}
          <Card
            variant="neubrutalism"
            className="bg-purple-100 p-8 w-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 !border-4 !border-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-black flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">PAPER SUBMISSION DETAILS</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold">For papers in which all authors are employed by the US government,</span> the copyright notice is: <span className="font-mono text-xs">U.S. Government work not protected by U.S. copyright</span>
              </p>
              <p>
                <span className="font-semibold">For papers in which all authors are employed by a Crown government (UK, Canada, and Australia),</span> the copyright notice is: <span className="font-mono text-xs">979-8-3315-7116-0/26/$31.00 ©2026 Crown</span>
              </p>
              <p>
                <span className="font-semibold">For papers in which all authors are employed by the European Union,</span> the copyright notice is: <span className="font-mono text-xs">979-8-3315-7116-0/26/$31.00 ©2026 European Union</span>
              </p>
              <p>
                <span className="font-semibold">For all other papers</span> the copyright notice is: <span className="font-mono text-xs">979-8-3315-7116-0/26/$31.00 ©2026 IEEE</span>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://cmt3.research.microsoft.com/SCEECS2027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-black"
              >
                <span>Submit Via Microsoft CMT</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>

          {/* Important Notice */}
          <div className="text-center py-4">
            <p className="text-2xl md:text-3xl font-bold text-purple-600">
              THE FIRST AUTHOR OF THE PAPER SHOULD BE A STUDENT.
            </p>
          </div>

          {/* Paper Submission Portal Card */}
          <div className="max-w-2xl mx-auto">
            <Card
              variant="neubrutalism"
              className="bg-blue-100 p-8 h-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 !border-4 !border-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">PAPER SUBMISSION PORTAL</h2>
              </div>
              
              <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                <p>Authors are invited to submit papers in electronic format through Microsoft CMT.</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://cmt3.research.microsoft.com/SCEECS2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-black"
                >
                  <span>Submit Via Microsoft CMT</span>
                  <ExternalLink className="w-4 h-4" />
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
