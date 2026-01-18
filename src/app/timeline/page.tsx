'use client';

import React, { useRef, useState, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionTemplate, 
  useMotionValue,
  useReducedMotion
} from 'framer-motion';
import { 
  MapPin, Users, CheckCircle, BookOpen, Rocket, Play, Trophy,
  ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ShaderBackground } from '@/components/ui/neural-network-hero';

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
    date: "Jan 12, 2026", 
    title: "Site Registration Closes", 
    desc: "Last call for new jam sites to be registered globally.", 
    icon: CheckCircle, 
    color: "purple" 
  },
  { 
    date: "Jan 18, 2026", 
    title: "Jammer Registration Opens", 
    desc: "Participants can sign up and join a site to prepare for the event.", 
    icon: Users, 
    color: "yellow" 
  },
  { 
    date: "Jan 19-29, 2026", 
    title: "Prep Week", 
    desc: "A week of talks, tutorials, and getting ready for the big event.", 
    icon: BookOpen, 
    color: "cyan" 
  },
  { 
    date: "Jan 30, 2026", 
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

const ScrambleText = ({ text, isMobile = false }: { text: string; isMobile?: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const prefersReducedMotion = useReducedMotion();
  
  const scramble = () => {
    // Skip scramble animation on mobile or if reduced motion is preferred
    if (isMobile || prefersReducedMotion) return;
    
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

  return (
    <span 
      onMouseEnter={scramble} 
      className="cursor-default select-none"
    >
      {displayText}
    </span>
  );
};

const TimelineCard = ({ 
  children, 
  color, 
  isLeft, 
  isExpanded,
  onTap,
  isMobile = false 
}: { 
  children: React.ReactNode; 
  color: string; 
  isLeft: boolean;
  isExpanded?: boolean;
  onTap?: () => void;
  isMobile?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    // Only enable on desktop
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const highlightColor = 
    color === 'cyan' ? 'rgba(34, 211, 238, 0.15)' : 
    color === 'purple' ? 'rgba(168, 85, 247, 0.15)' : 
    'rgba(250, 204, 21, 0.15)';
    
  const borderColor = 
    color === 'cyan' ? 'md:group-hover:border-cyan-500/30' : 
    color === 'purple' ? 'md:group-hover:border-purple-500/30' : 
    'md:group-hover:border-yellow-500/30';

  const activeBorderColor = 
    color === 'cyan' ? 'border-cyan-500/30' : 
    color === 'purple' ? 'border-purple-500/30' : 
    'border-yellow-500/30';

  return (
    <motion.div
      className={cn(
        "group relative border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 shadow-2xl flex flex-col",
        "hover:bg-white/10 hover:border-white/30",
        borderColor,
        "p-4 md:p-8",
        isLeft ? "text-right items-end md:text-right md:items-end" : "text-left items-start md:text-left md:items-start",
        // Mobile: full width, desktop: conditional
        "w-full",
        // Mobile active state
        isMobile && isExpanded && activeBorderColor
      )}
      onMouseMove={handleMouseMove}
      onClick={isMobile ? onTap : undefined}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : undefined}
      aria-expanded={isMobile ? isExpanded : undefined}
    >
      {/* Desktop hover glow effect - hidden on mobile */}
      {!isMobile && !prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 md:group-hover:opacity-100"
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
      )}
      
      {/* Mobile tap glow effect */}
      {isMobile && isExpanded && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${highlightColor}, transparent 70%)`,
          }}
        />
      )}
      
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
};

const TimelineRow = ({ event, index, isMobile = false }: { event: Event; index: number; isMobile?: boolean }) => {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Simplified animations for mobile
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 200 : 50,
    damping: prefersReducedMotion ? 30 : 20,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.5], prefersReducedMotion ? [0, 0] : [50, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], prefersReducedMotion ? [1, 1] : [0.92, 1]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Mobile: Single column layout, Desktop: Two column layout
  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y, scale }}
      className={cn(
        "relative w-full mb-6 md:mb-24",
        // Mobile: single column, Desktop: two column grid
        isMobile ? "flex flex-col" : "grid grid-cols-2 gap-1 md:gap-24"
      )}
    >
      
      {/* --- CONNECTOR SYSTEM --- */}
      {/* Mobile: Left-aligned connector, Desktop: Center connector */}
      <div className={cn(
        "absolute z-0 flex items-center justify-center",
        isMobile 
          ? "left-0 top-0 bottom-0 w-6" 
          : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      )}>
         
         {/* 1. Connector Line - Mobile: vertical, Desktop: horizontal */}
         {isMobile ? (
           <div className={cn(
             "absolute w-[2px] bg-gradient-to-b top-0 bottom-0",
             event.color === "cyan" ? "from-cyan-500/50 to-transparent" : 
             event.color === "purple" ? "from-purple-500/50 to-transparent" : 
             "from-yellow-500/50 to-transparent"
           )} />
         ) : (
           <div className={cn(
             "absolute h-[2px] bg-gradient-to-r",
             isLeft 
               ? "right-0 bg-gradient-to-l w-2 md:w-24" 
               : "left-0 bg-gradient-to-r w-2 md:w-24",
             event.color === "cyan" ? "from-cyan-500/50 to-transparent" : 
             event.color === "purple" ? "from-purple-500/50 to-transparent" : 
             "from-yellow-500/50 to-transparent"
           )} />
         )}

         {/* 2. Glow Effect */}
         <div className={cn(
             "absolute rounded-full opacity-30 blur-lg",
             "w-4 h-4 md:w-12 md:h-12",
             event.color === "cyan" ? "bg-cyan-500" : event.color === "purple" ? "bg-purple-500" : "bg-yellow-500"
         )} />
         
         {/* 3. Core Dot */}
         <div className={cn(
             "relative rounded-full border-2 border-[#020617] shadow-[0_0_15px_rgba(0,0,0,1)] z-10",
             "w-3 h-3 md:w-4 md:h-4", 
             event.color === "cyan" ? "bg-cyan-400" : event.color === "purple" ? "bg-purple-400" : "bg-yellow-400"
         )} />
      </div>

      {/* --- MOBILE LAYOUT: Single column with left padding --- */}
      {isMobile ? (
        <div className="pl-10 w-full">
          <TimelineCard 
            color={event.color} 
            isLeft={false}
            isExpanded={isExpanded}
            onTap={toggleExpand}
            isMobile={true}
          >
            <div className="flex flex-col gap-2 items-start w-full">
              {/* Badge with expand indicator */}
              <div className="flex items-center justify-between w-full gap-2 mb-1">
                <div className={cn(
                  "inline-flex items-center gap-1 px-2 py-1 rounded-full font-mono font-semibold tracking-wide border",
                  "text-[10px]",
                  event.color === "cyan" ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-200" : 
                  event.color === "purple" ? "bg-purple-500/20 border-purple-500/40 text-purple-200" : 
                  "bg-yellow-500/20 border-yellow-500/40 text-yellow-200"
                )}>
                  <ScrambleText text={event.date} isMobile={true} />
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-white/60" />
                </motion.div>
              </div>

              <h3 className="font-bold text-white leading-tight text-xl">
                {event.title}
              </h3>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-gray-300 leading-relaxed text-sm pt-2">
                  {event.desc}
                </p>
              </motion.div>
            </div>
          </TimelineCard>
        </div>
      ) : (
        <>
          {/* --- DESKTOP LAYOUT: Two column --- */}
          {/* LEFT SIDE */}
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
                    
                    <p className="text-gray-300 leading-tight md:leading-relaxed text-[8px] md:text-base opacity-90">
                      {event.desc}
                    </p>
                  </div>
                </TimelineCard>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
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

                    <p className="text-gray-300 leading-tight md:leading-relaxed text-[8px] md:text-base opacity-90">
                      {event.desc}
                    </p>
                  </div>
                </TimelineCard>
              </div>
            )}
          </div>
        </>
      )}

    </motion.div>
  );
};

export default function PublicationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"]
  });

  // --- PHYSICS ENGINE FOR LINE ---
  // Simplified for mobile performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 200 : (isMobile ? 150 : 100),
    damping: prefersReducedMotion ? 40 : (isMobile ? 35 : 30),
    restDelta: 0.001
  });
  
  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      {/* Hero Section with ShaderBackground - only covers viewport height */}
      <section className="relative w-full overflow-hidden md:min-h-screen">
        <ShaderBackground />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-start gap-3 px-6 pb-8 pt-24 sm:justify-center sm:gap-4 sm:pt-36 sm:pb-10 md:gap-6 md:px-10 md:pt-44 md:pb-16 md:justify-center md:min-h-screen lg:px-16">
          {/* Header */}
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1 }}
              className="text-center"
          >
              <h1 className="text-3xl md:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-5 md:mb-6">
                  Event Timeline
              </h1>
              <p className="text-base sm:text-base md:text-lg lg:text-xl text-white/40 max-w-xl mx-auto leading-relaxed px-2 md:px-4 mb-0 sm:mb-2">
                  The roadmap to the world&apos;s largest game creation event. 
                  Follow the schedule to ensure your submission is valid.
              </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Timeline Content Section with Black Background */}
      <section className="relative bg-black py-2 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-8 pb-12 sm:pt-10 md:pt-16 md:pb-32 max-w-6xl">
          {/* Timeline Container */}
          <div ref={containerRef} className="relative pb-10">
              
              {/* The Spine (Vertical Line) - Desktop: center, Mobile: left-aligned */}
              {!isMobile && (
                <>
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
                  
                  {/* Animated Gradient Line - Desktop only */}
                  <motion.div 
                      style={{ height }}
                      className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  >
                      {/* End Node: A small glowing dot at the tip of the line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  </motion.div>
                </>
              )}

              {/* Event Items */}
              <div className="relative z-20">
                  {EVENTS.map((event, index) => (
                      <TimelineRow 
                        key={index} 
                        event={event} 
                        index={index} 
                        isMobile={isMobile}
                      />
                  ))}
              </div>
              
          </div>
        </div>
      </section>
    </div>
  );
}