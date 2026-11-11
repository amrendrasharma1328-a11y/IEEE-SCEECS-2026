import React from 'react'

const Hero = ({ src, alt = "Hero Image", content, dates, buttonContent }) => {
    return (
        <div className='w-full bg-[#090822] relative'>
            <div className='relative w-full overflow-hidden flex flex-col justify-center min-h-[340px] sm:min-h-[380px] md:min-h-[520px] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-24 md:pb-12'>
                {/* Background Image - absolute inset-0 guarantees full coverage with no seams or cutoffs */}
                <img
                    src={src}
                    alt={alt}
                    className='absolute inset-0 w-full h-full object-cover object-center pointer-events-none'
                />
                {/* Dark Overlay - full height coverage */}
                <div className='absolute inset-0 w-full h-full bg-[#090822c8] z-10 pointer-events-none'></div>

                {/* Content - normal flow to adapt smoothly to content size */}
                {content && (
                    <div className='relative z-30 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl'>
                        <div className='text-white max-w-2xl sm:max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight'>
                            {content}
                        </div>
                        {dates && (
                            <div className='text-white max-w-3xl sm:max-w-4xl text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mt-2 sm:mt-3 md:mt-5 leading-relaxed'>
                                {dates}
                            </div>
                        )}
                        {buttonContent && Array.isArray(buttonContent) && buttonContent.length > 0 && (
                            <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-5 md:mt-8 max-w-full'>
                                {buttonContent.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.link}
                                        target={button.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        download={button.download || (button.link && (button.link.endsWith('.docx') || button.link.endsWith('.pdf')) ? true : undefined)}
                                        className='inline-flex items-center justify-center px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3.5 text-xs sm:text-sm md:text-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                                    >
                                        {button.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            {/* Wave Divider at the bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[32px] sm:h-[60px] md:h-[100px] lg:h-[140px] xl:h-[160px] transform rotate-y-180"
                    style={{ transform: 'rotate(180deg)' }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Hero
