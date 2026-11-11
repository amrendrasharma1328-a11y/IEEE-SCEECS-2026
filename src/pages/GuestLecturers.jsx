import { cloudinaryImage } from '@/utils/cloudinary';
import { PixelImage } from '../components/pixel-image';
import Hero from '@/components/Hero';
import { ExternalLink } from 'lucide-react';


// All guest lecturer images - you can add name, title, and link as needed
const guestLecturers = [
    { name: "Keerti purswani", title: "Founder of Educosys", image: cloudinaryImage("/guest/Keerti.jpg"), link: "https://www.linkedin.com/in/keertipurswani?originalSubdomain=in" },
    { name: "Aditi Gupta", title: "Founder of TechTip24", image: cloudinaryImage("/guest/Aditi.jpg"), link: "https://www.linkedin.com/in/aditi-gupta-09b0a91b2/?originalSubdomain=in" },
    { name: "Striver", title: "Founder of takeUforward", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794368026/striver_qtsz0i.jpg", link: "https://www.linkedin.com/in/rajstriver/?originalSubdomain=in" },
    { name: "Sunchit Dudeja", title: "SDE | Adobe", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794368029/sunchit_dudeja_rrfp94.jpg", link: "https://www.linkedin.com/in/sunchitdudeja/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=in" },
    { name: "Kamran Ali", title: "Sr. Engineering Manager | Atlassian", image: cloudinaryImage("/guest/kamran_ali.jpg"), link: "https://www.linkedin.com/in/systemdesignengineer/?originalSubdomain=in" },
    { name: "Raghav Garg", title: "Dsa Educator at PW", image: cloudinaryImage("/guest/Raghav.jpg"), link: "https://www.linkedin.com/in/raghav-garg-262a9b1b4/" },
    { name: "Love Babbar", title: "Founder of Codehelp", image: cloudinaryImage("/guest/love_babbar.jpg"), link: "https://www.linkedin.com/in/love-babbar-38ab2887/?originalSubdomain=in" },
    { name: "Lakshya Kumar", title: "Instructor at Codehelp", image: cloudinaryImage("/guest/lakshya_kumar.jpg"), link: "https://www.linkedin.com/in/lakshayk12/?originalSubdomain=in" },
    //   { name: "Speaker 01", title: "Guest Speaker", image: "/guest/01.jpg", link: null },

    { name: "Pushyamitra Bhargav", title: "Additional Advocate General, Indore Bench (MP Govt)", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794383487/guest/gl1.jpg", link: "https://www.linkedin.com/in/pushyamitra-bhargav-1987331b2/" },
    { name: "Subhash Khare", title: "Vice President of Wipro", image: cloudinaryImage("/guest/gl2.jpg"), link: "https://www.linkedin.com/in/subhash-khare-ab387b18/" },
    { name: "Sunil K. Prasad", title: "Chief Technology Officer at Leidos", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794383496/guest/gl3.jpg", link: "https://www.linkedin.com/in/sunil-k-prasad-444a06/" },
    { name: "Tomy Sebastian", title: "Director, Motor Drive Systems at Halla Mechatronics", image: cloudinaryImage("/guest/gl4.jpg"), link: "https://www.linkedin.com/in/drdonvaughn/" },
    { name: "Abhas Mitra", title: "Astrophysicist", image: cloudinaryImage("/guest/02.jpg"), link: "https://www.linkedin.com/in/abhas-kumar-mitra-25245a202/" },
    { name: "Anima Patil-Sabale", title: "Scientist-Astronaut", image: cloudinaryImage("/guest/03.jpg"), link: "https://www.linkedin.com/in/animasabale/" },
    { name: "Kailash Srivastava", title: "Power System Professional", image: cloudinaryImage("/guest/04.jpg"), link: "https://www.linkedin.com/in/knsri" },
    { name: "Dr. Charles H. Lineweaver", title: "Associate Professor", image: cloudinaryImage("/guest/05.jpg"), link: "https://www.mso.anu.edu.au/~charley/" },
    { name: "Kulpreet Yadav", title: "Author, Motivational Speaker", image: cloudinaryImage("/guest/06.jpg"), link: "https://www.goodreads.com/author/show/5021313.Kulpreet_Yadav" },
    { name: "Dr. V.N Mani", title: "Scientist", image: cloudinaryImage("/guest/07.jpg"), link: "https://vidwan.inflibnet.ac.in/profile/2738" },
    { name: "Sarang Verma", title: "CEO, Appointy Software Inc.", image: cloudinaryImage("/guest/08.jpg"), link: "https://www.linkedin.com/in/sarangverma" },
    { name: "Dr. H.C Verma", title: "Author, Concepts of Physics", image: cloudinaryImage("/guest/09.jpg"), link: "https://hcverma.in/" },
    { name: "JOHN C. MATHER", title: "Senior Astrophysicist", image: cloudinaryImage("/guest/10.jpg"), link: "https://www.nobelprize.org/prizes/physics/2006/mather/biographical/" },
    { name: "Dr. A.S Pillai", title: "Scientist", image: cloudinaryImage("/guest/11.jpg"), link: "https://en.wikipedia.org/wiki/A._Sivathanu_Pillai" },
    { name: "SACHIN GUPTA", title: "Co-Founder, HackerEarth", image: cloudinaryImage("/guest/12.jpg"), link: "https://www.linkedin.com/in/sachingupta006/" },
    { name: "Dr. Viswanathan Raghunathan", title: "CEO, Academic, Author, Columnist", image: cloudinaryImage("/guest/13.jpg"), link: "https://en.wikipedia.org/wiki/Viswanathan_Raghunathan" },
    { name: "Walter Lewin", title: "Former Professor, MIT", image: cloudinaryImage("/guest/14.jpg"), link: "https://en.wikipedia.org/wiki/Walter_Lewin" },
    { name: "DR. C.P. RAVIKUMAR", title: "Senior Technologist, Texas Instruments India", image: cloudinaryImage("/guest/15.jpg"), link: "https://www.linkedin.com/in/ravikumar-cp-1039825a" },
    { name: "Shyam Mardikar", title: "Chief - Strategy, Architecture & Engineering at Bharti Airtel (India)", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794383438/guest/16.jpg", link: "https://en.wikipedia.org/wiki/Shyam_Mardikar" },
    { name: "Arvind Sanjeev", title: "Engineer, Inventor and Entrepreneur", image: cloudinaryImage("/guest/17.jpg"), link: "https://arvindsanjeev.com/index.html" },
    { name: "Dr. ALOKNATH DE", title: "CTO of Samsung India Software Operations", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794383446/guest/18.jpg", link: "https://www.linkedin.com/in/drdescitechlab" },
    { name: "Mr. N.K. GOYAL", title: "Senior Telecom Professional", image: cloudinaryImage("/guest/19.jpg"), link: "https://www.linkedin.com/in/nkgoyals" },
    { name: "JEFF LIEBERMAN", title: "Roboticist, Television Presenter", image: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794383450/guest/20.jpg", link: "https://en.wikipedia.org/wiki/Jeff_Lieberman_(artist_engineer)" },
    //   { name: "Speaker 21", title: "Guest Speaker", image: "/guest/21.jpg", link: null },
];

function GuestLecturers() {
    return (
        <>
            <Hero src={cloudinaryImage("/background/10.jpg")} content="Past Speakers" />
            <div className="min-h-screen bg-white py-16 px-4 md:px-8 mt-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <p className="text-purple-600 text-lg font-medium mb-2">Welcome to SCEECS'27</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                            Past Speakers
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

                    {/* Guest Lecturers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12">
                        {guestLecturers.map((lecturer, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-100">
                                    <PixelImage
                                        src={lecturer.image}
                                        grid="6x4"
                                        grayscaleAnimation={true}
                                        pixelFadeInDuration={1000}
                                        maxAnimationDelay={1600}
                                        colorRevealDelay={1800}
                                        className="w-full h-full"
                                        startAnimation={true}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                        {lecturer.name}
                                    </h3>
                                    <p className="text-purple-600 font-semibold text-sm md:text-base mb-4">
                                        {lecturer.title}
                                    </p>

                                    {/* Link Section */}
                                    {lecturer.link && (
                                        <a
                                            href={lecturer.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm w-full"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Know More
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuestLecturers;
