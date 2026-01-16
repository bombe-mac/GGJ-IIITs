'use client';

import React, { useRef, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionTemplate, 
  useMotionValue
} from 'framer-motion';
import { 
  MapPin, Users, CheckCircle, BookOpen, Rocket, Play, Trophy 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Type Definition ---
type Event = {
  date: string;
  title: string;
  desc: string;
  icon: React.ComponentType;
  color: string;
};

// --- Data ---
const EVENTS = [
  { 
    date: "Nov 3, 2025", 
    title: "Site Registration Opens", 
    desc: "Organizers can start registering their physical or virtual jam sites.", 
    icon: MapPin, 
    color: "cyan" 
  },
  { 
    date: "Dec 1, 2025", 
    title: "Jammer Registration Opens", 
    desc: "Participants can sign up and join a site to prepare for the event.", 
    icon: Users, 
    color: "purple" 
  },
  { 
    date: "Jan 12, 2026", 
    title: "Site Registration Closes", 
    desc: "Last call for new jam sites to be registered globally.", 
    icon: CheckCircle, 
    color: "yellow" 
  },
  { 
    date: "Jan 19-23, 2026", 
    title: "Prep Week", 
    desc: "A week of talks, tutorials, and getting ready for the big event.", 
    icon: BookOpen, 
    color: "cyan" 
  },
  { 
    date: "Jan 25, 2026", 
    title: "Global Theme Reveal", 
    desc: "The secret theme is announced! Brainstorming begins.", 
    icon: Rocket, 
    color: "purple" 
  },
  { 
    date: "Jan 30, 2026", 
    title: "Game Jam Starts", 
    desc: "Start your engines! 48 hours of intense creativity begins. (Time: 5:00 PM)", 
    icon: Play, 
    color: "yellow" 
  },
  { 
    date: "Feb 1, 2026", 
    title: "Game Jam Ends", 
    desc: "Controllers down. Submission deadline and showcase. (Time: 5:00 PM)", 
    icon: Trophy, 
    color: "cyan" 
  },
];

// --- Components ---

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  
  const scramble = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((_, i) => {
        if (i < iterations) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return <span onMouseEnter={scramble} className="cursor-default">{displayText}</span>;
};

const TimelineCard = ({ children, color, isLeft }: { children: React.ReactNode; color: string; isLeft: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const highlightColor = 
    color === 'cyan' ? 'rgba(34, 211, 238, 0.15)' : 
    color === 'purple' ? 'rgba(168, 85, 247, 0.15)' : 
    'rgba(250, 204, 21, 0.15)';
    
  const borderColor = 
    color === 'cyan' ? 'group-hover:border-cyan-500/30' : 
    color === 'purple' ? 'group-hover:border-purple-500/30' : 
    'group-hover:border-yellow-500/30';

  return (
    <div
      className={cn(
        "group relative border border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 shadow-2xl h-full flex flex-col justify-center",
        borderColor,
        "p-2.5 md:p-8",
        isLeft ? "text-right items-end" : "text-left items-start"
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${highlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

const TimelineRow = ({ event, index }: { event: Event; index: number }) => {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Smooth out the card entrance as well
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.5], [50, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [0.92, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y, scale }}
      className={cn(
        "relative w-full mb-8 md:mb-24",
        "grid grid-cols-2 gap-1 md:gap-24" 
      )}
    >
      
      {/* --- CONNECTOR SYSTEM --- */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center">
         
         {/* 1. Connector Line */}
         <div className={cn(
             "absolute h-[2px] bg-gradient-to-r",
             isLeft 
                ? "right-0 bg-gradient-to-l w-2 md:w-24" 
                : "left-0 bg-gradient-to-r w-2 md:w-24",
             event.color === "cyan" ? "from-cyan-500/50 to-transparent" : 
             event.color === "purple" ? "from-purple-500/50 to-transparent" : 
             "from-yellow-500/50 to-transparent"
         )} />

         {/* 2. Glow Effect */}
         <div className={cn(
             "absolute rounded-full opacity-30 blur-lg",
             "w-6 h-6 md:w-12 md:h-12",
             event.color === "cyan" ? "bg-cyan-500" : event.color === "purple" ? "bg-purple-500" : "bg-yellow-500"
         )} />
         
         {/* 3. Core Dot */}
         <div className={cn(
             "relative rounded-full border-2 border-[#020617] shadow-[0_0_15px_rgba(0,0,0,1)] z-10",
             "w-2.5 h-2.5 md:w-4 md:h-4", 
             event.color === "cyan" ? "bg-cyan-400" : event.color === "purple" ? "bg-purple-400" : "bg-yellow-400"
         )} />
      </div>

      {/* --- LEFT SIDE --- */}
      <div className={cn(
          "flex flex-col justify-center",
          isLeft ? "items-end" : "invisible" 
      )}>
        {isLeft && (
          <div className="w-full">
             <TimelineCard color={event.color} isLeft={true}>
                <div className="flex flex-col gap-1 md:gap-3 items-end w-full">
                    
                    {/* Badge */}
                    <div className={cn(
                        "inline-flex items-center gap-1 md:gap-2 px-1.5 py-0.5 md:px-3 md:py-1 rounded-full font-mono font-bold tracking-wider mb-0.5 border",
                        "text-[8px] md:text-xs",
                         event.color === "cyan" ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" : 
                         event.color === "purple" ? "bg-purple-500/10 border-purple-500/20 text-purple-300" : 
                         "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                    )}>
                        <ScrambleText text={event.date} />
                    </div>

                    <h3 className="font-bold text-white leading-none text-[10px] md:text-3xl">
                        {event.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-tight md:leading-relaxed text-[8px] md:text-base opacity-80">
                        {event.desc}
                    </p>
                </div>
             </TimelineCard>
          </div>
        )}
      </div>

      {/* --- RIGHT SIDE --- */}
      <div className={cn(
          "flex flex-col justify-center",
          !isLeft ? "items-start" : "invisible" 
      )}>
        {!isLeft && (
           <div className="w-full">
             <TimelineCard color={event.color} isLeft={false}>
                <div className="flex flex-col gap-1 md:gap-3 items-start w-full">
                    
                     {/* Badge */}
                     <div className={cn(
                        "inline-flex items-center gap-1 md:gap-2 px-1.5 py-0.5 md:px-3 md:py-1 rounded-full font-mono font-bold tracking-wider mb-0.5 border",
                        "text-[8px] md:text-xs",
                         event.color === "cyan" ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" : 
                         event.color === "purple" ? "bg-purple-500/10 border-purple-500/20 text-purple-300" : 
                         "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                    )}>
                        <ScrambleText text={event.date} />
                    </div>

                    <h3 className="font-bold text-white leading-none text-[10px] md:text-3xl">
                        {event.title}
                    </h3>

                    <p className="text-gray-400 leading-tight md:leading-relaxed text-[8px] md:text-base opacity-80">
                        {event.desc}
                    </p>
                </div>
             </TimelineCard>
           </div>
        )}
      </div>

    </motion.div>
  );
};

export default function PublicationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"]
  });

  // --- PHYSICS ENGINE FOR LINE ---
  // This "spring" smooths out the scroll value.
  // Stiffness: How "tight" the spring is (Lower = Slower/Heavier)
  // Damping: How much friction (Higher = Less bounce, smoother stop)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
         <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[150px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-1 md:px-6 py-20 md:py-32 max-w-6xl">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-40"
        >
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white mb-6">
                Event Timeline
            </h1>
            <p className="text-sm md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed px-4">
                The roadmap to the world&apos;s largest game creation event. 
                Follow the schedule to ensure your submission is valid.
            </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pb-10">
            
            {/* The Spine (Vertical Line) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
            
            {/* Animated Gradient Line */}
            <motion.div 
                style={{ height }}
                className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            >
                {/* End Node: A small glowing dot at the tip of the line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </motion.div>

            {/* Event Items */}
            <div className="relative z-20">
                {EVENTS.map((event, index) => (
                    <TimelineRow key={index} event={event} index={index} />
                ))}
            </div>
            
        </div>
      </div>
    </div>
  );
}