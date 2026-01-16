"use client";

import Hero from "@/components/ui/neural-network-hero";
import GameCard from "./GameCard";
// Site navigation is rendered globally from layout via <SiteNav />

export default function DemoOne() {
  const games = [
  {
    name: "Bubble Yeeter",
    year: 2025,
    theme: "Bubble",
    languages: "English",
    platforms: ["MS Windows"],
    tools: ["Unreal Engine"],
    about: "Defeat evil viruses using soap bubble dispered by a bubble gun and using your bubbles to get unique movement option, while also trying to find a cure for the virus!",
    link: "https://globalgamejam.org/games/2025/bubble-yeeter-2",
    color: "gray-200"
  },
  {
    name: "Poochi - A lost Bubble",
    year: 2025,
    theme: "Bubble",
    languages: "English",
    platforms: ["Web"],
    tools: ["Scratch"],
    about: "A web-based, multi-level platformer built with HTML and JavaScript. Poochi, a beloved pet dog, falls into a drain and is reincarnated as a bubble with jumping powers. To reunite with its owner, Poochi must climb through the drainage system and reach the top.",
    instructions: "Run the game using the README file, jump across platforms to reach the top, avoid water currents and slippery surfaces, and press N to skip a level.",
    link: "https://globalgamejam.org/games/2025/poochi-lost-bubble-6",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Puffy - The Popper",
    year: 2025,
    theme: "Bubble",
    languages: "English",
    platforms: ["MS Windows"],
    tools: ["Godot Engine"],
    diversifiers: ["Nurture yourself with Nature", "Great Games Come From Everywhere"],
    about: "Puffy, a brave knight, must save Princess Pixie by popping all the magical bubbles guarding her atop Cloud Tower within 120 seconds. Collect golden bubbles to gain arrows and jump across floating platforms before time runs out.",
    installation: "Unzip the file and import it into the Godot Engine.",
    link: "https://globalgamejam.org/games/2025/puffy-popper-4",
    color: "from-yellow-500 to-orange-400"
  },
  {
    name: "Bubble Trouble",
    year: 2025,
    theme: "Bubble",
    languages: "English",
    platforms: ["Mac OS", "MS Windows"],
    tools: ["Unity"],
    about: "Bubble Trouble is a fast-paced 2D platformer where you play as Bubble, a warrior chasing his rogue former ally El Bub across the multiverse to rescue his kidnapped wife. Jump, dash, and fight through vibrant worlds to stop El Bub from stealing multiversal powers and save reality itself.",
    link: "https://globalgamejam.org/games/2025/bubble-trouble-1-2",
    color: "from-green-500 to-teal-400"
  }
];
  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      <Hero 
        title="Global Game Jam IIITs"
        description="The GGJ is the world&apos;s largest game creation event taking place around the globe boasting tens of thousands of participants (jammers) at hundreds of physical and virtual sites in over one hundred countries around the world."

        logoImageUrl="/GGJ-logo.svg"
        logoAltText="GGj Logo"
      />  
      {/* Previous year games Section */}
<section className="relative bg-black py-2 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-2">
          Previous year games
        </h2>
        <p className="text-gray-500 text-sm">Shift + Scroll to navigate on desktop</p>
      </div>
    </div>
  </div>

  {/* THE SCROLL AREA WITH FADED EDGES */}
  <div className="relative w-full">
    {/* Visual Fades for "Circular" feel */}
    <div className="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none hidden md:block" />
    <div className="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none hidden md:block" />

    <div 
      className="flex flex-nowrap overflow-x-auto gap-6 md:gap-10 px-6 md:px-[10%] pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* Mapping games - we use flex-shrink-0 to maintain uniform card size */}
      {games.map((game, index) => (
        <div key={index} className="flex-shrink-0 snap-center first:pl-4 last:pr-4">
          <GameCard game={game} index={index} />
        </div>
      ))}
      
      {/* Invisible spacer to allow the last card to center correctly */}
      <div className="flex-shrink-0 w-12 md:w-24" />
    </div>
  </div>
</section>

{/* FAQ Section */}
      <section className="relative py-6 px-6 md:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-sm">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="text-xl font-light text-white">What is Global Game Jam ?</h3>
                <svg className="w-5 h-5 text-white/70 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-white/70 leading-relaxed">
                  The GGJ mission is to empower individuals worldwide to learn, experiment, and create together through the medium of games. The organization oversees various efforts both globally and locally to encourage communities to join together to make games. The GGJ provides unique opportunities for people to create, collaborate and practice their game creation skills, and invites everyone of any skill level to take part.
                </p>
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-sm">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-xl font-light text-white">Who can participate in GGJ ?</h3>
                  <svg className="w-5 h-5 text-white/70 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">
                    Anyone can participate, as long as they are over the age of majority in the country hosting the jam (in most places this is 18, but check with your local site if you are not sure). People ages 16 & 17 can participate with a signed parental permission slip. Underage jammers can also participate if they are accompanied by a legal guardian. Experience is not necessary. Designers, developers, artists, musicians, knitters, gardeners, architects, everyone and anyone is welcome to try their hand at making a game during the GGJ. You can lean many new skills and support your team by contributing ideas, playtesting, and giving moral support. You could work on a non-digital game, and then there&apos;s no need for code!
                  </p>
                </div>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-sm">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="text-xl font-light text-white">What are the timings and location for GGJ at IIIT Sri City?</h3>
                <svg className="w-5 h-5 text-white/70 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-white/70 leading-relaxed">
                  The Global Game Jam will be held at the Academic Block, Indian Institute of Information Technology, Sri City, from 30 January to 1 February. The event will commence at 5:00 PM on 30 January and conclude at 5:00 PM on 1 February.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}


