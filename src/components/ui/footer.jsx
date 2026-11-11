import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { id: 1, title: "Home", url: "/" },
      { id: 2, title: "About", url: "/about" },
      { id: 3, title: "Call for Paper", url: "/callforpaper" },
      { id: 4, title: "Past Speakers", url: "/guestlecturers" },
      { id: 5, title: "Gallery", url: "/gallery" },
      { id: 6, title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { id: 7, title: "IEEE Xplore", url: "https://ieeexplore.ieee.org" },
      { id: 8, title: "IEEE Website", url: "https://www.ieee.org" },
      { id: 9, title: "IEEE MSB", url: "https://ieee-msb.ieeenitb.com" },
      { id: 10, title: "Registration", url: "/#registration-fees" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 max-w-md">
            {/* Logos */}
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="/IEEE.png"
                alt="IEEE Logo"
                className="h-10 sm:h-12 md:h-16 object-contain"
              />
              <img
                src="/logo2027_dark.png"
                alt="SCEECS 2027 Logo"
                className="h-10 sm:h-12 md:h-16 object-contain"
              />
            </div>

            {/* IEEE Description */}
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              IEEE is the world's largest technical professional organization. It is dedicated to the advancement of technology for the betterment of humanity.
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12">
            {footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-2.5 sm:gap-3">
                <li className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-blue-900">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-xs sm:text-sm text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    {link.url.startsWith('http') ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        {link.title}
                        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <Link
                        to={link.url}
                        className="flex items-center gap-1"
                      >
                        {link.title}
                        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
              © 2027 SCEECS. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm text-center md:text-right">
              IEEE Student Branch, MANIT Bhopal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
