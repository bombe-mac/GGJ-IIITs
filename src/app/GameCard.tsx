import React, { useRef, useState } from "react";
import { ExternalLink, Gamepad2, Calendar, Globe, Code } from "lucide-react";

type Game = {
  name: string;
  year: number;
  theme: string;
  platforms: string[];
  tools: string[];
  about: string;
  link: string;
  color: string;
  instructions?: string;
  installation?: string;
  diversifiers?: string[];
};

type Props = {
  game: Game;
  index: number;
};

const InfoBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{title}</p>
    <p className="text-sm text-gray-300 leading-snug">{children}</p>
  </div>
);

const TechList = ({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) => (
  <div className="flex-1">
    <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 flex items-center gap-1">
      {icon} {title}
    </p>
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span key={item} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[11px] text-gray-400">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const GameCard: React.FC<Props> = ({ game, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (e.clientY - rect.top - centerY) / 20;
    const rotateY = (centerX - (e.clientX - rect.left)) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetTransform = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    }
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      onMouseEnter={() => setHovered(true)}
      /* RESPONSIVE UNIFORM SIZE: w-[85vw] on mobile, fixed on desktop */
      className="relative w-[80vw] sm:w-[350px] md:w-[400px] h-[520px] md:h-[600px] bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 ease-out flex flex-col group"
      style={{
        transformStyle: "preserve-3d",
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
      }}
    >
      {/* Interactive Glow Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${game.color.includes('from') ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)'}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full pointer-events-none">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 pointer-events-auto">
          <div className="space-y-1">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">GGJ {game.year}</span>
             </div>
             <h3 className="text-3xl font-bold text-white tracking-tighter group-hover:tracking-normal transition-all duration-500">
               {game.name}
             </h3>
          </div>
          <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white">
            <Gamepad2 className="w-5 h-5" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">About the project</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
              {game.about}
            </p>
          </div>

          <div className="flex gap-6 pointer-events-auto">
             <TechList icon={<Globe className="w-3 h-3" />} title="Platform" items={game.platforms} />
             <TechList icon={<Code className="w-3 h-3" />} title="Tools" items={game.tools} />
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-8 pointer-events-auto">
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white text-black font-bold text-sm transition-all hover:gap-5"
          >
            View
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;