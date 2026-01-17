'use client';

import Image from 'next/image';

export default function PeoplePage() {
  return (
   <div className="relative w-screen min-h-screen bg-black flex items-center justify-center overflow-hidden">
  
  {/* Moving blue glow (upper half only) */}
  <div
    className="absolute top-0 left-0 w-full h-1/2 pointer-events-none animate-gradientMove"
    style={{
      background:
        'radial-gradient(circle at 20% 30%, rgba(59,31,209,0.8), rgba(42,13,187,0.6), transparent 70%)',
      filter: 'blur(80px)',
    }}
  />

  {/* Content */}
  <div className="relative z-10">
    {<div className="flex flex-col items-center justify-center gap-10 px-6">

        {/* Heading */}
        <h1 className="text-white text-center text-xl md:text-4xl font-light tracking-wide max-w-3xl">
          WE THANK OUR SPONSORS FOR ORGANIZING GGJ
        </h1>

        {/* Sponsors */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          
          {/* Sponsor 1 */}
          <a
            href="https://interviewbuddy.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-300"
          >
            <Image
              src="/Sponsor1.png"
              alt="Interview Buddy"
              width={256}
              height={256}
              className="w-40 h-40 md:w-64 md:h-64 object-contain"
            />
          </a>

          {/* Sponsor 2 */}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-300"
          >
            <Image
              src="/Sponsor2.jpg"
              alt="Unstop"
              width={256}
              height={256}
              className="w-40 h-40 md:w-64 md:h-64 object-contain"
            />
          </a>

        </div>
      </div>}
  </div>
</div>

      

  );
}
